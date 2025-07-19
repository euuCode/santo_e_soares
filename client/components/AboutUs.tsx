import { Scale, Award, Users, BookOpen } from "lucide-react";

export function AboutUs() {
  return (
    <section
      id="sobre"
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(202, 138, 4, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(202, 138, 4, 0.1) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="flex flex-col justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-8 relative">
            <span className="bg-gradient-to-r from-lawfirm-gold-600 via-lawfirm-gold-500 to-lawfirm-gold-600 bg-clip-text text-transparent">
              Sobre Nós
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-lawfirm-gold-500 to-lawfirm-gold-600 rounded-full"></div>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            Somos especialistas em{" "}
            <span className="text-lawfirm-gold-600 font-semibold">
              Direito Bancário
            </span>{" "}
            com mais de 10 anos de experiência, dedicados a proteger os direitos
            de nossos clientes com
            <span className="text-lawfirm-gold-600 font-semibold">
              {" "}
              excelência
            </span>{" "}
            e{" "}
            <span className="text-lawfirm-gold-600 font-semibold">
              transparência
            </span>
            .
          </p>
        </div>

        {/* Enhanced Lawyers Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Dra Barbara */}
          <div
            className="slide-up bg-white rounded-3xl elevated-card overflow-hidden card-hover premium-border group"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="aspect-w-4 aspect-h-5 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff4640e8889504e459e0229464c3c7d21%2F3e569d58ccd440a2b7773bebd5a6550e?format=webp&width=800"
                alt="Dra. Bárbara Santos - Especialista em Direito Bancário"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ objectPosition: "center 45%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lawfirm-dark-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="p-10 bg-gradient-to-br from-white via-gray-50/50 to-white">
              <h3 className="text-3xl font-bold text-lawfirm-gold-600 mb-3 group-hover:text-lawfirm-gold-500 transition-colors duration-300">
                Dra. Bárbara Santos
              </h3>
              <p className="text-lawfirm-gold-500 font-semibold mb-6 text-lg">
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
                src="https://cdn.builder.io/api/v1/image/assets%2Ff4640e8889504e459e0229464c3c7d21%2Fbe30d87b64cd4b3899f25944aa29efe4?format=webp&width=800"
                alt="Dr. Vitor Soares - Especialista em Direito Bancário"
                className="w-full h-96 object-cover"
                style={{ objectPosition: "center 30%" }}
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
