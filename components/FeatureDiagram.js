import Image from "next/image";

const features = [
  {
    title: "Adaptive Sound Engine",
    desc: "Real-time environment detection for crystal-clear audio — whether in a crowd or on a call.",
    position: "top-[10%] left-[5%] text-left",
  },
  {
    title: "AI Noise Filtering",
    desc: "Machine learning filters background noise and enhances voices intelligently.",
    position: "bottom-[10%] left-[5%] text-left",
  },
  {
    title: "App-Connected",
    desc: "Personalize your hearing profiles with the Auralink App – available for iOS and Android.",
    position: "top-[15%] right-[5%] text-right",
  },
  {
    title: "Discreet, Stylish Design",
    desc: "Minimalist and comfortable – designed to look as good as it sounds.",
    position: "bottom-[10%] right-[5%] text-right",
  },
];

export default function FeatureDiagram() {
  return (
    <section className="md:px-12 py-10 bg-[#FFFDEA] text-[#4E2E1D]">
      <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-center">
  Why <span style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: "-0.09em", fontWeight:"400"}} className="italic text-[#000000]">Auralink</span>
</h2>
      <h3 className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-12 text-balance">
        Designed with precision, powered by AI, and built for real life. Auralink delivers an unmatched hearing experience.
      </h3>

      <div className="relative max-w-6xl mx-auto aspect-[16/9] hidden md:block">
        <Image
          src="/features.png"
          alt="Auralink Device"
          fill
          className="object-contain"
          priority
        />
        {features.map((feature, index) => (
          <div
            key={index}
            className={`absolute ${feature.position} w-56 text-base  rounded-xl p-4`}
          >
            <h3 className="font-bold mb-1">{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid md:hidden gap-8 mt-12 text-center text-sm px-4">
        {features.map((feature, index) => (
          <div key={index}>
            <h3 className="font-bold mb-1">{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
