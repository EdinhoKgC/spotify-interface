import {
  Laptop2,
  LayoutList,
  Maximize2,
  Mic,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className="flex  items-center gap-3">
        <Image
          src="/album.png"
          width={56}
          height={56}
          alt="Capa do album Californication"
        />
        <div className="flex flex-col">
          <strong className="font-normal">Californication</strong>
          <span className="text-xs text-zinc-400">Red Hot Chily peppers</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />
          <button className="w-10 h-10 pl-1 flex items-center justify-center rounded-full bg-white text-black">
            <Play />
          </button>
          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-400">0:31</span>
          <div className="rounded-full w-96 h-1 bg-zinc-600">
            <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
          </div>
          <span className="text-sm text-zinc-400">2:31</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic width={20} />
        <LayoutList width={20} />
        <Laptop2 width={20} />
        <div className="flex items-center gap-2">
          <Volume width={20} />
          <div className="rounded-full w-24 h-1 bg-zinc-600">
            <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
          </div>
        </div>
        <Maximize2 width={20} />
      </div>
    </footer>
  );
}
