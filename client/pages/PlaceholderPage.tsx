import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-lawfirm-gold-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Construction className="text-lawfirm-gold-600" size={40} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-600 mb-8">{description}</p>
          <p className="text-gray-500">
            Esta página está em desenvolvimento. Continue conversando comigo
            para adicionar o conteúdo desejado.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
