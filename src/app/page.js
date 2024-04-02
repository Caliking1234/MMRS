import HeroAnimation from "@/components/HeroAnimation";
import TextAnimation from "@/components/TextAnimation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gray-300 flex-col">
      <HeroAnimation />
      <TextAnimation />
    </main>
  );
}
