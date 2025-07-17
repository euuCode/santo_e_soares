import { Header } from "../components/Header";
import { AboutUs } from "../components/AboutUs";
import { Footer } from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
}
