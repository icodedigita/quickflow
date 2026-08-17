export function Testimonial() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-teal-700 to-teal-900 p-10 lg:p-16 text-white overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brandblue-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />

          <svg
            className="relative text-teal-400/50"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6.5 10c-.6 0-1.5.1-2.3.4C4.5 8 6 6 8 5l-.7-2c-3 1.4-5.3 4.5-5.3 8.5 0 3 1.9 4.5 4 4.5s3.5-1.6 3.5-3.5S8.5 10 6.5 10zm11 0c-.6 0-1.5.1-2.3.4.3-2.4 1.8-4.4 3.8-5.4L18.3 3c-3 1.4-5.3 4.5-5.3 8.5 0 3 1.9 4.5 4 4.5s3.5-1.6 3.5-3.5S19.5 10 17.5 10z" />
          </svg>

          <blockquote className="relative mt-6 text-2xl sm:text-3xl font-bold leading-snug tracking-tight">
            "We used to lose a full day between a deal closing and processing
            picking it up. With QuickFlow™ Handover, that gap is{" "}
            <span className="text-teal-300">measured in minutes</span>, and
            every case has an owner."
          </blockquote>

          <div className="relative mt-8 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-teal-500 flex items-center justify-center font-bold text-white ring-2 ring-white/20">
              RS
            </div>
            <div>
              <div className="font-bold">Rana Saeed</div>
              <div className="text-sm text-teal-200">
                CEO, Settlement Experts
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}