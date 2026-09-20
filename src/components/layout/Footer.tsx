export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-surface-container-lowest/75 backdrop-blur-xl shadow-[0_-1px_16px_rgba(0,0,0,0.4)]">
      <div className="h-12 w-full px-4 md:px-8 xl:px-10 flex items-center justify-between font-code text-code-sm text-on-surface-variant">
        
        {/* LEFT: Navigation Hints */}
        <div className="flex items-center gap-3 md:gap-6">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container-high text-primary-fixed text-[11px] font-mono tracking-tight">
            <kbd className="text-primary-container bg-surface-container-highest px-1 rounded">↓/↑</kbd> 
            <span className="hidden sm:inline">or</span> 
            <kbd className="text-primary-container bg-surface-container-highest px-1 rounded">Space</kbd> 
            <span className="hidden sm:inline">Navigate Slides</span>
          </span>
          
          <span className="hidden lg:inline text-on-surface-variant/70">
            Engine: SIMD &amp; RSC Optimized
          </span>
        </div>

        {/* RIGHT: Copyright */}
        <div className="flex items-center gap-4">
          <span className="text-on-surface-variant/80 text-xs md:text-sm">
            © {currentYear} Systems &amp; Web Architect. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}