import { experience } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Tag from "./Tag";

export default function Experience() {
  return (
    <section id="experience" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Where I've Grown." subtitle="Learning through real-world projects, practical experiences, and collaboration." />
        <ol className="relative max-w-4xl border-l border-line">
          {experience.map((e, i) => (
            <li key={e.company} className="relative pb-16 pl-8 last:pb-0 md:pl-12">
              <span aria-hidden className={`absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-accent ${i === 0 ? "bg-accent" : "bg-ivory"}`} />
              <Reveal>
                <p className="font-display text-sm text-mute">{e.duration} · {e.location}</p>
                <h3 className="mt-1 font-display text-2xl font-bold sm:text-3xl">{e.role}</h3>
                <p className="font-serif text-xl italic text-accent">{e.company}</p>
                <ul className="mt-5 space-y-2 leading-relaxed text-mute">
                  {e.points.map((p) => <li key={p} className="flex gap-3"><span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-accent" />{p}</li>)}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">{e.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
