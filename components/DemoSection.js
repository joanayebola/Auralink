import Image from "next/image";
import Link from "next/link";

export default function DemoSection() {
  return (
    <section className="bg-[#FFFEF6] px-6 md:px-12 py-16 text-center text-[#4E2E1D]">

      <h2 className="text-3xl md:text-4xl font-semibold mb-2">
  See It in <span style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: "-0.09em", fontWeight:"400"}} className="italic text-[#000000]">Action</span>
</h2>


      <p className="text-md md:text-lg max-w-xl mx-auto mb-10">
        How Auralink works, its smart features, and why it is different.
      </p>

      <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-md">
        <Image
          src="/demo-thumb.png"
          alt="Auralink Demo Thumbnail"
          width={1200}
          height={700}
          className="w-full h-auto object-cover"
        />

        <button
          aria-label="Play demo"
          className="absolute inset-0 flex items-center justify-center group"
        >
          <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#C97C52"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      </div>

      <Link href="/demo" className="inline-block mt-10">
        <button className="px-6 py-3 border border-[#4E2E1D] text-[#4E2E1D] rounded-2xl transition hover:bg-[#4E2E1D] hover:text-white cursor-pointer">
          Watch Full Demo
        </button>
      </Link>
    </section>
  );
}
