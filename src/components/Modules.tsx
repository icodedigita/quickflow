const modules = [
  {
    name: "QuickFlow CRM",
    desc: "Capture and manage every lead with source tracking, scoring and smart routing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    accent: "brandblue",
  },
  {
    name: "QuickFlow Sales",
    desc: "Turn opportunities into paying clients with stage-based pipelines and quotas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    accent: "brandblue",
  },
  {
    name: "QuickFlow Handover",
    desc: "Move deals between departments with SLA enforcement, owners and escalation.",
    tag: "Signature",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17l5-5 5 5"/>
        <path d="M7 7l5 5 5-5"/>
      </svg>
    ),
    accent: "teal",
  },
  {
    name: "QuickFlow Cases",
    desc: "Manage processing, documents and delivery with role-based case workflows.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7h-3V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
      </svg>
    ),
    accent: "teal",
  },
  {
    name: "QuickFlow Finance",
    desc: "Invoices, payments, reconciliation and accounting, all tied to your cases.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    accent: "teal",
  },
  {
    name: "QuickFlow People",
    desc: "HR, attendance, leave and payroll, for the humans running your operation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 11h-6"/>
        <path d="M19 8v6"/>
      </svg>
    ),
    accent: "violet",
  },
  {
    name: "QuickFlow Connect",
    desc: "WhatsApp Business messaging built in, with templates, threads and case linking.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
    accent: "emerald",
  },
  {
    name: "QuickFlow Control",
    desc: "Branches, roles, permissions and audit logs. Total operational control.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
    accent: "ink",
  },
];

const accentMap: Record<string, string> = {
  brandblue: "bg-brandblue-50 dark:bg-brandblue-500/10 text-brandblue-600 dark:text-brandblue-400 group-hover:bg-brandblue-600 group-hover:text-white",
  teal: "bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400 group-hover:bg-teal-600 group-hover:text-white",
  violet: "bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400 group-hover:bg-violet-600 group-hover:text-white",
  emerald: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white",
  ink: "bg-ink-900/5 dark:bg-white/5 text-ink-700 dark:text-ink-200 group-hover:bg-ink-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-ink-900",
};

export function Modules() {
  return (
    <section id="modules" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-950 dark:text-white leading-tight">
            Eight Modules.{" "}
            <span className="text-teal-700 dark:text-teal-400">One Platform.</span>
          </h2>
          <p className="mt-5 text-lg text-ink-500 dark:text-ink-400 leading-relaxed">
            Not a bundle of disconnected tools. A single operating system where
            every module shares data, permissions and accountability.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map((m) => (
            <div
              key={m.name}
              className="group relative rounded-2xl bg-white dark:bg-ink-900 border border-ink-900/5 dark:border-white/10 p-6 hover:border-teal-600/30 dark:hover:border-teal-400/30 hover:shadow-xl hover:shadow-teal-900/5 dark:hover:shadow-black/40 transition-all hover:-translate-y-1"
            >
              {m.tag && (
                <span className="absolute top-4 right-4 rounded-full bg-teal-600 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5">
                  {m.tag}
                </span>
              )}
              <div
                className={`h-11 w-11 rounded-xl flex items-center justify-center transition-colors ${accentMap[m.accent]}`}
              >
                <div className="h-5 w-5">{m.icon}</div>
              </div>
              <h3 className="mt-5 text-base font-bold text-ink-900 dark:text-white">
                {m.name}
              </h3>
              <p className="mt-2 text-sm text-ink-500 dark:text-ink-400 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
