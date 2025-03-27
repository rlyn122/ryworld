import Image from "next/image";
import gifSrc from '../public/kirby_no.gif'; 
import Link from 'next/link';
import WalkingCharacter from "./components/WalkingCharacter";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <WalkingCharacter></WalkingCharacter>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Link href="/">
        <Image
          className="dark:invert"
          src="/toast.gif"
          alt="ry's world"
          width={140}
          height={38}
          priority
        />
        </Link>
        <div className="list-inside list-decimal text-sm/6 text-center sm:text-left">
          <p >
              Welcome to the 871 Blog! </p>
          <p >
              There’s never every ingredient we need in the fridge, but we gon have to make it work
              Who has time to follow recipes anyways?
              ◎[▪‿▪]◎
          </p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="bg-amber-200 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-amber-600 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/about"
          >
            <Image src={gifSrc} alt="kirbyyy" width={40} height={40}/>
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
