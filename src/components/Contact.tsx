import { useState, type ChangeEvent, type FormEvent } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "../data/portfolio";
import Reveal from "./Reveal";

type Fields = { name: string; email: string; subject: string; message: string };
const empty: Fields = { name: "", email: "", subject: "", message: "" };
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

function validate(v: Fields) {
  const e: Partial<Fields> = {};
  if (!v.name.trim()) e.name = "Enter your name.";
  if (!v.email.trim()) e.email = "Enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Enter a valid email address, like name@example.com.";
  if (!v.subject.trim()) e.subject = "Enter a subject.";
  if (!v.message.trim()) e.message = "Write a message.";
  else if (v.message.trim().length < 10) e.message = "Write at least 10 characters.";
  return e;
}

export default function Contact() {
  const [v, setV] = useState<Fields>(empty);
  const [err, setErr] = useState<Partial<Fields>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setV({ ...v, [e.target.name]: e.target.value });
    if (err[e.target.name as keyof Fields]) setErr({ ...err, [e.target.name]: undefined });
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validate(v);
    setErr(found);
    if (Object.keys(found).length) return;
    if (!ENDPOINT) {
      setStatus("error");
      setErrMsg("The contact form isn't connected to an email service yet. Please email me directly instead.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(v),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      setV(empty);
    } catch {
      setStatus("error");
      setErrMsg(`Your message wasn't sent. Check your connection and try again, or email ${profile.email}.`);
    }
  }

  const field = "w-full border-0 border-b bg-transparent py-3 text-ivory placeholder:text-[#8A857E] focus:border-accent focus:outline-none";
  const Err = ({ id, m }: { id: string; m?: string }) => (m ? <p id={id} role="alert" className="mt-1 text-sm text-[#E8B4A8]">{m}</p> : null);
  const links = [
    { Icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { Icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { Icon: Linkedin, label: "linkedin.com/in/breetta03", href: profile.linkedin },
    { Icon: Github, label: "github.com/breetta03", href: profile.github },
  ];

  return (
    <section id="contact" className="bg-[#2E2C29] py-24 text-ivory md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            Have an Idea? <span className="font-serif font-normal italic text-accent">Let's Build Something Meaningful.</span>
          </h2>
          <div className="mt-6 max-w-md space-y-4 leading-relaxed text-[#B9B4AD]">
            <p>I am always excited to learn, collaborate, and explore opportunities in Artificial Intelligence, Machine Learning, Data Analytics, and Software Development.</p>
            <p>Feel free to reach out. I'd love to connect!</p>
          </div>
          <ul className="mt-10 border-t border-white/15">
            {links.map(({ Icon, label, href }) => (
              <li key={href} className="border-b border-white/15">
                <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                   className="flex min-h-[52px] items-center gap-4 break-all transition-colors hover:text-accent"><Icon size={18} className="shrink-0 text-accent" aria-hidden />{label}</a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          {status === "success" ? (
            <div role="status" className="border border-accent/50 p-8">
              <p className="font-serif text-3xl italic">Message sent.</p>
              <p className="mt-3 text-[#B9B4AD]">Thank you for reaching out. I'll reply to your email soon.</p>
              <button onClick={() => setStatus("idle")} className="btn mt-6 border border-ivory hover:bg-ivory hover:text-ink">Send another message</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-6" aria-describedby={status === "error" ? "form-error" : undefined}>
              {(["name", "email", "subject"] as const).map((f) => (
                <div key={f}>
                  <label htmlFor={f} className="text-sm text-[#B9B4AD]">{f[0].toUpperCase() + f.slice(1)}</label>
                  <input id={f} name={f} type={f === "email" ? "email" : "text"} autoComplete={f === "email" ? "email" : f === "name" ? "name" : "off"}
                         value={v[f]} onChange={onChange} required aria-invalid={!!err[f]} aria-describedby={err[f] ? `${f}-err` : undefined}
                         className={`${field} ${err[f] ? "border-[#E8B4A8]" : "border-white/25"}`} />
                  <Err id={`${f}-err`} m={err[f]} />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="text-sm text-[#B9B4AD]">Message</label>
                <textarea id="message" name="message" rows={5} value={v.message} onChange={onChange} required aria-invalid={!!err.message}
                          aria-describedby={err.message ? "message-err" : undefined} className={`${field} resize-y ${err.message ? "border-[#E8B4A8]" : "border-white/25"}`} />
                <Err id="message-err" m={err.message} />
              </div>
              {status === "error" && <p id="form-error" role="alert" className="text-sm text-[#E8B4A8]">{errMsg}</p>}
              <button type="submit" disabled={status === "sending"} className="btn bg-accent text-night hover:bg-ivory disabled:opacity-60">
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
