import Image from "next/image";

export default function FeatureDiagram() {
  return (
    <section className="md:px-12 py-16 bg-[#FFFDEA] text-[#4E2E1D]">
      <h2 className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-12">
        Designed with precision, powered by AI, and built for real life. Aura link delivers an unmatched hearing experience
      </h2>

      <div className="relative max-w-6xl mx-auto aspect-[16/9]">
        <Image
          src="/features.png"
          alt="Auralink Device"
          fill
          className="object-contain"
          priority
        />

        <div className="absolute top-[10%] left-[5%] w-56 text-sm hidden md:block">
          <h3 className="font-bold text-md mb-1">Adaptive Sound Engine</h3>
          <p>
            Real-time environment detection for crystal-clear audio — whether in a crowd or on a call.
          </p>
        </div>

        <div className="absolute bottom-[10%] left-[5%] w-56 text-sm hidden md:block">
          <h3 className="font-bold text-md mb-1">AI Noise Filtering</h3>
          <p>
            Machine learning filters background noise and enhances voices intelligently.
          </p>
        </div>

        <div className="absolute top-[15%] right-[5%] w-56 text-right text-sm hidden md:block">
          <h3 className="font-bold text-md mb-1">App-Connected</h3>
          <p>
            Personalize your hearing profiles with the Auralink App – available for iOS and Android.
          </p>
        </div>

        <div className="absolute bottom-[10%] right-[5%] w-56 text-right text-sm hidden md:block">
          <h3 className="font-bold text-md mb-1">Discreet, Stylish Design</h3>
          <p>
            Minimalist and comfortable – designed to look as good as it sounds.
          </p>
        </div>
      </div>

      <div className="grid md:hidden grid-cols-1 gap-6 mt-12 text-center text-sm">
        <div>
          <h3 className="font-bold mb-1">Adaptive Sound Engine</h3>
          <p>Real-time environment detection for crystal-clear audio — whether in a crowd or on a call.</p>
        </div>
        <div>
          <h3 className="font-bold mb-1">AI Noise Filtering</h3>
          <p>Machine learning filters background noise and enhances voices intelligently.</p>
        </div>
        <div>
          <h3 className="font-bold mb-1">App-Connected</h3>
          <p>Personalize your hearing profiles with the Auralink App – available for iOS and Android.</p>
        </div>
        <div>
          <h3 className="font-bold mb-1">Discreet, Stylish Design</h3>
          <p>Minimalist and comfortable – designed to look as good as it sounds.</p>
        </div>
      </div>
    </section>
  );
}
