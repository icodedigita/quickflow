import {
  UsersThree,
  ChartLineUp,
  ArrowsClockwise,
  FolderOpen,
  CurrencyCircleDollar,
  Users,
  ChatCircleText,
  GearSix,
} from "@phosphor-icons/react/dist/ssr";

const modules = [
  {
    name: "QuickFlow™ CRM",
    desc: "Capture and manage every lead with source tracking, scoring and smart routing.",
    icon: <UsersThree weight="bold" />,
    accent: "brandblue",
  },
  {
    name: "QuickFlow™ Sales",
    desc: "Turn opportunities into paying clients with stage-based pipelines and quotas.",
    icon: <ChartLineUp weight="bold" />,
    accent: "brandblue",
  },
  {
    name: "QuickFlow™ Handover",
    desc: "Move deals between departments with SLA enforcement, owners and escalation.",
    tag: "Signature",
    icon: <ArrowsClockwise weight="bold" />,
    accent: "teal",
  },
  {
    name: "QuickFlow™ Cases",
    desc: "Manage processing, documents and delivery with role-based case workflows.",
    icon: <FolderOpen weight="bold" />,
    accent: "teal",
  },
  {
    name: "QuickFlow™ Finance",
    desc: "Invoices, payments, reconciliation and accounting, all tied to your cases.",
    icon: <CurrencyCircleDollar weight="bold" />,
    accent: "teal",
  },
  {
    name: "QuickFlow™ People",
    desc: "HR, attendance, leave and payroll, for the humans running your operation.",
    icon: <Users weight="bold" />,
    accent: "violet",
  },
  {
    name: "QuickFlow™ Connect",
    desc: "WhatsApp Business messaging built in, with templates, threads and case linking.",
    icon: <ChatCircleText weight="bold" />,
    accent: "emerald",
  },
  {
    name: "QuickFlow™ Control",
    desc: "Branches, roles, permissions and audit logs. Total operational control.",
    icon: <GearSix weight="bold" />,
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
