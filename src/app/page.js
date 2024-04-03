import CardScroll from "@/components/CradScroll";
import HeroAnimation from "@/components/HeroAnimation";
import TextAnimation from "@/components/TextAnimation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gray-300 flex-col">
      <HeroAnimation />
      <TextAnimation />
      <h1 className=" w-full text-center text-3xl md:text-5xl font-extrabold">
        The Counsil of Megha
      </h1>
      <CardScroll />
    </main>
  );
}
