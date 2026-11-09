import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, SlidersHorizontal, Layers, Award } from "lucide-react";
import { achievements, type AchievementItem } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Achievements() {
  const primaryAchievements = achievements.filter((a) => a.isPrimary !== false);
  const secondaryAchievements = achievements.filter((a) => a.isPrimary === false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"stream" | "slider">("stream");
  const [showSecondary, setShowSecondary] = useState(false);

  const totalPrimary = primaryAchievements.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalPrimary);
  }, [totalPrimary]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalPrimary) % totalPrimary);
  }, [totalPrimary]);

  // Keyboard navigation for slider mode
  useEffect(() => {
    if (viewMode !== "slider") return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [viewMode, nextSlide, prevSlide]);

  return (
    <section
      id="achievements"
      className="w-full bg-[#253551] text-[#F8F8F7] py-24 sm:py-32 md:py-40 transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Introduction */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-24 md:mb-28">
          <Reveal>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.28em] text-[#AEBBD0]">
              MILESTONES & ACHIEVEMENTS
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-4 font-serif text-3xl font-normal leading-[1.12] tracking-tight text-[#F8F8F7] sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl">
              Learning, Building &amp; Achieving.
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 text-base font-light leading-relaxed text-[#E0E0DB] sm:mt-8 sm:text-lg md:text-xl max-w-2xl mx-auto">
              Every challenge is an opportunity to grow. Each achievement represents a journey of learning, creativity, teamwork, and innovation.
            </p>
          </Reveal>

          {/* Editorial View Switcher */}
          <Reveal delay={250}>
            <div className="mt-10 sm:mt-12 flex items-center justify-center">
              <div
                className="inline-flex items-center gap-1 p-1 rounded-full border border-[rgba(248,248,247,0.25)] bg-[#253551]/60 backdrop-blur-sm"
                role="group"
                aria-label="Achievement display mode"
              >
                <button
                  type="button"
                  onClick={() => setViewMode("stream")}
                  className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                    viewMode === "stream"
                      ? "bg-[#F8F8F7] text-[#253551] shadow font-semibold"
                      : "text-[#AEBBD0] hover:text-[#F8F8F7]"
                  }`}
                  aria-pressed={viewMode === "stream"}
                >
                  <Layers size={13} aria-hidden />
                  <span>Editorial Stream</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("slider")}
                  className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                    viewMode === "slider"
                      ? "bg-[#F8F8F7] text-[#253551] shadow font-semibold"
                      : "text-[#AEBBD0] hover:text-[#F8F8F7]"
                  }`}
                  aria-pressed={viewMode === "slider"}
                >
                  <SlidersHorizontal size={13} aria-hidden />
                  <span>Testimonial Slider</span>
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Presentation Layout 1: Editorial Stream (Full-width stacked with subtle dividers) */}
        {viewMode === "stream" && (
          <div className="border-t border-[rgba(248,248,247,0.25)]">
            {primaryAchievements.map((item, index) => {
              const isFinalist = item.recognition.toUpperCase() === "FINALIST";
              return (
                <article
                  key={item.id || item.number}
                  className="border-b border-[rgba(248,248,247,0.25)] py-16 sm:py-24 md:py-28 text-center"
                >
                  <Reveal>
                    {/* Index & Event Label */}
                    <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
                      <span className="text-xs font-mono uppercase tracking-[0.28em] text-[#AEBBD0]">
                        ACHIEVEMENT {item.number}
                      </span>
                      <span className="text-xs text-[#AEBBD0]/60">·</span>
                      <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-[#AEBBD0]">
                        {item.event}
                      </span>
                    </div>

                    {/* Recognition Highlight (Large serif typography, extra large for FINALIST) */}
                    <div className="my-4 sm:my-6 md:my-8">
                      <h3
                        className={`font-serif italic font-normal text-[#F8F8F7] tracking-tight leading-none mx-auto ${
                          isFinalist
                            ? "text-6xl sm:text-8xl md:text-9xl lg:text-[7.5rem]"
                            : "text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
                        }`}
                      >
                        {item.recognition}
                      </h3>
                    </div>

                    {/* Description styled as an editorial testimonial quote */}
                    <blockquote className="mt-6 sm:mt-8 max-w-2xl sm:max-w-3xl mx-auto px-4">
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-[#E0E0DB]">
                        “{item.description}”
                      </p>
                    </blockquote>
                  </Reveal>
                </article>
              );
            })}
          </div>
        )}

        {/* Presentation Layout 2: Testimonial Slider (Editorial carousel showcase) */}
        {viewMode === "slider" && (
          <div className="relative">
            {/* Top Subtle Divider */}
            <div className="border-t border-[rgba(248,248,247,0.25)] mb-8 sm:mb-12" />

            {/* Slide Quick Selectors */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
              {primaryAchievements.map((item, idx) => (
                <button
                  key={item.id || item.number}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-all duration-300 rounded border ${
                    activeIndex === idx
                      ? "border-[#F8F8F7] text-[#F8F8F7] bg-[rgba(248,248,247,0.1)] font-semibold"
                      : "border-[rgba(248,248,247,0.15)] text-[#AEBBD0] hover:text-[#F8F8F7] hover:border-[rgba(248,248,247,0.3)]"
                  }`}
                >
                  {item.number} · {item.recognition}
                </button>
              ))}
            </div>

            {/* Active Slide Display */}
            <div className="min-h-[380px] sm:min-h-[440px] md:min-h-[480px] flex items-center justify-center text-center px-4 py-8">
              {primaryAchievements.map((item, idx) => {
                if (idx !== activeIndex) return null;
                const isFinalist = item.recognition.toUpperCase() === "FINALIST";
                return (
                  <div
                    key={item.id || item.number}
                    className="max-w-3xl mx-auto animate-fade-in transition-opacity duration-500"
                  >
                    {/* Event Eyebrow */}
                    <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
                      <span className="text-xs font-mono uppercase tracking-[0.28em] text-[#AEBBD0]">
                        ACHIEVEMENT {item.number} OF 0{totalPrimary}
                      </span>
                      <span className="text-xs text-[#AEBBD0]/60">·</span>
                      <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-[#AEBBD0]">
                        {item.event}
                      </span>
                    </div>

                    {/* Recognition Highlight */}
                    <div className="my-6 sm:my-8 md:my-10">
                      <h3
                        className={`font-serif italic font-normal text-[#F8F8F7] tracking-tight leading-none mx-auto ${
                          isFinalist
                            ? "text-6xl sm:text-8xl md:text-9xl lg:text-[7.5rem]"
                            : "text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
                        }`}
                      >
                        {item.recognition}
                      </h3>
                    </div>

                    {/* Description Quote */}
                    <blockquote className="mt-6 sm:mt-8 px-4">
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-[#E0E0DB]">
                        “{item.description}”
                      </p>
                    </blockquote>
                  </div>
                );
              })}
            </div>

            {/* Bottom Divider & Navigation Controls */}
            <div className="border-b border-[rgba(248,248,247,0.25)] mt-8 sm:mt-12" />

            <div className="mt-8 flex items-center justify-between px-2 sm:px-6">
              <button
                type="button"
                onClick={prevSlide}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(248,248,247,0.25)] text-xs font-mono uppercase tracking-widest text-[#AEBBD0] hover:text-[#F8F8F7] hover:border-[#F8F8F7] hover:bg-[rgba(248,248,247,0.05)] transition-all duration-300"
                aria-label="Previous achievement"
              >
                <ChevronLeft size={16} />
                <span className="hidden sm:inline">Previous</span>
              </button>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono tracking-widest text-[#AEBBD0]">
                  0{activeIndex + 1} <span className="text-[#AEBBD0]/40">/</span> 0{totalPrimary}
                </span>
                <div className="flex gap-1.5">
                  {primaryAchievements.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      aria-label={`Go to achievement ${i + 1}`}
                      className={`h-1.5 transition-all duration-300 rounded-full ${
                        activeIndex === i ? "w-6 bg-[#F8F8F7]" : "w-1.5 bg-[#AEBBD0]/40 hover:bg-[#AEBBD0]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={nextSlide}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(248,248,247,0.25)] text-xs font-mono uppercase tracking-widest text-[#AEBBD0] hover:text-[#F8F8F7] hover:border-[#F8F8F7] hover:bg-[rgba(248,248,247,0.05)] transition-all duration-300"
                aria-label="Next achievement"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Secondary Achievements Accordion / Drawer */}
        {secondaryAchievements.length > 0 && (
          <div className="mt-16 sm:mt-24 text-center">
            <button
              type="button"
              onClick={() => setShowSecondary(!showSecondary)}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[rgba(248,248,247,0.2)] text-xs font-mono uppercase tracking-[0.2em] text-[#AEBBD0] hover:text-[#F8F8F7] hover:border-[rgba(248,248,247,0.4)] hover:bg-[rgba(248,248,247,0.05)] transition-all duration-300"
              aria-expanded={showSecondary}
            >
              <Award size={14} aria-hidden />
              <span>
                {showSecondary
                  ? "Hide Additional Honors"
                  : `+ Additional Honors & Global Participations (${secondaryAchievements.length})`}
              </span>
            </button>

            {showSecondary && (
              <div className="mt-10 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto text-left animate-fade-in">
                {secondaryAchievements.map((sec) => (
                  <div
                    key={sec.id || sec.number}
                    className="p-6 rounded-lg border border-[rgba(248,248,247,0.18)] bg-[#253551]/80 backdrop-blur-sm"
                  >
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#AEBBD0]">
                      {sec.event}
                    </p>
                    <h4 className="mt-2 font-serif text-xl sm:text-2xl italic text-[#F8F8F7]">
                      {sec.recognition}
                    </h4>
                    <p className="mt-3 text-sm text-[#E0E0DB] leading-relaxed font-light">
                      {sec.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}