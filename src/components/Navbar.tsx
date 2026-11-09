import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "../data/portfolio";

export default function Navbar({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    const on = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-line bg-ivory/90 backdrop-blur" : "border-b border-transparent"}`}>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-display text-lg font-bold tracking-[0.18em]">{profile.wordmark}</a>
        <ul className="hidden items-center gap-9 md:flex">
          {navItems.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} aria-current={active === n.id ? "true" : undefined}
                 className={`link-line font-display text-sm font-medium ${active === n.id ? "text-ink" : "text-mute hover:text-ink"}`}>{n.label}</a>
            </li>
          ))}
        </ul>
        <button className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden" aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      <div id="mobile-menu" className={`grid overflow-hidden transition-all duration-300 md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <ul className="min-h-0 px-6">
          {navItems.map((n) => (
            <li key={n.id} className="border-t border-line">
              <a href={`#${n.id}`} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}
                 className={`flex min-h-[48px] items-center font-display text-lg ${active === n.id ? "text-ink" : "text-mute"}`}>{n.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
