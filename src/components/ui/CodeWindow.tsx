import { FileCode, Activity, Cpu } from "lucide-react";

// Структурированный C++ код с подсветкой и номерами строк
const CODE_LINES = [
  {
    tokens: [
      { text: "#include ", color: "text-secondary font-semibold" },
      { text: "<alhorithm>", color: "text-tertiary" },
    ],
  },
  {
    tokens: [
      { text: "#include ", color: "text-secondary font-semibold" },
      { text: "<vulkan/vulkan.h>", color: "text-tertiary" },
    ],
  },
  { tokens: [] },
  {
    tokens: [
      { text: "// SIMD Particle Physics Pipeline Engine", color: "text-outline-variant/60 italic" },
    ],
  },
  {
    tokens: [
      { text: "namespace ", color: "text-secondary font-semibold" },
      { text: "engine ", color: "text-on-surface font-semibold" },
      { text: "{" },
    ],
  },
  {
    tokens: [
      { text: "  class ", color: "text-secondary font-semibold" },
      { text: "alignas", color: "text-secondary" },
      { text: "(32) " },
      { text: "ParticleEngine ", color: "text-primary-container font-semibold" },
      { text: "{" },
    ],
  },
  { tokens: [{ text: "  public:", color: "text-secondary" }] },
  {
    tokens: [
      { text: "    void ", color: "text-secondary font-semibold" },
      { text: "step_simd", color: "text-primary-fixed font-semibold" },
      { text: "(" },
      { text: "float ", color: "text-secondary" },
      { text: "dt) " },
      { text: "noexcept ", color: "text-secondary" },
      { text: "{" },
    ],
  },
  {
    tokens: [
      { text: "      const ", color: "text-secondary font-semibold" },
      { text: "__m256 ", color: "text-tertiary-container font-semibold" },
      { text: "v_dt = _mm256_set1_ps(dt);" },
    ],
  },
  {
    tokens: [
      { text: "      for ", color: "text-secondary font-semibold" },
      { text: "(" },
      { text: "size_t ", color: "text-secondary" },
      { text: "i = 0; i < count_; i += 8) {" },
    ],
  },
  {
    tokens: [
      { text: "        __m256 pos = _mm256_load_ps(&pos_x_[i]);" },
    ],
  },
  {
    tokens: [
      { text: "        __m256 vel = _mm256_load_ps(&vel_x_[i]);" },
    ],
  },
  {
    tokens: [
      { text: "        pos = _mm256_fmadd_ps(vel, v_dt, pos);" },
    ],
  },
  {
    tokens: [
      { text: "        _mm256_store_ps(&pos_x_[i], pos);" },
    ],
  },
  { tokens: [{ text: "      }" }] },
  { tokens: [{ text: "    }" }] },
  { tokens: [{ text: "  private:" }] },
  {
    tokens: [
      { text: "    size_t ", color: "text-secondary" },
      { text: "count_{1024};" },
    ],
  },
  {
    tokens: [
      { text: "    alignas", color: "text-secondary" },
      { text: "(32) " },
      { text: "float ", color: "text-secondary" },
      { text: "pos_x_[1024];" },
    ],
  },
  { tokens: [{ text: "  };" }] },
  { tokens: [{ text: "}" }] },
  { tokens: [] },
  {
    tokens: [
      { text: "// Next.js RSC & WebWorker Bridge Interface", color: "text-outline-variant/60 italic" },
    ],
  },
  {
    tokens: [
      { text: "EMSCRIPTEN_BINDINGS", color: "text-secondary font-semibold" },
      { text: "(core_module) {" },
    ],
  },
  {
    tokens: [
      { text: "  emscripten::class_<engine::ParticleEngine>(" },
      { text: "\"ParticleEngine\"", color: "text-tertiary" },
      { text: ")" },
    ],
  },
  { tokens: [{ text: "    .constructor<size_t>()" }] },
  {
    tokens: [
      { text: "    .function(" },
      { text: "\"step\"", color: "text-tertiary" },
      { text: ", &engine::ParticleEngine::step_simd);" },
    ],
  },
  { tokens: [{ text: "}" }] },
];

export default function CodeWindow() {
  return (
    <article
      className="relative w-full rounded-2xl bg-surface-container-lowest/95 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden border border-outline-variant/20 select-none"
      aria-label="C++ и Next.js Code Snippet"
    >
      {/* --- Верхняя панель окна --- */}
      <header className="px-4 py-3 bg-surface-container/60 backdrop-blur-md flex items-center justify-between border-b border-outline-variant/20">
        <div className="flex items-center gap-2">
          {/* Кнопки управления окном */}
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-error/80" />
            <span className="w-3 h-3 rounded-full bg-secondary/70" />
            <span className="w-3 h-3 rounded-full bg-tertiary-container/80" />
          </div>
          {/* Имя файла */}
          <span className="ml-2 font-code text-code-sm text-on-surface-variant/80 flex items-center gap-1.5">
            <FileCode className="w-3.5 h-3.5 text-primary-container" aria-hidden="true" />
            engine.cpp
          </span>
        </div>

        {/* Бейджи стека */}
        <div className="flex items-center gap-1.5">
          <span className="px-2 py-0.5 rounded bg-surface-container-high text-[10px] font-code font-semibold text-primary-fixed">
            C++
          </span>
        </div>
      </header>

      {/* --- Блок с кодом и номерами строк --- */}
      <div className="relative max-h-[310px] overflow-hidden py-3 font-code text-code-sm text-on-surface">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody>
              {CODE_LINES.map((line, idx) => (
                <tr key={idx} className="hover:bg-surface-container/30 transition-colors leading-relaxed">
                  {/* Номер строки */}
                  <td className="w-10 pl-3 pr-2 text-right select-none font-mono text-[11px] text-outline-variant/40 align-top">
                    {idx + 1}
                  </td>
                  {/* Текст кода */}
                  <td className="pr-4 whitespace-pre font-code text-code-sm">
                    {line.tokens.length > 0 ? (
                      line.tokens.map((token, tIdx) => (
                        <span key={tIdx} className={token.color || "text-on-surface"}>
                          {token.text}
                        </span>
                      ))
                    ) : (
                      <br />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Мягкое угасание снизу для скрытия вылезающего кода */}
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-surface-container-lowest/95 to-transparent pointer-events-none" />
      </div>

      {/* --- Нижняя панель статуса --- */}
      <footer className="px-4 py-2.5 bg-surface-container-high/40 backdrop-blur-sm flex items-center justify-between font-code text-[11px] text-on-surface-variant border-t border-outline-variant/20">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-tertiary-container animate-pulse" aria-hidden="true" />
          <span className="text-tertiary font-semibold">Zero GC Overhead</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-on-surface-variant/80">
          <Cpu className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Linux Kernel x86</span>
        </div>
      </footer>
    </article>
  );
}