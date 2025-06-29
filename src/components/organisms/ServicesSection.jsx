import { FaCreditCard, FaMobileAlt, FaChartLine } from "react-icons/fa"

const services = [
  {
    icon: <FaCreditCard size={28} />,
    title: "Pagamentos Simples",
    description: "Aceite cartões com taxas acessíveis e receba direto na conta."
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: "Venda Online",
    description: "Gere links de pagamento e envie para seus clientes em segundos."
  },
  {
    icon: <FaChartLine size={28} />,
    title: "Controle Total",
    description: "Acompanhe suas vendas e repasses em tempo real na plataforma."
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">O que oferecemos</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-12 rounded-full"></div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 mb-6 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
