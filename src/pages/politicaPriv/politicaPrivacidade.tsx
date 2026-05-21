import { Shield, Lock, Eye, FileText, Mail } from "lucide-react";
import { companyInfo } from "../../data";

function PoliticaPrivacidade() {
  return (
    <div className="bg-bright-snow">
      {/* Banner */}
      <section className="bg-linear-to-br from-yale-blue to-rich-cerulean py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 text-baby-blue-ice mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Política de Privacidade
          </h1>
          <p className="text-xl text-baby-blue-ice">
            Atualizada em {new Date().toLocaleDateString("pt-BR")}
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 space-y-8">
            {/* 1. Introdução */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-rich-cerulean" />
                1. Introdução
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A {companyInfo.name} protege a privacidade e os dados pessoais
                de clientes, parceiros e visitantes, em conformidade com a LGPD
                (Lei nº 13.709/2018).
              </p>
            </div>

            {/* 2. Dados Coletados */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-rich-cerulean" />
                2. Dados que Coletamos
              </h2>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Nome completo",
                  "E-mail",
                  "Telefone / WhatsApp",
                  "CPF ou CNPJ",
                  "Dados de navegação (cookies)",
                  "Informações do pedido",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Lock className="w-4 h-4 text-rich-cerulean mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Finalidade */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-rich-cerulean" />
                3. Finalidade do Tratamento
              </h2>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Emitir e gerenciar certificados digitais",
                  "Atendimento e suporte ao cliente",
                  "Enviar informações sobre serviços contratados",
                  "Cumprir obrigações legais",
                  "Melhorar sua experiência no site",
                  "Prevenir fraudes",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Lock className="w-4 h-4 text-rich-cerulean mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Compartilhamento */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-rich-cerulean" />
                4. Compartilhamento de Dados
              </h2>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Autoridades certificadoras (emissão do certificado)",
                  "Órgãos governamentais (exigência legal)",
                  "Prestadores de serviço essenciais (ex: e-mail)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Lock className="w-4 h-4 text-rich-cerulean mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Não vendemos seus dados para terceiros.
              </p>
            </div>

            {/* 5. Segurança */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-rich-cerulean" />
                5. Armazenamento e Segurança
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Seus dados são armazenados em servidores seguros, com acesso
                restrito a profissionais autorizados, pelo período necessário
                para cumprir as finalidades descritas nesta política.
              </p>
            </div>

            {/* 6. Direitos LGPD */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-rich-cerulean" />
                6. Seus Direitos (LGPD)
              </h2>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Confirmar o tratamento dos seus dados",
                  "Acessar seus dados",
                  "Corrigir dados incompletos ou desatualizados",
                  "Solicitar anonimização, bloqueio ou eliminação",
                  "Portabilidade dos dados",
                  "Revogar o consentimento",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Lock className="w-4 h-4 text-rich-cerulean mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 7. Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-rich-cerulean" />
                7. Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Utilizamos cookies para melhorar sua navegação. Você pode
                desativá-los nas configurações do seu navegador.
              </p>
            </div>

            {/* 8. Contato */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <Mail className="w-6 h-6 text-rich-cerulean" />
                8. Contato
              </h2>
              <div className="bg-bright-snow rounded-xl p-6 space-y-3">
                <p className="text-gray-600">
                  <strong>E-mail:</strong>{" "}
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-rich-cerulean hover:text-yale-blue transition"
                  >
                    {companyInfo.email}
                  </a>
                </p>
                <p className="text-gray-600">
                  <strong>WhatsApp:</strong>{" "}
                  <a
                    href={companyInfo.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 transition"
                  >
                    (11) 99860-6204
                  </a>
                </p>
                <p className="text-gray-600">
                  <strong>Endereço:</strong> {companyInfo.address} — Osasco/SP
                </p>
              </div>
            </div>

            {/* Atualizações */}
            <div className="bg-bright-snow rounded-xl p-6">
              <p className="text-sm text-gray-500">
                Esta política pode ser atualizada. Recomendamos a leitura
                periódica.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PoliticaPrivacidade;
