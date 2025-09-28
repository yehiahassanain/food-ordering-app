import BestSeller from "@/_components/BestSeller";
import Hero from "@/_components/Hero";
import { Button } from "@/components/ui/button";
// import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <BestSeller />
    </main>      
  );
}
