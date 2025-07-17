import { Scale, Award, Users, BookOpen } from "lucide-react";

export function AboutUs() {
  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Sobre Nós
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Somos especialistas em Direito Bancário com mais de 10 anos de
            experiência, dedicados a proteger os direitos de nossos clientes com
            excelência e transparência.
          </p>
        </div>

        {/* Lawyers Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Dra Barbara */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-w-4 aspect-h-5 bg-gray-100">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff4640e8889504e459e0229464c3c7d21%2F3e569d58ccd440a2b7773bebd5a6550e?format=webp&width=800"
                alt="Dra. Bárbara Santos - Especialista em Direito Bancário"
                className="w-full h-96 object-cover object-center"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-lawfirm-gold-600 mb-2">
                Dra. Bárbara Santos
              </h3>
              <p className="text-lawfirm-gold-500 font-semibold mb-4">
                Sócia Fundadora
              </p>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start space-x-3">
                  <Scale className="text-lawfirm-gold-500 mt-1" size={18} />
                  <span>
                    Especializada em reverter cobranças abusivas e recuperar
                    valores indevidos
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="text-lawfirm-gold-500 mt-1" size={18} />
                  <span>
                    Reconhecida por conseguir limpar nomes no SPC e Serasa
                    rapidamente
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <BookOpen className="text-lawfirm-gold-500 mt-1" size={18} />
                  <span>
                    Expert em anular contratos bancários prejudiciais aos
                    clientes
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="text-lawfirm-gold-500 mt-1" size={18} />
                  <span>
                    Dedicada a transformar problemas bancários em soluções
                    vitórias
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Dr Vitor */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-w-4 aspect-h-5 bg-gray-100">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff4640e8889504e459e0229464c3c7d21%2Fa8634d04c7934c07a1a2678d36233a53?format=webp&width=800"
                alt="Dr. Vitor Soares - Especialista em Direito Bancário"
                className="w-full h-96 object-cover object-top"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-lawfirm-gold-600 mb-2">
                Dr. Vitor Soares
              </h3>
              <p className="text-lawfirm-gold-500 font-semibold mb-4">
                Sócio Fundador
              </p>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start space-x-3">
                  <Scale className="text-lawfirm-gold-500 mt-1" size={18} />
                  <span>
                    Mestre em desvendar estratégias bancárias ocultas e
                    protectão ao cliente
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="text-lawfirm-gold-500 mt-1" size={18} />
                  <span>
                    Especializado em reverter situações que pareciam sem solução
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <BookOpen className="text-lawfirm-gold-500 mt-1" size={18} />
                  <span>
                    Focado em maximizar recuperações financeiras para seus
                    clientes
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="text-lawfirm-gold-500 mt-1" size={18} />
                  <span>
                    Comprometido em garantir justiça e resultados excepcionais
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Firm Values */}
        <div className="bg-white rounded-xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8 text-center">
            Nossos Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-lawfirm-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="text-lawfirm-gold-600" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Transparência
              </h4>
              <p className="text-gray-600">
                Comunicação clara e honesta em todas as etapas do processo
              </p>
            </div>

            <div className="text-center">
              <div className="bg-lawfirm-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-lawfirm-gold-600" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Excelência
              </h4>
              <p className="text-gray-600">
                Compromisso com a qualidade e resultados efetivos
              </p>
            </div>

            <div className="text-center">
              <div className="bg-lawfirm-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-lawfirm-gold-600" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Humanização
              </h4>
              <p className="text-gray-600">
                Atendimento personalizado e próximo ao cliente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
