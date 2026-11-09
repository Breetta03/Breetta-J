import { useState } from "react";
import { ArrowDown, Github, Linkedin, MapPin, ImageIcon } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Hero() {
  const [imgOk, setImgOk] = useState(true);
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-ivory pb-24 pt-28">
      <p aria-hidden className="pointer-events-none absolute -right-6 bottom-6 hidden select-none font-display text-[7vw] font-bold leading-none tracking-tight text-transparent [-webkit-text-stroke:1px_#EAE7E1] lg:block">
        BUILDING THE FUTURE WITH AI.
      </p>
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="mb-4 font-display text-sm font-medium tracking-[0.3em] text-mute">HELLO, I'M</p>
          <h1 className="font-display text-[clamp(3.2rem,11vw,8rem)] font-bold leading-[0.92] tracking-tight">BREETTA J.</h1>
          <p className="mt-6 max-w-xl font-serif text-3xl italic leading-tight sm:text-4xl">{profile.headline}</p>
          <div className="mt-8 max-w-xl space-y-4 leading-[1.75] text-mute">
            {profile.intro.map((p) => <p key={p}>{p}</p>)}
          </div>
          <p className="mt-8 font-display font-medium">{profile.identity.join(" · ")}</p>
          <p className="mt-2 flex items-center gap-2 text-sm text-mute"><MapPin size={16} aria-hidden /> {profile.location}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn bg-ink text-ivory hover:bg-accent">Explore My Work</a>
            <a href="#contact" className="btn border border-ink text-ink hover:bg-ink hover:text-ivory">Let's Connect</a>
            <div className="ml-1 flex gap-1">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-accent"><Github size={22} /></a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-accent"><Linkedin size={22} /></a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
          <div aria-hidden className="absolute -bottom-4 -right-4 h-full w-full border border-accent" />
          <div className="relative aspect-[4/5] overflow-hidden border border-line bg-white">
            {imgOk ? (
              <img src={profile.portrait} alt="Portrait of Breetta J" className="h-full w-full object-cover" onError={() => setImgOk(false)} fetchPriority="high" />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center text-mute">
                <ImageIcon size={36} aria-hidden />
                <p className="font-display text-sm">Portrait placeholder</p>
                <p className="text-xs">Save your photo as <code>public/portrait.jpg</code> to replace this.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <a href="#about" aria-label="Scroll to about section" className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-xs text-mute">
        Scroll <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
