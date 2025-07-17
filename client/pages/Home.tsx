import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { BankingInfo } from "../components/BankingInfo";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BankingInfo />
      <Footer />
    </div>
  );
}
