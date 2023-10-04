import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export function Main() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
      </div>
      <h1 className="text-3xl font-semibold mt-10">Good afternoon</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <a
          href="#"
          className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src="/album.png"
            width={104}
            height={104}
            alt="Capa do album Californication"
          />
          <strong>Californication</strong>
          <button className="w-12 h-12 pl-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src="/album.png"
            width={104}
            height={104}
            alt="Capa do album Californication"
          />
          <strong>Californication</strong>
          <button className="w-12 h-12 pl-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src="/album.png"
            width={104}
            height={104}
            alt="Capa do album Californication"
          />
          <strong>Californication</strong>
          <button className="w-12 h-12 pl-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src="/album.png"
            width={104}
            height={104}
            alt="Capa do album Californication"
          />
          <strong>Californication</strong>
          <button className="w-12 h-12 pl-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src="/album.png"
            width={104}
            height={104}
            alt="Capa do album Californication"
          />
          <strong>Californication</strong>
          <button className="w-12 h-12 pl-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src="/album.png"
            width={104}
            height={104}
            alt="Capa do album Californication"
          />
          <strong>Californication</strong>
          <button className="w-12 h-12 pl-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
      </div>

      <h2 className="text-2xl font-semibold mt-10">Made for Edilson Torres</h2>
      <div className="grid grid-cols-7 mt-4 gap-4">
        <a
          href="#"
          className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
        >
          <Image
            className="w-full"
            src="/album.png"
            width={120}
            height={120}
            alt="Capa do album Californication"
          />
          <strong className="font-semibold">Daily mix</strong>
          <span className="text-xs text-zinc-400">Red Hot Chily peppers</span>
        </a>
        <a
          href="#"
          className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
        >
          <Image
            className="w-full"
            src="/album.png"
            width={120}
            height={120}
            alt="Capa do album Californication"
          />
          <strong className="font-semibold">Daily mix</strong>
          <span className="text-xs text-zinc-400">Red Hot Chily peppers</span>
        </a>
        <a
          href="#"
          className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
        >
          <Image
            className="w-full"
            src="/album.png"
            width={120}
            height={120}
            alt="Capa do album Californication"
          />
          <strong className="font-semibold">Daily mix</strong>
          <span className="text-xs text-zinc-400">Red Hot Chily peppers</span>
        </a>
        <a
          href="#"
          className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
        >
          <Image
            className="w-full"
            src="/album.png"
            width={120}
            height={120}
            alt="Capa do album Californication"
          />
          <strong className="font-semibold">Daily mix</strong>
          <span className="text-xs text-zinc-400">Red Hot Chily peppers</span>
        </a>
        <a
          href="#"
          className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
        >
          <Image
            className="w-full"
            src="/album.png"
            width={120}
            height={120}
            alt="Capa do album Californication"
          />
          <strong className="font-semibold">Daily mix</strong>
          <span className="text-xs text-zinc-400">Red Hot Chily peppers</span>
        </a>
      </div>
    </main>
  );
}
