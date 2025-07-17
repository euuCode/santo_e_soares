import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { AboutUs } from "../components/AboutUs";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}
