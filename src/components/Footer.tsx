import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-ink-900/5 dark:border-white/10 bg-white dark:bg-ink-900">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Logo />
            <p className="mt-5 text-sm text-ink-500 dark:text-ink-400 max-w-xs leading-relaxed">
              QuickFlow™ is the Consulting Operations OS. Make Work Flow. Move
              Every Case Forward.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {["𝕏", "in", "yt", "gh"].map((i) => (
                <a
                  key={i}
                  href="#"
                  className="h-8 w-8 flex items-center justify-center rounded-lg border border-ink-900/10 dark:border-white/10 text-ink-500 dark:text-ink-400 text-xs font-bold hover:border-teal-600/40 dark:hover:border-teal-400/40 hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
                >
                  {i}
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Platform"
            items={["CRM", "Sales", "Handover", "Cases", "Finance"]}
          />
          <FooterCol
            title="Solutions"
            items={["Immigration", "Visa Agencies", "Consulting", "Multi-branch"]}
          />
          <FooterCol
            title="Company"
            items={["About", "Customers", "Pricing", "Contact", "Careers"]}
          />
        </div>

        <div className="mt-12 pt-6 border-t border-ink-900/5 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ink-400">
          <div>© 2026 QuickFlow™. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-ink-700 dark:hover:text-ink-200">Privacy</a>
            <a href="#" className="hover:text-ink-700 dark:hover:text-ink-200">Terms</a>
            <a href="#" className="hover:text-ink-700 dark:hover:text-ink-200">Security</a>
            <a href="#" className="hover:text-ink-700 dark:hover:text-ink-200">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-ink-900 dark:text-white">
        {title}
      </div>
      <ul className="mt-4 space-y-2.5">
        {items.map((i) => (
          <li key={i}>
            <a
              href="#"
              className="text-sm text-ink-500 dark:text-ink-400 hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
            >
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
