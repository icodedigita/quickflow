import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-canvas/80 border-b border-ink-900/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-ink-700 dark:text-ink-200">
          <a href="#platform" className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
            Platform
          </a>
          <a href="#flow" className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
            The Flow
          </a>
          <a href="#handover" className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
            Handover™
          </a>
          <a href="#modules" className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
            Modules
          </a>
          <a href="#pricing" className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
            Pricing
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#signin"
            className="hidden sm:inline-flex text-sm font-semibold text-ink-700 dark:text-ink-200 hover:text-ink-900 dark:hover:text-white px-3 py-2"
          >
            Sign in
          </a>
          <ThemeToggle />
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-lg bg-brandblue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brandblue-700 transition-colors"
          >
            Book a Demo
            <ArrowRight size={14} weight="bold" />
          </a>
        </div>
      </div>
    </header>
  );
}
