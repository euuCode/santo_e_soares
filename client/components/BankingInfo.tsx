import { CheckCircle, AlertTriangle, DollarSign, FileText } from "lucide-react";

export function BankingInfo() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Sophisticated Light Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(202, 138, 4, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(202, 138, 4, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 40% 60%, rgba(202, 138, 4, 0.08) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-8 relative">
            <span className="bg-gradient-to-r from-lawfirm-gold-600 via-lawfirm-gold-500 to-lawfirm-gold-600 bg-clip-text text-transparent">
              Advocacia Bancária
            </span>
            <br />
            <span className="text-gray-800">Especializada</span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-lawfirm-gold-400 to-lawfirm-gold-500 rounded-full"></div>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            Protegemos seus direitos contra{" "}
            <span className="text-lawfirm-gold-600 font-semibold">
              práticas abusivas
            </span>{" "}
            dos bancos. Nossa expertise em direito bancário garante que você não
            seja prejudicado por cobranças indevidas, juros abusivos ou
            contratos prejudiciais.
          </p>
        </div>

        {/* Enhanced Problems We Solve */}
        <div className="mb-20 slide-up" style={{ animationDelay: "0.3s" }}>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-16 text-center relative">
            <span className="bg-gradient-to-r from-lawfirm-gold-600 via-lawfirm-gold-500 to-lawfirm-gold-600 bg-clip-text text-transparent">
              Problemas Bancários Que Resolvemos
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-lawfirm-gold-400 to-lawfirm-gold-500 rounded-full"></div>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Juros Abusivos */}
            <div
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 elevated-card premium-border card-hover group"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-red-100 to-red-200 p-3 rounded-xl group-hover:shadow-lg group-hover:shadow-red-200/50 transition-all duration-300">
                  <AlertTriangle
                    className="text-red-600 group-hover:scale-110 transition-transform duration-300"
                    size={28}
                  />
                </div>
                <h4 className="font-bold text-gray-800 text-lg ml-4 group-hover:text-red-600 transition-colors duration-300">
                  Juros Abusivos
                </h4>
              </div>
              <p className="text-gray-700 leading-relaxed font-medium">
                Revisão de contratos com juros acima do permitido por lei,
                anatocismo e capitalização irregular de juros.
              </p>
            </div>

            {/* Card 2 - Tarifas Indevidas */}
            <div
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 elevated-card premium-border card-hover group"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-3 rounded-xl group-hover:shadow-lg group-hover:shadow-orange-200/50 transition-all duration-300">
                  <DollarSign
                    className="text-orange-600 group-hover:scale-110 transition-transform duration-300"
                    size={28}
                  />
                </div>
                <h4 className="font-bold text-gray-800 text-lg ml-4 group-hover:text-orange-600 transition-colors duration-300">
                  Tarifas Indevidas
                </h4>
              </div>
              <p className="text-gray-700 leading-relaxed font-medium">
                Contestação de TAC, TEC, tarifa de cadastro, seguro indevido e
                outras cobranças não autorizadas.
              </p>
            </div>

            {/* Card 3 - Negativação Irregular */}
            <div
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 elevated-card premium-border card-hover group"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl group-hover:shadow-lg group-hover:shadow-blue-200/50 transition-all duration-300">
                  <FileText
                    className="text-blue-600 group-hover:scale-110 transition-transform duration-300"
                    size={28}
                  />
                </div>
                <h4 className="font-bold text-gray-800 text-lg ml-4 group-hover:text-blue-600 transition-colors duration-300">
                  Negativação Irregular
                </h4>
              </div>
              <p className="text-gray-700 leading-relaxed font-medium">
                Remoção de nome dos órgãos de proteção (SPC/Serasa) por
                negativações indevidas ou sem notificação prévia.
              </p>
            </div>

            {/* Card 4 - Revisão Contratual */}
            <div
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 elevated-card premium-border card-hover group"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-xl group-hover:shadow-lg group-hover:shadow-green-200/50 transition-all duration-300">
                  <CheckCircle
                    className="text-green-600 group-hover:scale-110 transition-transform duration-300"
                    size={28}
                  />
                </div>
                <h4 className="font-bold text-gray-800 text-lg ml-4 group-hover:text-green-600 transition-colors duration-300">
                  Revisão Contratual
                </h4>
              </div>
              <p className="text-gray-700 leading-relaxed font-medium">
                Análise completa de contratos bancários identificando cláusulas
                abusivas e irregularidades contratuais.
              </p>
            </div>

            {/* Card 5 - Empréstimo Consignado */}
            <div
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 elevated-card premium-border card-hover group"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-3 rounded-xl group-hover:shadow-lg group-hover:shadow-purple-200/50 transition-all duration-300">
                  <AlertTriangle
                    className="text-purple-600 group-hover:scale-110 transition-transform duration-300"
                    size={28}
                  />
                </div>
                <h4 className="font-bold text-gray-800 text-lg ml-4 group-hover:text-purple-600 transition-colors duration-300">
                  Empréstimo Consignado
                </h4>
              </div>
              <p className="text-gray-700 leading-relaxed font-medium">
                Cancelamento de empréstimos não solicitados, revisão de taxas
                abusivas e recuperação de valores descontados indevidamente.
              </p>
            </div>

            {/* Card 6 - Cartão de Crédito */}
            <div
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 elevated-card premium-border card-hover group"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-3 rounded-xl group-hover:shadow-lg group-hover:shadow-pink-200/50 transition-all duration-300">
                  <DollarSign
                    className="text-pink-600 group-hover:scale-110 transition-transform duration-300"
                    size={28}
                  />
                </div>
                <h4 className="font-bold text-gray-800 text-lg ml-4 group-hover:text-pink-600 transition-colors duration-300">
                  Cartão de Crédito
                </h4>
              </div>
              <p className="text-gray-700 leading-relaxed font-medium">
                Contestação de anuidades indevidas, seguros não contratados,
                saques não realizados e compras não reconhecidas.
              </p>
            </div>

            {/* Card 7 - Financiamento Veicular */}
            <div
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 elevated-card premium-border card-hover group"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-3 rounded-xl group-hover:shadow-lg group-hover:shadow-indigo-200/50 transition-all duration-300">
                  <FileText
                    className="text-indigo-600 group-hover:scale-110 transition-transform duration-300"
                    size={28}
                  />
                </div>
                <h4 className="font-bold text-gray-800 text-lg ml-4 group-hover:text-indigo-600 transition-colors duration-300">
                  Financiamento Veicular
                </h4>
              </div>
              <p className="text-gray-700 leading-relaxed font-medium">
                Revisão de contratos de financiamento, contestação de seguros
                obrigatórios e taxas abusivas em financiamentos.
              </p>
            </div>

            {/* Card 8 - Conta Corrente */}
            <div
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 elevated-card premium-border card-hover group"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-3 rounded-xl group-hover:shadow-lg group-hover:shadow-teal-200/50 transition-all duration-300">
                  <CheckCircle
                    className="text-teal-600 group-hover:scale-110 transition-transform duration-300"
                    size={28}
                  />
                </div>
                <h4 className="font-bold text-gray-800 text-lg ml-4 group-hover:text-teal-600 transition-colors duration-300">
                  Conta Corrente
                </h4>
              </div>
              <p className="text-gray-700 leading-relaxed font-medium">
                Contestação de tarifas de manutenção abusivas, pacote de
                serviços não solicitados e taxas de cheque especial.
              </p>
            </div>

            {/* Card 9 - Crédito Consignado */}
            <div
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 elevated-card premium-border card-hover group"
              style={{ animationDelay: "0.9s" }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-3 rounded-xl group-hover:shadow-lg group-hover:shadow-yellow-200/50 transition-all duration-300">
                  <AlertTriangle
                    className="text-yellow-600 group-hover:scale-110 transition-transform duration-300"
                    size={28}
                  />
                </div>
                <h4 className="font-bold text-gray-800 text-lg ml-4 group-hover:text-yellow-600 transition-colors duration-300">
                  Crédito Consignado
                </h4>
              </div>
              <p className="text-gray-700 leading-relaxed font-medium">
                Reversão de descontos não autorizados, renegociação de contratos
                prejudiciais e cancelamento de operações fraudulentas.
              </p>
            </div>
          </div>
        </div>

        {/* How We Work */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-20 shadow-xl border border-gray-200/50 elevated-card">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8 text-center">
            <span className="bg-gradient-to-r from-lawfirm-gold-600 via-lawfirm-gold-500 to-lawfirm-gold-600 bg-clip-text text-transparent">
              Como Trabalhamos Para Você
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-lawfirm-gold-50 to-white hover:shadow-lg transition-all duration-300">
              <div className="bg-lawfirm-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lawfirm-gold-600">
                  1
                </span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Análise Gratuita
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Analisamos seus contratos e extratos bancários sem custo para
                identificar irregularidades e possíveis recuperações.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-lawfirm-gold-50 to-white hover:shadow-lg transition-all duration-300">
              <div className="bg-lawfirm-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lawfirm-gold-600">
                  2
                </span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Estratégia Personalizada
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Desenvolvemos uma estratégia jurídica específica para seu caso,
                focando em resultados rápidos e eficazes.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-lawfirm-gold-50 to-white hover:shadow-lg transition-all duration-300">
              <div className="bg-lawfirm-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lawfirm-gold-600">
                  3
                </span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Recuperação de Valores
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Executamos a recuperação dos valores pagos indevidamente e
                garantimos que práticas abusivas sejam interrompidas.
              </p>
            </div>
          </div>
        </div>

        {/* Professional Values */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200/50 elevated-card">
          <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center text-gray-800">
            <span className="bg-gradient-to-r from-lawfirm-gold-600 via-lawfirm-gold-500 to-lawfirm-gold-600 bg-clip-text text-transparent">
              Compromisso com a justiça!
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-lawfirm-gold-50 to-lawfirm-gold-100 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-lawfirm-gold-600 mb-2">
                Atendimento
              </div>
              <p className="text-gray-700 font-medium">
                Transparente e Humanizado
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-lawfirm-gold-50 to-lawfirm-gold-100 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-lawfirm-gold-600 mb-2">
                Defesa
              </div>
              <p className="text-gray-700 font-medium">
                Dos seus direitos, com excelência
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-lawfirm-gold-50 to-lawfirm-gold-100 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-lawfirm-gold-600 mb-2">
                100%
              </div>
              <p className="text-gray-700 font-medium">
                Transparência no processo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
