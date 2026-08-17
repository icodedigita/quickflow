export function CTA() {
  return (
    <section id="demo" className="py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-ink-950 p-10 lg:p-16 text-white">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-10" />
          <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-brandblue-600/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-teal-500/30 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05]">
                Keep every case{" "}
                <span className="text-teal-400">moving.</span>
              </h2>
              <p className="mt-5 text-lg text-white/70 max-w-md">
                See QuickFlow™ tailored to your agency, from lead capture to
                final payment, in a 30-minute live walkthrough.
              </p>
            </div>
            <div className="lg:justify-self-end w-full lg:max-w-md">
              <div className="rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur p-6">
                <div className="space-y-3">
                  <Input label="Work email" placeholder="you@agency.com" />
                  <Input label="Agency name" placeholder="Skyline Advisors" />
                  <div className="grid grid-cols-2 gap-3">
                    <Select label="Team size" options={["1-10", "11-50", "51-200", "200+"]} />
                    <Select label="Region" options={["MENA", "South Asia", "Europe", "Americas", "Other"]} />
                  </div>
                </div>
                <button className="mt-5 w-full rounded-xl bg-brandblue-600 hover:bg-brandblue-700 transition-colors py-3.5 text-sm font-bold text-white shadow-lg shadow-brandblue-600/30">
                  Book my live demo →
                </button>
                <p className="mt-3 text-[11px] text-white/50 text-center">
                  No credit card. Tailored to your ops in 24h.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/60 mb-1.5">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="w-full rounded-lg bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/30 transition"
      />
    </div>
  );
}

function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/60 mb-1.5">
        {label}
      </label>
      <select className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2.5 text-sm text-white focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/30 transition">
        {options.map((o) => (
          <option key={o} value={o} className="text-ink-900">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
