import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Flow } from "@/components/Flow";
import { Handover } from "@/components/Handover";
import { Modules } from "@/components/Modules";
import { Testimonial } from "@/components/Testimonial";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas text-ink-900">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Flow />
        <Handover />
        <Modules />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
