import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { projects, type Project } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Tag from "./Tag";

function Thumb({ p, className = "" }: { p: Project; className?: string }) {
  if (p.image) return <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" className={`h-full w-full object-cover ${className}`} />;
  return (
    <div className={`relative flex h-full w-full flex-col justify-between bg-night p-6 text-ivory ${className}`} role="img" aria-label={`${p.name} placeholder illustration`}>
      <span className="font-serif text-7xl italic text-accent sm:text-8xl">{p.number}</span>
      <div>
        <div className="mb-4 h-px w-12 bg-accent" />
        <p className="font-display text-lg font-bold leading-tight sm:text-2xl">{p.name}</p>
        <p className="mt-2 text-xs text-[#B9B4AD]">{p.tech.slice(0, 3).join(" / ")}</p>
      </div>
    </div>
  );
}

function Links({ p, dark = false }: { p: Project; dark?: boolean }) {
  const c = dark ? "text-ivory" : "text-ink";
  return (
    <>
      {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className={`link-line inline-flex min-h-[44px] items-center gap-2 text-sm font-medium ${c}`}><Github size={16} /> GitHub</a>}
      {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className={`link-line inline-flex min-h-[44px] items-center gap-2 text-sm font-medium ${c}`}><ExternalLink size={16} /> Live demo</a>}
    </>
  );
}

function Modal({ p, onClose }: { p: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const on = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", on);
    return () => { window.removeEventListener("keydown", on); document.body.style.overflow = ""; prev?.focus(); };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-night/70 sm:items-center sm:p-6" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-labelledby="proj-title" onClick={(e) => e.stopPropagation()}
           className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto bg-ivory animate-[rise_.35s_ease-out]">
        <button ref={closeRef} onClick={onClose} aria-label="Close project details" className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center bg-ivory/90"><X size={22} /></button>
        <div className="aspect-[16/8]"><Thumb p={p} /></div>
        <div className="p-6 sm:p-10">
          <p className="font-display text-sm text-mute">{p.duration}</p>
          <h3 id="proj-title" className="mt-1 font-display text-3xl font-bold leading-tight">{p.name}</h3>
          {p.subtitle && <p className="mt-1 font-serif text-lg italic text-mute">{p.subtitle}</p>}
          <p className="mt-5 leading-relaxed text-mute">{p.description}</p>
          <h4 className="mt-8 font-display text-sm font-bold">Key features</h4>
          <ul className="mt-3 space-y-2 border-t border-line pt-3">
            {p.features.map((f) => <li key={f} className="flex gap-3 text-sm"><span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />{f}</li>)}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
          <div className="mt-6 flex gap-6"><Links p={p} /></div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [sel, setSel] = useState<Project | null>(null);
  return (
    <section id="projects" className="bg-white py-24 md:py-32">
      <style>{`@keyframes rise{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}`}</style>
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Things I've Built." subtitle="Exploring ideas, experimenting with technology, and building solutions that matter." />
        <div className="space-y-24 md:space-y-32">
          {projects.map((p, i) => (
            <Reveal key={p.number}>
              <article className="grid items-center gap-8 md:grid-cols-12 md:gap-14">
                <button onClick={() => setSel(p)} aria-label={`View details of ${p.name}`}
                        className={`group block aspect-[4/3] w-full overflow-hidden border border-line text-left md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
                  <Thumb p={p} className="transition-transform duration-700 ease-out group-hover:scale-105" />
                </button>
                <div className={`md:col-span-5 ${i % 2 ? "md:order-1" : ""}`}>
                  <p className="font-serif text-6xl italic leading-none text-accent">{p.number}</p>
                  <h3 className="mt-4 font-display text-2xl font-bold leading-tight sm:text-3xl">{p.name}</h3>
                  {p.subtitle && <p className="mt-1 font-serif italic text-mute">{p.subtitle}</p>}
                  <p className="mt-2 font-display text-sm text-mute">{p.duration}</p>
                  <p className="mt-5 leading-relaxed text-mute">{p.description}</p>
                  <ul className="mt-5 space-y-1.5 text-sm">
                    {p.features.slice(0, 3).map((f) => <li key={f} className="flex gap-3"><span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-accent" />{f}</li>)}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
                  <div className="mt-6 flex flex-wrap items-center gap-x-6">
                    <button onClick={() => setSel(p)} className="btn bg-ink text-ivory hover:bg-accent">View Project</button>
                    <Links p={p} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      {sel && <Modal p={sel} onClose={() => setSel(null)} />}
    </section>
  );
}
