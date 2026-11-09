import { education, profile } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="A Little About Me." />
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="max-w-prose space-y-5 text-lg leading-[1.8] text-mute">
              {profile.about.map((p, i) => <p key={p} className={i === 0 ? "font-serif text-2xl italic leading-snug text-ink" : ""}>{p}</p>)}
            </div>
            <p className="mt-8 border-t border-line pt-4 font-display text-sm text-mute">{profile.location}</p>
          </Reveal>
          <div>
            <h3 className="mb-8 font-display text-sm font-medium tracking-[0.25em] text-mute">EDUCATION</h3>
            <ol className="relative border-l border-line">
              {education.map((e, i) => (
                <li key={e.degree} className="relative pb-14 pl-8 last:pb-0">
                  <span aria-hidden className={`absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-accent ${i === 0 ? "bg-accent" : "bg-white"}`} />
                  <Reveal>
                    <p className="font-display text-sm text-mute">{e.years}</p>
                    <h4 className="mt-1 font-display text-xl font-bold">{e.degree}</h4>
                    {e.field && <p className="font-serif italic">{e.field}</p>}
                    <p className="mt-1 text-mute">{e.school}</p>
                    <div className="mt-5 flex items-end gap-4 border-t border-line pt-4">
                      <span className="font-display text-5xl font-bold leading-none tracking-tight">{e.score}</span>
                      <span className="pb-1 text-sm text-mute">{e.scoreLabel}</span>
                    </div>
                    {e.status && <p className="mt-3 inline-block bg-ivory px-3 py-1 text-xs font-medium">{e.status}</p>}
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
