import { BarChart3, Brain, Code2, Cpu, Database, Globe, Wrench, type LucideIcon } from "lucide-react";
import { skills } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons: Record<string, LucideIcon> = { code: Code2, brain: Brain, chart: BarChart3, database: Database, globe: Globe, wrench: Wrench, cpu: Cpu };

export default function Skills() {
  return (
    <section id="skills" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="My Technical Toolkit." subtitle="Technologies and tools I use to explore ideas and build practical solutions." />
        <div className="grid gap-x-12 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => {
            const Icon = icons[s.icon] ?? Code2;
            return (
              <Reveal key={s.category} delay={(i % 3) * 80}>
                <article className="group h-full min-h-[210px] border-t border-ink bg-white p-6 transition-colors duration-300 hover:bg-[#FBFAF7]">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-bold">{s.category}</h3>
                    <Icon size={22} className="text-accent transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden />
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <li key={it} className="border border-line px-3 py-1 text-sm text-mute transition-colors group-hover:border-accent/60 group-hover:text-ink">{it}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
