import Reveal from "./Reveal";

export default function SectionHeading({ title, subtitle, dark = false }: { title: string; subtitle?: string; dark?: boolean }) {
  return (
    <Reveal className="mb-14 max-w-2xl md:mb-20">
      <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">{title}</h2>
      {subtitle && <p className={`mt-5 text-base leading-relaxed md:text-lg ${dark ? "text-[#B9B4AD]" : "text-mute"}`}>{subtitle}</p>}
    </Reveal>
  );
}
