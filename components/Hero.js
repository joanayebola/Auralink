import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-12 mx-8">

      <div className="w-full md:w-1/2 text-[#4E2E1D]">
        <div className="inline-flex items-center gap-2 border border-[#4E2E1D] rounded-full px-4 py-1 text-sm mb-6">
          <Image
            src="/shine.png"
            width={15}
            height={20}
            alt="shine icon"
          />
          <span>Your hearing, our tech</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Hear Every<br />
          Detail. Live Fully.
        </h1>

        <p className="mb-8 text-[#4E2E1D] max-w-md">
          Introducing Auralink – the AI-powered, ultra-light, next-gen hearing device that adapts to your world in real-time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
  <Link href="/get-started" className="w-full sm:w-auto">
    <button className="w-full sm:w-auto bg-[#4E2E1D] text-white px-6 py-3 rounded-full hover:opacity-90 transition">
      Get started
    </button>
  </Link>
  <Link href="/demo" className="w-full sm:w-auto">
    <button className="w-full sm:w-auto border border-[#4E2E1D] text-[#4E2E1D] px-6 py-3 rounded-full hover:bg-[#4E2E1D] hover:text-white transition">
      Book a demo
    </button>
  </Link>
</div>

      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
        <div className="w-full max-w-xs md:max-w-md">
          <Image
            src="/hero.png"
            alt="Hero Image"
            width={400}
            height={500}
            className="w-full h-auto rounded-3xl object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
