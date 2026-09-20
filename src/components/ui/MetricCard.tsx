"use client";

interface MetricCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  colorClass: string; // например, "text-primary-container"
  glowColor: string;  // например, "bg-primary-container/10"
}

export default function MetricCard({ title, value, subtitle, icon, colorClass, glowColor }: MetricCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-surface-container/70 backdrop-blur-2xl p-4 shadow-lg hover:shadow-[0_0_24px_rgba(0,240,255,0.2)] transition-all duration-300 group">
      <div className={`absolute -right-4 -bottom-4 w-16 h-16 rounded-full ${glowColor} blur-xl group-hover:scale-150 transition-transform`} />
      <div className="flex items-center justify-between">
        <span className="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider">{title}</span>
        <span className={`material-symbols-outlined ${colorClass} text-[18px]`}>{icon}</span>
      </div>
      <div className={`mt-2 font-headline-md text-headline-md font-bold ${colorClass} tracking-tight`}>{value}</div>
      <div className="mt-0.5 font-code-sm text-code-sm text-on-surface-variant/80 flex items-center gap-1">
        <span className={`w-1.5 h-1.5 rounded-full ${colorClass.replace('text-', 'bg-')}`} /> {subtitle}
      </div>
    </div>
  );
}