'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white py-10 px-6 md:px-16 text-[#4B290F] text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">

        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Auralink Logo" width={100} height={30} />
          </div>
          <a href="mailto:hello@auralink.ai" className="text-sm hover:underline">
            hello@auralink.ai
          </a>
        </div>

        <div className="flex gap-6">
          <a href="#" aria-label="X">
            <Image src="/icons/X.png" alt="X" width={15} height={10} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Image src="/icons/linkedin.png" alt="LinkedIn" width={20} height={10} />
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
          <div className="space-x-2">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Terms of Use</a>
          </div>
          <p>© 2025 Auralink Technologies</p>
        </div>
      </div>
    </footer>
  );
}
