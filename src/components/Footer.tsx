import { Github, Linkedin, Mail } from "lucide-react";
import { navItems, profile } from "../data/portfolio";

export default function Footer() {
  const icons = [
    { Icon: Linkedin, href: profile.linkedin, label: "LinkedIn", ext: true },
    { Icon: Github, href: profile.github, label: "GitHub", ext: true },
    { Icon: Mail, href: `mailto:${profile.email}`, label: "Email", ext: false },
  ];
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div>
            <p className="font-display text-lg font-bold tracking-[0.18em]">{profile.wordmark}</p>
            <p className="mt-2 font-serif italic text-mute">{profile.tagline}</p>
          </div>
          <nav aria-label="Footer"><ul className="flex flex-wrap gap-x-6 gap-y-1">
            {navItems.map((n) => <li key={n.id}><a href={`#${n.id}`} className="link-line inline-flex min-h-[44px] items-center text-sm text-mute hover:text-ink">{n.label}</a></li>)}
          </ul></nav>
          <div className="flex">
            {icons.map(({ Icon, href, label, ext }) => (
              <a key={label} href={href} aria-label={label} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                 className="flex h-11 w-11 items-center justify-center transition-colors hover:text-accent"><Icon size={20} /></a>
            ))}
          </div>
        </div>
        <p className="mt-10 border-t border-line pt-6 text-sm text-mute">© 2026 Breetta J. All rights reserved.</p>
      </div>
    </footer>
  );
}
