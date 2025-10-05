import BestSeller from "@/app/_components/BestSeller";
import Hero from "@/app/_components/Hero";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";
import About from "@/components/ui/about";
import  Contact  from "@/components/ui/contact";

// import Image from "next/image";

export default async function Home() {
  // await db.product.deleteMany();
  // await db.size.deleteMany();
  // await db.extra.deleteMany();
  return (
    <main>
      <Hero />
      <BestSeller />
      <About />
      <Contact />
      
    </main>
  );
}
