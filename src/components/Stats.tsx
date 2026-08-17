const stats = [
  { value: "3.4×", label: "Faster case turnaround" },
  { value: "92%", label: "Fewer SLA breaches" },
  { value: "1 hr", label: "Saved per case, per rep, per day" },
  { value: "100%", label: "Audit-trailed handovers" },
];

export function Stats() {
  return (
    <section className="py-16 lg:py-20 border-y border-ink-900/5 dark:border-white/10 bg-white dark:bg-ink-900">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-ink-400">
          Trusted by consulting agencies moving thousands of cases every month
        </p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-extrabold tracking-tight text-ink-950 dark:text-white">
                {s.value}
              </div>
              <div className="mt-2 text-xs font-semibold text-ink-500 dark:text-ink-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
