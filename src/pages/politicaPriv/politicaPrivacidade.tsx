import { Shield, Lock, Eye, FileText, Mail,  } from "lucide-react";
import { companyInfo } from "../../data";



function PoliticaPrivacidade() {
  return (
    <div className="bg-bright-snow">
      {/* Banner */}
      <section className="bg-gradient-to-br from-yale-blue to-rich-cerulean py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 text-baby-blue-ice mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Política de Privacidade
          </h1>
          <p className="text-xl text-baby-blue-ice">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 space-y-8">
            
            {/* Introdução */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-rich-cerulean" />
                1. Introdução
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A {companyInfo.name} ("nós", "nosso" ou "empresa") está comprometida em proteger 
                a privacidade e os dados pessoais de nossos clientes, parceiros e visitantes. 
                Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e 
                protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção 
                de Dados (LGPD - Lei nº 13.709/2018).
              </p>
            </div>

            {/* Dados Coletados */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-rich-cerulean" />
                2. Dados que Coletamos
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Podemos coletar os seguintes dados pessoais quando você utiliza nossos serviços:
              </p>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Nome completo",
                  "Endereço de e-mail",
                  "Número de telefone/WhatsApp",
                  "CPF ou CNPJ",
                  "Dados de navegação (cookies)",
                  "Informações do pedido de certificado digital",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Lock className="w-4 h-4 text-rich-cerulean mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Finalidade */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-rich-cerulean" />
                3. Finalidade do Tratamento
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Utilizamos seus dados pessoais para as seguintes finalidades:
              </p>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Emitir e gerenciar certificados digitais",
                  "Entrar em contato para suporte e atendimento",
                  "Enviar informações sobre produtos e serviços contratados",
                  "Cumprir obrigações legais e regulatórias",
                  "Melhorar a experiência de navegação em nosso site",
                  "Prevenir fraudes e garantir a segurança das transações",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Lock className="w-4 h-4 text-rich-cerulean mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compartilhamento */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-rich-cerulean" />
                4. Compartilhamento de Dados
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Seus dados pessoais podem ser compartilhados com:
              </p>
              <ul className="space-y-2 text-gray-600 mt-4">
                {[
                  "Autoridades certificadoras para emissão de certificados digitais",
                  "Órgãos governamentais conforme exigência legal",
                  "Prestadores de serviço essenciais para a operação (ex: serviço de e-mail)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Lock className="w-4 h-4 text-rich-cerulean mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Não vendemos, alugamos ou comercializamos seus dados pessoais para terceiros 
                para fins de marketing sem o seu consentimento explícito.
              </p>
            </div>

            {/* Armazenamento e Segurança */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-rich-cerulean" />
                5. Armazenamento e Segurança
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Adotamos medidas técnicas e organizacionais para proteger seus dados pessoais 
                contra acesso não autorizado, alteração, divulgação ou destruição. Seus dados 
                são armazenados em servidores seguros e o acesso é restrito a profissionais 
                autorizados.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Os dados serão mantidos pelo período necessário para cumprir as finalidades 
                descritas nesta política, respeitando os prazos legais aplicáveis.
              </p>
            </div>

            {/* Direitos do Titular */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-rich-cerulean" />
                6. Seus Direitos (LGPD)
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                De acordo com a LGPD, você tem os seguintes direitos:
              </p>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Confirmar a existência de tratamento dos seus dados",
                  "Acessar seus dados pessoais",
                  "Corrigir dados incompletos, inexatos ou desatualizados",
                  "Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários",
                  "Solicitar a portabilidade dos dados a outro fornecedor",
                  "Revogar o consentimento a qualquer momento",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Lock className="w-4 h-4 text-rich-cerulean mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-rich-cerulean" />
                7. Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Nosso site utiliza cookies para melhorar a experiência de navegação. Cookies 
                são pequenos arquivos de texto armazenados no seu navegador que nos ajudam a 
                analisar o tráfego e personalizar o conteúdo. Você pode configurar seu navegador 
                para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
              </p>
            </div>

            {/* Contato */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <Mail className="w-6 h-6 text-rich-cerulean" />
                8. Contato
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
              </p>
              <div className="bg-bright-snow rounded-xl p-6 space-y-3">
                <p className="text-gray-600">
                  <strong>E-mail:</strong>{" "}
                  <a href={`mailto:${companyInfo.email}`} className="text-rich-cerulean hover:text-yale-blue transition">
                    {companyInfo.email}
                  </a>
                </p>
                <p className="text-gray-600">
                  <strong>WhatsApp:</strong>{" "}
                  <a href={companyInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition">
                    (11) 99860-6204
                  </a>
                </p>
                <p className="text-gray-600">
                  <strong>Endereço:</strong> {companyInfo.address} - Osasco/SP
                </p>
              </div>
            </div>

            {/* Atualizações */}
            <div className="bg-bright-snow rounded-xl p-6">
              <p className="text-sm text-gray-500">
                Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos 
                que você a revise regularmente para se manter informado sobre como protegemos 
                seus dados.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default PoliticaPrivacidade;