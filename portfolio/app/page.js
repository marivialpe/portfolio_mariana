import { Container } from "postcss";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <div class="container mx-auto px-12 py-4"> {/*para a tela ficar preenchida ate o final, sem as bordas cortadas*/}
      <HeroSection/>
    </div>
    </main>
  );
}
