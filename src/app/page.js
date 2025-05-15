import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="w-full h-screen bg-white flex flex-col gap-12">
      <Header />
      <HeroSection />
    </div>
  );
}
