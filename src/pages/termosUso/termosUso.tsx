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
      <section className="bg-linear-to-br from-yale-blue to-rich-cerulean py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scale className="w-16 h-16 text-baby-blue-ice mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Termos de Uso
          </h1>
          <p className="text-xl text-baby-blue-ice">
            Atualizado em {new Date().toLocaleDateString("pt-BR")}
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 space-y-8">
            {/* 1. Aceitação */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-rich-cerulean" />
                1. Aceitação dos Termos
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Ao usar o site da {companyInfo.name}, você concorda com estes
                Termos de Uso. Se não concordar, não utilize nossos serviços.
              </p>
            </div>

            {/* 2. Serviços */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-rich-cerulean" />
                2. Nossos Serviços
              </h2>
              <ul className="space-y-2 text-gray-600">
                {[
                  "e-CPF (Pessoa Física)",
                  "e-CNPJ (Pessoa Jurídica)",
                  "NFe, CT-e e outros fins fiscais",
                  "e-Jurídico, e-Médico, e-Saúde",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-rich-cerulean mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Obrigações */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-rich-cerulean" />
                3. Suas Obrigações
              </h2>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Fornecer informações verdadeiras e atualizadas",
                  "Apresentar documentos originais e válidos",
                  "Manter sigilo de senhas e certificados",
                  "Usar o certificado apenas para fins lícitos",
                  "Não compartilhar seu certificado com terceiros",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Lock className="w-4 h-4 text-rich-cerulean mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Proibições */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <Ban className="w-6 h-6 text-rich-cerulean" />
                4. Proibições
              </h2>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Usar o certificado para fraudes ou atividades ilegais",
                  "Falsificar documentos para obtenção do certificado",
                  "Copiar ou distribuir conteúdo do site sem autorização",
                  "Violar a segurança do site",
                  "Enviar spam ou conteúdo malicioso",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Ban className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. Pagamentos */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-rich-cerulean" />
                5. Pagamentos
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Preços disponíveis no site. Pagamento via Pix, cartão de crédito
                ou à vista antes da emissão. Desistência antes da emissão:
                reembolso integral. Após a emissão: não há reembolso, exceto por
                falha nossa.
              </p>
            </div>

            {/* 6. Limitação */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <Scale className="w-6 h-6 text-rich-cerulean" />
                6. Limitação de Responsabilidade
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A {companyInfo.name} não se responsabiliza por uso indevido do
                certificado, informações incorretas do cliente, problemas
                técnicos do usuário ou indisponibilidade temporária do site.
              </p>
            </div>

            {/* 7. Propriedade Intelectual */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-rich-cerulean" />
                7. Propriedade Intelectual
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Todo conteúdo do site é propriedade exclusiva da{" "}
                {companyInfo.name}, protegido por leis de direitos autorais.
              </p>
            </div>

            {/* 8. Rescisão */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <Ban className="w-6 h-6 text-rich-cerulean" />
                8. Rescisão
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Podemos suspender ou encerrar o acesso aos serviços em caso de
                violação destes Termos ou da legislação aplicável.
              </p>
            </div>

            {/* 9. Alterações */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-rich-cerulean" />
                9. Alterações
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Estes Termos podem ser alterados a qualquer momento. As mudanças
                valem imediatamente após publicação no site.
              </p>
            </div>

            {/* 10. Contato */}
            <div>
              <h2 className="text-2xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <Mail className="w-6 h-6 text-rich-cerulean" />
                10. Contato
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default TermosUso;
