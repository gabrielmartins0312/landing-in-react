import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className={`text-2xl font-bold ${scrolled ? "text-blue-600" : "text-white"}`}>
          Maquineta
        </h1>
        <ul className="flex space-x-8 text-lg font-medium">
          <li><a href="#hero" className="hover:underline">Início</a></li>
          <li><a href="#" className="hover:underline">Sobre</a></li>
          <li><a href="#" className="hover:underline">Serviços</a></li>
          <li><a href="#" className="hover:underline">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}
