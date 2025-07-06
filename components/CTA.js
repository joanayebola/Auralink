'use client';

export default function CTASection() {
  return (
    <section className="relative bg-[#4B290F] text-white rounded-[32px] px-6 py-8 md:py-12 md:px-16 flex items-center justify-center text-center">
      <div className="space-y-4 max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-semibold leading-snug">
          Ready to Hear the <br className="hidden md:block" /> Difference?
        </h2>
        <p className="text-sm md:text-base text-white/80">
          Join thousands already using Auralink.
        </p>
        <button
          className="mt-6 bg-white text-[#4B290F] font-medium px-6 py-2.5 rounded-full shadow-sm transition hover:bg-[#4E2E1D] hover:text-white cursor-pointer border border-white"
          aria-label="Get Auralink"
        >
          Get Auralink
        </button>
      </div>
    </section>
  );
}
