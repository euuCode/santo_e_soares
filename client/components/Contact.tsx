import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Criar o corpo do email
    const emailBody = `Nome: ${formData.name}%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0AAssunto: ${formData.subject}%0A%0AMensagem:%0A${formData.message}`;

    // Abrir cliente de email padrão
    window.location.href = `mailto:espiritosantoadvmg@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${emailBody}`;

    alert("Redirecionando para seu cliente de email...");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=5531981077321&text=Olá! Vim pelo site e gostaria de falar com um advogado especialista em direito bancário.",
      "_blank",
    );
  };

  return (
    <section id="contrate-nos" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Contrate-nos
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Entre em contato conosco e descubra como podemos ajudá-lo a resolver
            seus problemas bancários. Oferecemos consultoria especializada e
            acompanhamento personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-lawfirm-gold-100 p-3 rounded-lg">
                    <Phone className="text-lawfirm-gold-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Telefone
                    </h4>
                    <p className="text-gray-600">(31) 98107-7321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-lawfirm-gold-100 p-3 rounded-lg">
                    <Mail className="text-lawfirm-gold-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                                        <p className="text-gray-600">
                      espiritosantoadvmg@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-lawfirm-gold-100 p-3 rounded-lg">
                    <MapPin className="text-lawfirm-gold-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Endereço
                    </h4>
                    <p className="text-gray-600">
                      Avenida Brasília, 972 - Loja 7<br />
                      São Benedito, Santa Luzia - MG
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-lawfirm-gold-100 p-3 rounded-lg">
                    <Clock className="text-lawfirm-gold-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Horário de Atendimento
                    </h4>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8h às 18h
                      <br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-green-500 p-3 rounded-lg">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">
                    Atendimento Imediato
                  </h4>
                  <p className="text-gray-600">
                    Fale conosco agora pelo WhatsApp
                  </p>
                </div>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Chamar no WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Envie sua Mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lawfirm-gold-500 focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lawfirm-gold-500 focus:border-transparent"
                    placeholder="(31) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lawfirm-gold-500 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lawfirm-gold-500 focus:border-transparent"
                  placeholder="Assunto da sua consulta"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lawfirm-gold-500 focus:border-transparent"
                  placeholder="Descreva seu caso ou dúvida..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-lawfirm-gold-600 hover:bg-lawfirm-gold-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
