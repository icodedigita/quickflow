import { Check, ArrowDown } from "@phosphor-icons/react/dist/ssr";

export function Handover() {
  return (
    <section id="handover" className="relative py-24 lg:py-32 bg-ink-950 text-white overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-teal-500/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-brandblue-600/40 blur-3xl" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-teal-400 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              Signature Feature
            </div>

            <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05]">
              QuickFlow Handover
              <span className="text-teal-400 align-top text-2xl">™</span>
              <br />
              <span className="text-white/70 font-bold text-3xl sm:text-4xl">
                From Sales to Processing, without the gaps.
              </span>
            </h2>

            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl">
              The moment a deal closes, QuickFlow™ routes the case through your
              consulting, verification and processing teams with{" "}
              <span className="text-white font-semibold">SLA timers</span>,{" "}
              <span className="text-white font-semibold">named owners</span> and
              a full audit trail, so nothing sits in someone's inbox.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Auto-assign owner at every stage",
                "SLA clock starts the moment a handover fires",
                "Escalations when a stage overruns",
                "Full audit trail: who did what, when, and why",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-teal-500/20 text-teal-400">
                    <Check size={12} weight="bold" />
                  </span>
                  <span className="text-white/85 text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Handover chain visual */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-teal-500/20 to-brandblue-500/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 lg:p-8">
              <HandoverChain />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const chainSteps = [
  {
    tag: "DEAL CLOSED",
    who: "Sales · Ayesha K.",
    time: "10:24 AM",
    sla: "Triggered",
    color: "brand",
  },
  {
    tag: "CONSULTANT",
    who: "Consulting · Bilal R.",
    time: "24h SLA",
    sla: "18h left",
    color: "amber",
  },
  {
    tag: "CRO - VERIFY",
    who: "Verification · Nadia S.",
    time: "12h SLA",
    sla: "On track",
    color: "teal",
  },
  {
    tag: "PROCESSING",
    who: "Ops · Assign auto",
    time: "Case created",
    sla: "Owner assigned",
    color: "teal",
  },
];

function HandoverChain() {
  return (
    <div className="space-y-3">
      {chainSteps.map((step, i) => (
        <div key={step.tag}>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-teal-400/40 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white text-xs font-bold">
                  0{i + 1}
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-[0.15em] text-teal-400">
                    {step.tag}
                  </div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    {step.who}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-wider text-white/50 font-bold">
                  {step.time}
                </div>
                <div
                  className={`mt-1 inline-block rounded px-2 py-0.5 text-[10px] font-bold ${
                    step.color === "amber"
                      ? "bg-amber-400/15 text-amber-300"
                      : step.color === "brand"
                      ? "bg-brandblue-500/15 text-brandblue-300"
                      : "bg-teal-500/15 text-teal-300"
                  }`}
                >
                  {step.sla}
                </div>
              </div>
            </div>
          </div>
          {i < chainSteps.length - 1 && (
            <div className="flex justify-center py-1">
              <ArrowDown size={14} weight="bold" className="text-teal-400/60 flow-arrow" style={{ animationDelay: `${i * 0.3}s` }} />
            </div>
          )}
        </div>
      ))}
      <div className="mt-4 rounded-lg bg-teal-500/10 border border-teal-400/20 p-3 text-center">
        <p className="text-[11px] font-semibold text-teal-300">
          Every handover has an owner, a deadline and an audit trail.
        </p>
      </div>
    </div>
  );
}
