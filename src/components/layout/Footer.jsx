import FacebookIcon from "../../assets/facebook.png"
import LinkedInIcon from "../../assets/linkedin.png"
import InstagramIcon from "../../assets/instagram.png"

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 text-sm pt-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 mb-10">
        {/* Coluna 1 - Logo e Suporte */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-2">Maquineta</h2>
          <p className="font-semibold">Suporte</p>
          <p>suporte@maquinetavirtual.com.br</p>
        </div>

        <div></div>

        <div className="text-center md:text-right">
          <div className="flex md:justify-end justify-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition">
                <img src={FacebookIcon} alt="Facebook" className="w-5 h-5" />
              </div>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition">
                <img src={InstagramIcon} alt="Instagram" className="w-5 h-5" />
              </div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition">
                <img src={LinkedInIcon} alt="LinkedIn" className="w-5 h-5" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Faixa inferior */}
      <div className="bg-white text-center text-gray-500 text-sm border-t pt-6 pb-10 px-4">
        <p className="font-semibold">© 2025 - Todos os direitos reservados.</p>
        <p className="mt-1">
          MAQUINETA INTERMEDIAÇÕES DIGITAIS LTDA - CNPJ: 00.000.000/0000-00
        </p>
        <p>
          Rua Visconde do Rio Branco, 0000 - Sala 000 (Centro Empresarial Dr. Cássio Virmond) – Centro, Curitiba – PR – CEP: 00000-000
        </p>
      </div>
    </footer>
  )
}
