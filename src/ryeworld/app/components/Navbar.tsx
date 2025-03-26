import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full px-4 sm:px-8 py-4 flex justify-left items-left">
      <Link href="/" className="flex items-center">
        <Image
          className="dark:invert"
          src="/toast.png"
          alt="Home Logo"
          width={50}
          height={38}
          priority
        />
      </Link>
    </nav>
  );
}
