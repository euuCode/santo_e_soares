import { CheckCircle, AlertTriangle, DollarSign, FileText } from "lucide-react";

export function BankingInfo() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Advocacia Bancária Especializada
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Protegemos seus direitos contra práticas abusivas dos bancos. Nossa
            expertise em direito bancário garante que você não seja prejudicado
            por cobranças indevidas, juros abusivos ou contratos prejudiciais.
          </p>
        </div>

        {/* Problems We Solve */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-12 text-center">
            Problemas Bancários Que Resolvemos
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <AlertTriangle className="text-red-500 mr-3" size={24} />
                <h4 className="font-semibold text-gray-800">Juros Abusivos</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Revisão de contratos com juros acima do permitido por lei,
                anatocismo e capitalização irregular de juros.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <DollarSign className="text-orange-500 mr-3" size={24} />
                <h4 className="font-semibold text-gray-800">
                  Tarifas Indevidas
                </h4>
              </div>
              <p className="text-gray-600 text-sm">
                Contestação de TAC, TEC, tarifa de cadastro, seguro indevido e
                outras cobranças não autorizadas.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <FileText className="text-blue-500 mr-3" size={24} />
                <h4 className="font-semibold text-gray-800">
                  Negativação Irregular
                </h4>
              </div>
              <p className="text-gray-600 text-sm">
                Remoção de nome dos órgãos de proteção (SPC/Serasa) por
                negativações indevidas ou sem notificação prévia.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-500 mr-3" size={24} />
                <h4 className="font-semibold text-gray-800">
                  Revisão Contratual
                </h4>
              </div>
              <p className="text-gray-600 text-sm">
                Análise completa de contratos bancários identificando cláusulas
                abusivas e irregularidades contratuais.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <AlertTriangle className="text-purple-500 mr-3" size={24} />
                <h4 className="font-semibold text-gray-800">
                  Empréstimo Consignado
                </h4>
              </div>
              <p className="text-gray-600 text-sm">
                Cancelamento de empréstimos não solicitados, revisão de taxas
                abusivas e recuperação de valores descontados indevidamente.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-pink-500">
              <div className="flex items-center mb-4">
                <DollarSign className="text-pink-500 mr-3" size={24} />
                <h4 className="font-semibold text-gray-800">
                  Cartão de Crédito
                </h4>
              </div>
              <p className="text-gray-600 text-sm">
                Contestação de anuidades indevidas, seguros não contratados,
                saques não realizados e compras não reconhecidas.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-indigo-500">
              <div className="flex items-center mb-4">
                <FileText className="text-indigo-500 mr-3" size={24} />
                <h4 className="font-semibold text-gray-800">
                  Financiamento Veicular
                </h4>
              </div>
              <p className="text-gray-600 text-sm">
                Revisão de contratos de financiamento, contestação de seguros
                obrigatórios e taxas abusivas em financiamentos.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-teal-500">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-teal-500 mr-3" size={24} />
                <h4 className="font-semibold text-gray-800">Conta Corrente</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Contestação de tarifas de manutenção abusivas, pacote de
                serviços não solicitados e taxas de cheque especial.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-500">
              <div className="flex items-center mb-4">
                <AlertTriangle className="text-yellow-600 mr-3" size={24} />
                <h4 className="font-semibold text-gray-800">
                  Crédito Consignado
                </h4>
              </div>
              <p className="text-gray-600 text-sm">
                Reversão de descontos não autorizados, renegociação de contratos
                prejudiciais e cancelamento de operações fraudulentas.
              </p>
            </div>
          </div>
        </div>

        {/* How We Work */}
        <div className="bg-white rounded-xl p-8 lg:p-12 mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8 text-center">
            Como Trabalhamos Para Você
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-lawfirm-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lawfirm-gold-600">
                  1
                </span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Análise Gratuita
              </h4>
              <p className="text-gray-600">
                Analisamos seus contratos e extratos bancários sem custo para
                identificar irregularidades e possíveis recuperações.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-lawfirm-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lawfirm-gold-600">
                  2
                </span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Estratégia Personalizada
              </h4>
              <p className="text-gray-600">
                Desenvolvemos uma estratégia jurídica específica para seu caso,
                focando em resultados rápidos e eficazes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-lawfirm-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lawfirm-gold-600">
                  3
                </span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Recuperação de Valores
              </h4>
              <p className="text-gray-600">
                Executamos a recuperação dos valores pagos indevidamente e
                garantimos que práticas abusivas sejam interrompidas.
              </p>
            </div>
          </div>
        </div>

        {/* Success Stats */}
        <div className="bg-lawfirm-dark-800 rounded-xl p-8 lg:p-12 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
            Resultados Comprovados
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-lawfirm-gold-400 mb-2">
                95%
              </div>
              <p className="text-gray-300">
                Taxa de sucesso em recuperações bancárias
              </p>
            </div>

            <div>
              <div className="text-3xl lg:text-4xl font-bold text-lawfirm-gold-400 mb-2">
                R$ 2M+
              </div>
              <p className="text-gray-300">Valores recuperados para clientes</p>
            </div>

            <div>
              <div className="text-3xl lg:text-4xl font-bold text-lawfirm-gold-400 mb-2">
                100%
              </div>
              <p className="text-gray-300">Transparência no processo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
