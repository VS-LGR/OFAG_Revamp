"use client";

import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export type ReviewItem = {
  comment: string;
  companyResponsible: string;
  service: string;
};

type Props = {
  reviews: ReviewItem[];
  title: string;
  subtitle: string;
  labelCompany: string;
  labelService: string;
  ariaPrev?: string;
  ariaNext?: string;
};

export default function ReviewsCarousel({
  reviews,
  title,
  subtitle,
  labelCompany,
  labelService,
  ariaPrev = "Previous review",
  ariaNext = "Next review",
}: Props) {
  const [index, setIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const count = reviews.length;
  const next = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);
  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  useEffect(() => {
    if (!isAutoPlaying || count <= 1) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [isAutoPlaying, count, next]);

  if (!count) return null;

  return (
    <section className="relative overflow-hidden py-4">
      <div className="container-wide">
        <div className="mb-10 text-center">
          <span className="section-label block">{title}</span>
          <p className="mt-2 max-w-2xl mx-auto text-neutral-600">{subtitle}</p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden">
            <div
              className="flex items-stretch transition-transform duration-500 ease-out"
              style={{
                width: `${count * 100}%`,
                transform: `translateX(-${(index / count) * 100}%)`,
              }}
            >
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="shrink-0 px-2 md:px-3"
                  style={{ flex: `0 0 ${100 / count}%` }}
                >
                  <article
                    className="flex h-full flex-col rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover md:p-8"
                    style={{
                      boxShadow:
                        "0 0 0 1px rgba(15, 42, 71, 0.03), 0 2px 8px -2px rgba(15, 42, 71, 0.08)",
                    }}
                  >
                    <Quote
                      className="h-10 w-10 shrink-0 text-secondary/30"
                      aria-hidden
                    />
                    <blockquote className="mt-3 flex-1 text-neutral-700 leading-relaxed">
                      &ldquo;{review.comment}&rdquo;
                    </blockquote>
                    <footer className="mt-6 space-y-2 border-t border-neutral-100 pt-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                        {labelCompany}
                      </p>
                      <p className="text-sm font-medium text-primary">
                        {review.companyResponsible}
                      </p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                        {labelService}
                      </p>
                      <p className="text-sm text-secondary">{review.service}</p>
                    </footer>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-primary shadow-md transition-all hover:border-secondary hover:bg-secondary hover:text-white hover:shadow-lg md:left-4"
                aria-label={ariaPrev}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-primary shadow-md transition-all hover:border-secondary hover:bg-secondary hover:text-white hover:shadow-lg md:right-4"
                aria-label={ariaNext}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {count > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index
                    ? "w-8 bg-secondary"
                    : "w-2 bg-neutral-300 hover:bg-neutral-400"
                }`}
                aria-label={`Avaliação ${i + 1} de ${count}`}
                aria-current={i === index ? "true" : undefined}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
