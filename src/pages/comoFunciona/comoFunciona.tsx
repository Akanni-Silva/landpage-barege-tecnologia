import { CreditCard, Calendar, UserCheck, Video } from "lucide-react";

function ComoFunciona() {
  const steps = [
    {
      icon: CreditCard,
      title: "1. Escolha e Pague",
      desc: "Adquira seu certificado com até 15% de desconto, em até 12x no cartão ou boleto.",
    },
    {
      icon: Calendar,
      title: "2. Agende",
      desc: "Agende a emissão presencial ou por videoconferência.",
    },
    {
      icon: UserCheck,
      title: "3. Documentos",
      desc: "Tenha em mãos os documentos necessários.",
    },
    {
      icon: Video,
      title: "4. Emita",
      desc: "Realize a emissão com segurança.",
    },
  ];

  return (
    <div>
      <section className="bg-linear-to-br from-yale-blue to-rich-cerulean py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Como Funciona
          </h1>
          <p className="text-xl text-baby-blue-ice">
            Adquira seu Certificado Digital de forma rápida e segura
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="text-center p-6 bg-white rounded-2xl shadow-md"
            >
              <div className="w-16 h-16 bg-baby-blue-ice rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-yale-blue" />
              </div>
              <h3 className="text-lg font-semibold text-yale-blue mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ComoFunciona;
