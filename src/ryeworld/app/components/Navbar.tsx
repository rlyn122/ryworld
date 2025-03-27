"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


export default function Navbar() {

  const pathname = usePathname();

  return (
    <nav className="w-full px-4 sm:px-8 py-4 flex justify-between items-center shadow-md border-b border-white">
      <Link href="/" className="flex items-center">
        <Image
          className="dark:invert"
          src="/toast.png"
          alt="Home Logo"
          width={50}
          height={38}
          priority
        /> 
         <h2>871 Kitchen</h2>
      </Link>
     

      <div className='flex items-center space-x-4'> 
      <Link 
        href="/recipes" 
        className={`transition-colors duration-200 ${
          pathname === '/recipes' ? 'text-blue-500' : 'hover:text-blue-500'
        }`}
      >
        <h2>recipes</h2>
      </Link>
      <Link 
        href="/blog" 
        className={`transition-colors duration-200 ${
          pathname === '/blog' ? 'text-blue-500' : 'hover:text-blue-500'
        }`}
      >
        <h2>blog</h2>
      </Link>
      <Link 
        href="/kitchen" 
        className={`transition-colors duration-200 ${
          pathname === '/kitchen' ? 'text-blue-500' : 'hover:text-blue-500'
        }`}
      >
        <h2>kitchen</h2>
      </Link>
      <Link 
        href="/about" 
        className={`transition-colors duration-200 ${
          pathname === '/about' ? 'text-blue-500' : 'hover:text-blue-500'
        }`}
      >
        <h2>about</h2>
      </Link>
      </div>
    </nav>
  );
}
