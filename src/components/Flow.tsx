const stages = [
  { label: "Lead", desc: "Capture" },
  { label: "Sales", desc: "Qualify & close" },
  { label: "Invoice", desc: "Bill client" },
  { label: "Payment", desc: "Reconcile" },
  { label: "Handover", desc: "SLA-enforced" },
  { label: "CRO", desc: "Verify" },
  { label: "Processing", desc: "Case work" },
  { label: "Approval", desc: "Sign-off" },
];

export function Flow() {
  return (
    <section id="flow" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
            The Flow
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-950 dark:text-white leading-tight">
            Your entire operation,<br/>from{" "}
            <em><span className="text-brandblue-600 dark:text-brandblue-500">lead</span></em> to{" "}
            <em><span className="text-teal-700 dark:text-teal-400">cash</span></em>.
          </h2>
          <p className="mt-5 text-lg text-ink-500 dark:text-ink-400 leading-relaxed">
            QuickFlow™ isn't a stack of disconnected tools. Every stage of your
            consulting operation lives on one accountable pipeline. Nothing
            gets stuck, dropped, or lost between teams.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="mt-14 rounded-2xl bg-white dark:bg-ink-900 border border-ink-900/10 dark:border-white/10 shadow-sm p-6 lg:p-10">
          <div className="flex flex-wrap lg:flex-nowrap items-stretch gap-2 lg:gap-0">
            {stages.map((stage, i) => (
              <div
                key={stage.label}
                className="flex items-center flex-1 min-w-[120px]"
              >
                <div className="flex-1 group">
                  <div className="relative rounded-xl border border-ink-900/10 dark:border-white/10 bg-canvas/50 group-hover:bg-teal-50 dark:group-hover:bg-teal-500/10 group-hover:border-teal-600/30 dark:group-hover:border-teal-400/30 transition-all p-4 text-center">
                    <div className="text-[10px] font-bold text-ink-400 mb-1">
                      0{i + 1}
                    </div>
                    <div className="text-sm font-bold text-ink-900 dark:text-white">
                      {stage.label}
                    </div>
                    <div className="text-[11px] text-ink-500 dark:text-ink-400 font-medium mt-0.5">
                      {stage.desc}
                    </div>
                  </div>
                </div>
                {i < stages.length - 1 && (
                  <div className="flex items-center justify-center px-1 lg:px-1.5">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-teal-600 flow-arrow"
                      style={{ animationDelay: `${i * 0.25}s` }}
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Three pillars */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Pillar
              title="Quick"
              desc="Automations and SLAs move work forward without manual chasing."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              }
              accent="text-brandblue-600 bg-brandblue-50 dark:bg-brandblue-500/10"
            />
            <Pillar
              title="Visible"
              desc="One pipeline. Every case, deadline and owner in real-time."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              }
              accent="text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-500/10"
            />
            <Pillar
              title="Accountable"
              desc="Every handover has an owner, a deadline and an audit trail."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              }
              accent="text-violet-700 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillar({
  title,
  desc,
  icon,
  accent,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  accent: string;
}) {
  return (
    <div className="rounded-xl border border-ink-900/5 dark:border-white/10 bg-white dark:bg-ink-950 p-5 hover:shadow-md transition-shadow">
      <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${accent}`}>
        <div className="h-5 w-5">{icon}</div>
      </div>
      <h3 className="mt-4 text-lg font-bold text-ink-900 dark:text-white">{title}.</h3>
      <p className="mt-1 text-sm text-ink-500 dark:text-ink-400 leading-relaxed">{desc}</p>
    </div>
  );
}
