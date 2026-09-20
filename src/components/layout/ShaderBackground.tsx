"use client";

import { useEffect, useRef } from "react";

export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // --- Переменные для очистки (cleanup) ---
    let animationId: number;
    let resizeObserver: ResizeObserver | null = null;
    let mouseMoveHandler: ((event: MouseEvent) => void) | null = null;

    // --- Настройка размеров ---
    function syncSize() {
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }
    syncSize();

    // --- Инициализация WebGL ---
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return;

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      varying vec2 v_texCoord;

      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m; m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
          vec2 st = gl_FragCoord.xy / u_resolution.xy;
          vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
          vec2 mouse = u_mouse.xy / u_resolution.xy;
          float distMouse = length(st - mouse);
          float t = u_time * 0.35;
          
          float n1 = snoise(p * 1.5 + vec2(t * 0.2, t * 0.15));
          float n2 = snoise(p * 2.5 - vec2(n1, t * 0.25));
          float n3 = snoise(p * 3.5 + vec2(n2 * 1.2, n1 * 0.8));
          float wave = sin(p.x * 3.0 + n3 * 4.0 + t) * cos(p.y * 3.0 + n2 * 3.0 + t * 0.7);
          
          vec3 bgDeep = vec3(0.043, 0.047, 0.075);
          vec3 cyanGlow = vec3(0.0, 0.94, 1.0);
          vec3 purpleGlow = vec3(0.58, 0.18, 0.98);
          vec3 limeGlow = vec3(0.0, 0.88, 0.55);
          
          float r = snoise(p * 1.8 + vec2(t * 0.22, 0.0) + n2 * 0.3);
          float g = snoise(p * 1.8 + vec2(t * 0.20, 0.02) + n2 * 0.3);
          float b = snoise(p * 1.8 + vec2(t * 0.18, 0.04) + n2 * 0.3);
          vec3 chromatic = vec3(r, g, b) * 0.5 + 0.5;
          
          vec3 col = bgDeep;
          col += mix(cyanGlow, purpleGlow, n2 * 0.5 + 0.5) * (n1 * 0.28 + 0.18);
          col += limeGlow * (pow(max(0.0, n3), 3.0) * 0.25);
          
          float highlight = pow(max(0.0, 1.0 - abs(n3 * 1.8 + wave * 0.5)), 4.0);
          col += chromatic * highlight * 0.45;
          
          float mouseGlow = smoothstep(0.45, 0.0, distMouse);
          col += cyanGlow * mouseGlow * 0.22;
          
          float vig = smoothstep(1.4, 0.35, length(p * 0.65));
          col *= vig * 0.85;
          
          gl_FragColor = vec4(col, 1.0);
      }
    `;

    function cs(type: number, src: string) {
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const prog = gl.createProgram();
    if (!prog) return;
    const vertexShader = cs(gl.VERTEX_SHADER, vs);
    const fragmentShader = cs(gl.FRAGMENT_SHADER, fs);
    if (!vertexShader || !fragmentShader) return;

    gl.attachShader(prog, vertexShader);
    gl.attachShader(prog, fragmentShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    
    mouseMoveHandler = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };
    window.addEventListener("mousemove", mouseMoveHandler);

    function render(t: number) {
      if (!gl || !prog) return;
      if (typeof ResizeObserver === "undefined") syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationId = requestAnimationFrame(render);
    }

    // --- Доступность (Accessibility) ---
    // Если пользователь предпочитает уменьшенное движение в ОС, рисуем только один кадр
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      render(0);
    } else {
      animationId = requestAnimationFrame(render);
    }

    // --- ОЧИСТКА (CRITICAL для Next.js) ---
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (resizeObserver) resizeObserver.disconnect();
      if (mouseMoveHandler) window.removeEventListener("mousemove", mouseMoveHandler);
      
      // Освобождение WebGL ресурсов
      gl.deleteProgram(prog);
      if (vertexShader) gl.deleteShader(vertexShader);
      if (fragmentShader) gl.deleteShader(fragmentShader);
      if (buf) gl.deleteBuffer(buf);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none -z-10" 
    />
  );
}