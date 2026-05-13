import {
  Shield,
  Scale,
  AlertTriangle,
  CheckCircle,
  Ban,
  Mail,
  FileText,
  Lock,
} from "lucide-react";
import { companyInfo } from "../../data";

function TermosUso() {
  return (
    <div className="bg-bright-snow">
      {/* Banner */}
      <section className="bg-gradient-to-br from-yale-blue to-rich-cerulean py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scale className="w-16 h-16 text-baby-blue-ice mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Termos de Uso
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
            {/* Aceitação */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-rich-cerulean" />
                1. Aceitação dos Termos
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Ao acessar e utilizar o site da {companyInfo.name} e nossos
                serviços de certificação digital, você concorda com os presentes
                Termos de Uso. Caso não concorde com qualquer disposição aqui
                estabelecida, recomendamos que não utilize nossos serviços.
              </p>
            </div>

            {/* Descrição dos Serviços */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-rich-cerulean" />
                2. Descrição dos Serviços
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A {companyInfo.name} atua na emissão e renovação de certificados
                digitais, incluindo:
              </p>
              <ul className="space-y-2 text-gray-600">
                {[
                  "e-CPF (Pessoa Física)",
                  "e-CNPJ (Pessoa Jurídica)",
                  "Certificados para NFe, CT-e e outros fins fiscais",
                  "Certificados profissionais (e-Jurídico, e-Médico, e-Saúde)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-rich-cerulean mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Obrigações do Usuário */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-rich-cerulean" />
                3. Obrigações do Usuário
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ao utilizar nossos serviços, você se compromete a:
              </p>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Fornecer informações verdadeiras, precisas e atualizadas",
                  "Apresentar documentos originais e válidos para emissão do certificado",
                  "Manter a confidencialidade de suas senhas e certificados digitais",
                  "Utilizar o certificado digital exclusivamente para fins lícitos",
                  "Não compartilhar seu certificado digital com terceiros",
                  "Comunicar imediatamente qualquer suspeita de uso indevido do certificado",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Lock className="w-4 h-4 text-rich-cerulean mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Proibições */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <Ban className="w-6 h-6 text-rich-cerulean" />
                4. Proibições
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                É expressamente proibido:
              </p>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Utilizar o certificado digital para fraudes ou atividades ilegais",
                  "Falsificar documentos ou informações para obtenção do certificado",
                  "Reproduzir, copiar ou distribuir conteúdo do site sem autorização",
                  "Realizar engenharia reversa ou tentar violar a segurança do site",
                  "Utilizar o site para envio de spam ou conteúdo malicioso",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Ban className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pagamentos */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-rich-cerulean" />
                5. Pagamentos e Preços
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Os preços dos certificados digitais estão disponíveis em nosso
                site e podem ser alterados sem aviso prévio. O pagamento deve
                ser realizado antes da emissão do certificado. Aceitamos
                pagamentos via boleto bancário e cartão de crédito em até 12
                vezes.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Em caso de desistência antes da emissão do certificado, o valor
                pago será reembolsado integralmente. Após a emissão, não será
                possível o reembolso, exceto por falha comprovada em nossa
                responsabilidade.
              </p>
            </div>

            {/* Limitação de Responsabilidade */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <Scale className="w-6 h-6 text-rich-cerulean" />
                6. Limitação de Responsabilidade
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A {companyInfo.name} não se responsabiliza por:
              </p>
              <ul className="space-y-2 text-gray-600 mt-4">
                {[
                  "Uso indevido do certificado digital pelo titular",
                  "Danos causados por informações incorretas fornecidas pelo cliente",
                  "Problemas técnicos decorrentes do equipamento do usuário",
                  "Indisponibilidade temporária do site por manutenção ou força maior",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Lock className="w-4 h-4 text-rich-cerulean mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Propriedade Intelectual */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-rich-cerulean" />
                7. Propriedade Intelectual
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Todo o conteúdo do site, incluindo textos, imagens, logotipos,
                ícones e design, é de propriedade exclusiva da{" "}
                {companyInfo.name} e está protegido pelas leis de direitos
                autorais e propriedade intelectual.
              </p>
            </div>

            {/* Rescisão */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <Ban className="w-6 h-6 text-rich-cerulean" />
                8. Rescisão
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Reservamo-nos o direito de suspender ou encerrar o acesso aos
                nossos serviços a qualquer momento, sem aviso prévio, em caso de
                violação destes Termos de Uso ou de qualquer legislação
                aplicável.
              </p>
            </div>

            {/* Alterações */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-rich-cerulean" />
                9. Alterações nos Termos
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Estes Termos de Uso podem ser alterados a qualquer momento. As
                alterações entrarão em vigor imediatamente após sua publicação
                no site. Recomendamos que você verifique periodicamente esta
                página.
              </p>
            </div>

            {/* Contato */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <Mail className="w-6 h-6 text-rich-cerulean" />
                10. Contato
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Em caso de dúvidas sobre estes Termos de Uso, entre em contato:
              </p>
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
                  <strong>Endereço:</strong> {companyInfo.address} - Osasco/SP
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TermosUso;
