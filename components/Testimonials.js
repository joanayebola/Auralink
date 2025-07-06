import Image from "next/image";

const testimonials = [
  {
    name: "Michael O.",
    age: 48,
    quote: "This changed my life. Conversations are finally effortless",
    avatar: "/avatars/michael.png",
    rating: 4.5,
  },
  {
    name: "John M.",
    age: 62,
    quote:
      "I’ve tried several hearing aids over the years, but Auralink is in a class of its own. It feels like I got my ears back!",
    avatar: "/avatars/john.png",
    rating: 4.5,
  },
  {
    name: "Emeka A.",
    age: 54,
    quote:
      "Crystal-clear sound and no more awkward whistling noises. I love how I can fine-tune everything from my phone",
    avatar: "/avatars/emeka.png",
    rating: 4.5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#FFFDEA] px-6 md:px-12 py-16 text-center text-[#4E2E1D]">
      <div className="flex justify-center -space-x-4 mb-4">
        {testimonials.map((t, i) => (
          <Image
            key={i}
            src={t.avatar}
            alt={t.name}
            width={40}
            height={40}
            className="rounded-full border-2 border-white"
          />
        ))}
      </div>

      <h2 className="text-3xl md:text-4xl font-semibold mb-2">
  Trusted by <span style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: "-0.09em", fontWeight:"400"}} className="italic text-[#000000]">Thousands</span>
</h2>
      <p className="text-md md:text-lg mb-12">
        How Auralink works, its smart features, and why it is different.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 text-left shadow-md flex flex-col justify-between h-full"
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={t.avatar}
                alt={t.name}
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>

            <p className="text-sm mb-6">{t.quote}</p>

            <div className="mt-auto">
              <p className="font-semibold">
                {t.name}, {t.age}
              </p>

              <div className="flex items-center gap-1 mt-2 text-[#C97C52]">
                {"★".repeat(Math.floor(t.rating))}
                {t.rating % 1 !== 0}
              </div>

              <div className="text-4xl text-[#EEE] mt-2">❝</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
