export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
      <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-teal-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-brandblue-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
        {/* Eyebrow */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-600/20 dark:border-teal-400/20 bg-white/70 dark:bg-white/5 px-4 py-1.5 text-xs font-semibold text-teal-700 dark:text-teal-400 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-400 animate-pulse" />
            The Consulting Operations OS
            <span className="text-ink-400">·</span>
            <span className="text-ink-500 dark:text-ink-400 font-medium">
              Built for Immigration & Visa Agencies
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="mt-8 text-center text-4xl sm:text-5xl lg:text-[64px] font-extrabold tracking-tight leading-[1.05] text-ink-950 dark:text-white">
          Run Your Entire
          <br className="hidden sm:block" />{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-teal-700 dark:text-teal-400">Consulting Agency</span>
            <span className="absolute inset-x-0 bottom-1 h-3 bg-teal-100/80 dark:bg-teal-400/15 -z-0 rounded" />
          </span>{" "}
          With <span className="text-brandblue-600 dark:text-brandblue-500">QuickFlow™</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-ink-500 dark:text-ink-400 leading-relaxed">
          From the first lead to the final payment, QuickFlow™ connects sales,
          consultants, CROs, processing teams and accounting into{" "}
          <span className="text-ink-900 dark:text-white font-semibold">
            one accountable workflow
          </span>
          .
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brandblue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brandblue-600/25 hover:bg-brandblue-700 transition-all hover:-translate-y-0.5"
          >
            Book a Live Demo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </a>
          <a
            href="#flow"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white dark:bg-white/5 px-6 py-3.5 text-sm font-semibold text-ink-900 dark:text-white border border-ink-900/10 dark:border-white/10 shadow-sm hover:border-teal-600/40 dark:hover:border-teal-400/40 hover:text-teal-700 dark:hover:text-teal-400 transition-all"
          >
            See How QuickFlow™ Works
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/>
            </svg>
          </a>
        </div>

        {/* Product mock */}
        <ProductMock />
      </div>
    </section>
  );
}

function ProductMock() {
  const stages = [
    { label: "Lead", count: "124", tint: "bg-brandblue-50 text-brandblue-700 border-brandblue-100 dark:bg-brandblue-500/10 dark:text-brandblue-400 dark:border-brandblue-500/20" },
    { label: "Sales", count: "56", tint: "bg-brandblue-50 text-brandblue-700 border-brandblue-100 dark:bg-brandblue-500/10 dark:text-brandblue-400 dark:border-brandblue-500/20" },
    { label: "Handover", count: "18", tint: "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20" },
    { label: "Processing", count: "42", tint: "bg-teal-50 text-teal-700 border-teal-100 dark:bg-teal-500/10 dark:text-teal-400 dark:border-teal-500/20" },
    { label: "Approval", count: "9", tint: "bg-violet-50 text-violet-700 border-violet-100 dark:bg-violet-500/10 dark:text-violet-400 dark:border-violet-500/20" },
    { label: "Invoice", count: "31", tint: "bg-teal-50 text-teal-700 border-teal-100 dark:bg-teal-500/10 dark:text-teal-400 dark:border-teal-500/20" },
  ];

  return (
    <div className="mt-16 relative">
      <div className="absolute -inset-4 bg-gradient-to-b from-teal-500/10 to-brandblue-500/10 rounded-3xl blur-2xl" />
      <div className="relative rounded-2xl bg-white dark:bg-ink-900 border border-ink-900/10 dark:border-white/10 shadow-2xl shadow-ink-900/10 dark:shadow-black/40 overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 h-10 border-b border-ink-900/5 dark:border-white/10 bg-canvas/60">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <div className="ml-4 flex items-center gap-2 text-[11px] text-ink-400 font-medium">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            quickflow.icodedigita.com
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-12 min-h-[400px]">
          {/* Sidebar */}
          <div className="hidden md:flex col-span-2 flex-col gap-1 p-4 border-r border-ink-900/5 dark:border-white/10 bg-canvas/40">
            {[
              { i: "◈", l: "Dashboard", a: false },
              { i: "◉", l: "Pipeline", a: true },
              { i: "◐", l: "Cases", a: false },
              { i: "◇", l: "Finance", a: false },
              { i: "◎", l: "People", a: false },
              { i: "◆", l: "Reports", a: false },
            ].map((item) => (
              <div
                key={item.l}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12px] font-semibold ${
                  item.a
                    ? "bg-teal-600 text-white shadow-sm"
                    : "text-ink-500 dark:text-ink-400 hover:bg-white dark:hover:bg-white/5"
                }`}
              >
                <span>{item.i}</span>
                {item.l}
              </div>
            ))}
          </div>

          {/* Main - Kanban */}
          <div className="col-span-12 md:col-span-10 p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-bold text-ink-900 dark:text-white">Case Pipeline</h3>
                <p className="text-[11px] text-ink-400 font-medium">
                  280 active, 42 due today, 3 SLA breach warnings
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <div className="rounded-md bg-teal-50 dark:bg-teal-500/10 border border-teal-100 dark:border-teal-500/20 px-2 py-1 text-[10px] font-bold text-teal-700 dark:text-teal-400">
                  ● Live
                </div>
                <div className="rounded-md bg-white dark:bg-white/5 border border-ink-900/10 dark:border-white/10 px-2 py-1 text-[10px] font-semibold text-ink-500 dark:text-ink-400">
                  This week
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {stages.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-ink-900/5 dark:border-white/10 bg-canvas/50 p-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-ink-500 dark:text-ink-400">
                      {s.label}
                    </span>
                    <span
                      className={`rounded px-1.5 py-0.5 text-[10px] font-bold border ${s.tint}`}
                    >
                      {s.count}
                    </span>
                  </div>
                  <div className="mt-2 space-y-2">
                    <MiniCard name="A. Khan" tag="UK Visitor" />
                    <MiniCard name="M. Ali" tag="CA Study" />
                    {s.label === "Handover" && (
                      <div className="rounded-lg border border-amber-200 dark:border-amber-500/20 bg-amber-50 dark:bg-amber-500/10 p-2 text-[10px] font-semibold text-amber-800 dark:text-amber-400">
                        ⏱ SLA 4h
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniCard({ name, tag }: { name: string; tag: string }) {
  return (
    <div className="rounded-lg bg-white dark:bg-ink-950 p-2 border border-ink-900/5 dark:border-white/10 shadow-sm">
      <div className="text-[11px] font-semibold text-ink-900 dark:text-white">{name}</div>
      <div className="text-[9px] text-ink-400 font-medium mt-0.5">{tag}</div>
    </div>
  );
}
