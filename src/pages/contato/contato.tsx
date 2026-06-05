// src/pages/Contato.tsx
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Shield,
  Globe,
} from "lucide-react";
import { companyInfo } from "../../data";
import { InstagramLogoIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const baregeLogo = "https://i.imgur.com/nfnWofK.png";

function Contato() {
  return (
    <div className="bg-bright-snow">
      {/* Banner */}
      <section className="bg-linear-to-br from-yale-blue to-rich-cerulean py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Fale com a Barege
          </h1>
          <p className="text-xl text-baby-blue-ice">
            Atendimento rápido e sem burocracia
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Coluna principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cartão de Visitas */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={baregeLogo}
                  alt="Barege Tecnologia"
                  className="h-16 w-auto"
                />
                <div>
                  <h2 className="text-2xl font-bold text-yale-blue">
                    {companyInfo.name}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Especialistas em certificação digital
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Endereço */}
                <div className="flex items-start gap-3 p-4 bg-bright-snow rounded-xl">
                  <MapPin className="w-5 h-5 text-rich-cerulean shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-yale-blue text-sm mb-1">
                      Endereço
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {companyInfo.address}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">Osasco — SP</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3 p-4 bg-bright-snow rounded-xl">
                  <Phone className="w-5 h-5 text-rich-cerulean shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-yale-blue text-sm mb-1">
                      WhatsApp
                    </h3>
                    <a
                      href={companyInfo.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 transition text-sm font-medium"
                    >
                      (11) 99860-6204
                    </a>
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start gap-3 p-4 bg-bright-snow rounded-xl">
                  <Mail className="w-5 h-5 text-rich-cerulean shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-yale-blue text-sm mb-1">
                      E-mail
                    </h3>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-rich-cerulean hover:text-yale-blue transition text-sm"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-start gap-3 p-4 bg-bright-snow rounded-xl">
                  <Clock className="w-5 h-5 text-rich-cerulean shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-yale-blue text-sm mb-1">
                      Horário
                    </h3>
                    <p className="text-gray-600 text-sm">Seg a Sex: 09h às 18h</p>
                    <p className="text-gray-500 text-xs mt-0.5">
                      Sábado: 09h às 13h
                    </p>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={companyInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition text-sm font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chamar no WhatsApp
                </a>
                <a
                  href={`https://instagram.com/${companyInfo.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition text-sm font-medium"
                >
                  <InstagramLogoIcon className="w-4 h-4" />
                  {companyInfo.instagram}
                </a>
              </div>
            </div>

            {/* Sobre a Barege */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-xl font-bold text-yale-blue mb-4">
                Por que escolher a Barege?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-bright-snow rounded-xl">
                  <Shield className="w-5 h-5 text-rich-cerulean shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-yale-blue text-sm">
                      Certificação digital completa
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      e-CPF, e-CNPJ, NFe, CT-e, e-Jurídico, e-Médico, e-Saúde.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-bright-snow rounded-xl">
                  <Globe className="w-5 h-5 text-rich-cerulean shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-yale-blue text-sm">
                      Atendimento em todo Brasil
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Presencial em Osasco/SP ou online por videoconferência.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-bright-snow rounded-xl">
                  <MessageCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-yale-blue text-sm">
                      Suporte via WhatsApp
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Atendimento rápido de Seg a Sex: 09h às 18h.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna lateral */}
          <div className="space-y-6">
            {/* CTA WhatsApp */}
            <div className="bg-green-50 rounded-2xl shadow-lg p-6 border border-green-200 text-center top-24">
              <MessageCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">
                Fale com a gente agora
              </h3>
              <p className="text-sm text-green-600 mb-6">
                Tire suas dúvidas ou solicite seu certificado
              </p>
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition shadow-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Chamar Agora
                </span>
              </a>
              <p className="text-xs text-green-500 mt-3">
                Seg a Sex: 09h às 18h
              </p>
            </div>

            {/* Links rápidos */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-yale-blue mb-4">
                Acesso Rápido
              </h3>
              <div className="space-y-2">
                <Link
                  to="/solicitacao"
                  className="block p-3 bg-bright-snow rounded-lg text-sm text-yale-blue hover:bg-blue-50 transition font-medium"
                >
                  📋 Solicitar Certificado
                </Link>
                <Link
                  to="/produtos"
                  className="block p-3 bg-bright-snow rounded-lg text-sm text-yale-blue hover:bg-blue-50 transition font-medium"
                >
                  🛒 Ver Produtos
                </Link>
                <Link
                  to="/como-funciona"
                  className="block p-3 bg-bright-snow rounded-lg text-sm text-yale-blue hover:bg-blue-50 transition font-medium"
                >
                  ❓ Como Funciona
                </Link>
                <Link
                  to="/parceiros"
                  className="block p-3 bg-bright-snow rounded-lg text-sm text-yale-blue hover:bg-blue-50 transition font-medium"
                >
                  🤝 Seja Parceiro
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato;