// src/pages/Contato.tsx
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Building,
  Shield,
  ExternalLink,
  Globe,
} from "lucide-react";
import { companyInfo } from "../../data";
import { InstagramLogoIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import baregeLogo from "../../assets/baregeLogo.png";

function Contato() {
  return (
    <div className="bg-bright-snow">
      {/* Banner */}
      <section className="bg-linerar-to-br from-yale-blue to-rich-cerulean py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-baby-blue-ice">
            Estamos prontos para atender você
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Coluna principal - Informações de contato */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cartão de Visitas Digital */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={baregeLogo}
                  alt="logo da barege tecnologia"
                  className="h-17 w-auto"
                />
                <div>
                  <h2 className="text-2xl font-bold text-yale-blue">
                    {companyInfo.name}
                  </h2>
                  <p className="text-gray-500">
                    Tecnologia e Confiança em Certificação Digital
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Endereço */}
                <div className="flex items-start gap-3 p-4 bg-bright-snow rounded-xl">
                  <MapPin className="w-6 h-6 text-rich-cerulean shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-yale-blue mb-1">
                      Endereço
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {companyInfo.address}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">Osasco - SP</p>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex items-start gap-3 p-4 bg-bright-snow rounded-xl">
                  <Phone className="w-6 h-6 text-rich-cerulean shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-yale-blue mb-1">
                      Telefone / WhatsApp
                    </h3>
                    <a
                      href={companyInfo.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 transition text-sm font-medium"
                    >
                      (11) 99860-6204
                    </a>
                    <p className="text-gray-400 text-xs mt-1">
                      Atendimento via WhatsApp
                    </p>
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start gap-3 p-4 bg-bright-snow rounded-xl">
                  <Mail className="w-6 h-6 text-rich-cerulean shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-yale-blue mb-1">
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

                {/* Horário de Atendimento */}
                <div className="flex items-start gap-3 p-4 bg-bright-snow rounded-xl">
                  <Clock className="w-6 h-6 text-rich-cerulean shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-yale-blue mb-1">
                      Horário de Atendimento
                    </h3>
                    <p className="text-gray-600 text-sm">Segunda a Sexta</p>
                    <p className="text-gray-600 text-sm">09:00 às 18:00</p>
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
                  WhatsApp
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

            {/* Mapa */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Nossa Localização
              </h2>
              <div className="aspect-video bg-bright-snow rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.122857672406!2d-46.79169468440715!3d-23.52858468470034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff095c5e5b8d%3A0x9e4e4e4e4e4e4e4e!2sAv.%20dos%20Autonomistas%2C%202561%20-%20Vila%20Osasco%2C%20Osasco%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1625000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Barege Tecnologia"
                />
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">
                Av. dos Autonomistas, 2561 - Osasco - SP
              </p>
            </div>

            {/* Informações Complementares */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-xl font-bold text-yale-blue mb-4 flex items-center gap-2">
                <Building className="w-5 h-5" />
                Informações Complementares
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3 p-4 bg-bright-snow rounded-xl">
                  <Shield className="w-5 h-5 text-rich-cerulean shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-yale-blue">
                      Certificação Digital
                    </h3>
                    <p className="text-sm mt-1">
                      Trabalhamos com todos os tipos de certificados digitais:
                      e-CPF, e-CNPJ, NFe, CT-e, e-Jurídico, e-Médico, e-Saúde e
                      outros. Emissão rápida e sem burocracia, com suporte
                      completo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-bright-snow rounded-xl">
                  <Globe className="w-5 h-5 text-rich-cerulean shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-yale-blue">
                      Atendimento Nacional
                    </h3>
                    <p className="text-sm mt-1">
                      Atendemos em todo o Brasil com emissão presencial em nossa
                      unidade em Osasco - SP ou por videoconferência para
                      qualquer localidade.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-bright-snow rounded-xl">
                  <ExternalLink className="w-5 h-5 text-rich-cerulean shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-yale-blue">Parcerias</h3>
                    <p className="text-sm mt-1">
                      Contadores e escritórios de contabilidade podem se tornar
                      parceiros e ganhar comissão por cada certificado emitido e
                      renovado de seus clientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna lateral - WhatsApp CTA */}
          <div className="space-y-6">
            <div className="bg-green-50 rounded-2xl shadow-lg p-6 border border-green-200 text-center sticky top-24">
              <MessageCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">
                Fale Conosco pelo WhatsApp
              </h3>
              <p className="text-sm text-green-600 mb-6">
                Atendimento rápido e personalizado. Tire suas dúvidas ou
                solicite seu certificado agora mesmo.
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
                Seg a Sex: 09:00 às 18:00
              </p>
            </div>

            {/* Links rápidos */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-yale-blue mb-4">
                Links Rápidos
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
