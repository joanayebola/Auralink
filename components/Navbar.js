import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Auralink Logo"
          width={100}
          height={30}
        />
      </Link>

      <div className="hidden md:flex gap-10">
        <Link href="/solutions" className="text-[#4E2E1D] relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#4E2E1D] after:transition-all after:duration-300 hover:after:w-full">
          Our Solutions
        </Link>
        <Link href="/pricing" className="text-[#4E2E1D] relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#4E2E1D] after:transition-all after:duration-300 hover:after:w-full">
          Pricing
        </Link>
        <Link href="/company" className="text-[#4E2E1D] relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#4E2E1D] after:transition-all after:duration-300 hover:after:w-full">
          Company
        </Link>
      </div>

      <Link href="/get-started">
      <button className="bg-[#4E2E1D] text-white px-6 py-2 rounded-full hover:opacity-90 transition cursor-pointer">
  Get started
</button>

      </Link>
    </nav>
  );
}
