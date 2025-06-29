export default function ServiceCard({ icon, title, description }) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="w-14 h-14 mb-6 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    )
  }
  