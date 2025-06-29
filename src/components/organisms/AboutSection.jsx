import sobreImage from "../../assets/quem-somos.jpg";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que é a Maquineta?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            A Maquineta é uma solução digital que facilita suas vendas com tecnologia e praticidade.
            Com ela, você envia links de pagamento via WhatsApp, gerencia transações e aumenta seus lucros.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={sobreImage}
            alt="Sobre a Maquineta"
            className="rounded-xl shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
