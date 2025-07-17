import { Scale, Shield, Users, Award } from "lucide-react";

export function About() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Excelência em Direito Bancário.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Somos um escritório de advocacia formado full service. Atendemos
            todas demandas bancárias, com soluções estratégicas e eficazes para
            proteger seus direitos e interesses financeiros.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-lawfirm-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Scale className="text-lawfirm-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Experiência Comprovada
            </h3>
            <p className="text-gray-600">
              Anos de experiência em direito bancário e financeiro
            </p>
          </div>

          <div className="text-center">
            <div className="bg-lawfirm-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-lawfirm-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Proteção Total
            </h3>
            <p className="text-gray-600">
              Defendemos seus direitos contra práticas abusivas bancárias
            </p>
          </div>

          <div className="text-center">
            <div className="bg-lawfirm-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-lawfirm-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Atendimento Personalizado
            </h3>
            <p className="text-gray-600">
              Cada caso é tratado com atenção individual e dedicação
            </p>
          </div>

          <div className="text-center">
            <div className="bg-lawfirm-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-lawfirm-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Resultados Eficazes
            </h3>
            <p className="text-gray-600">
              Histórico de sucesso em recuperação de valores e direitos
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className="bg-gray-50 rounded-xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8 text-center">
            Nossas Especialidades
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-lawfirm-green-600 rounded-full mt-2"></div>
              <span className="text-gray-700">
                Revisão de contratos bancários
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-lawfirm-green-600 rounded-full mt-2"></div>
              <span className="text-gray-700">
                Negativação indevida (SPC/Serasa)
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-lawfirm-green-600 rounded-full mt-2"></div>
              <span className="text-gray-700">Tarifas abusivas bancárias</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-lawfirm-green-600 rounded-full mt-2"></div>
              <span className="text-gray-700">
                Empréstimos consignados indevidos
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-lawfirm-green-600 rounded-full mt-2"></div>
              <span className="text-gray-700">Juros abusivos e anatocismo</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-lawfirm-green-600 rounded-full mt-2"></div>
              <span className="text-gray-700">
                Cartão de crédito - cobrança indevida
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
