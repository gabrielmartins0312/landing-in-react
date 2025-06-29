import Button from "../atoms/Button"
import mockup from "../../assets/cellphonewithmaquineta.png"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 px-8 py-20"
      style={{
        background: "linear-gradient(90deg, #1E3A8A 0%, #3B82F6 100%)"
      }}
    >
      <div className="w-full md:w-[40%] flex justify-center md:justify-end">
        <img src={mockup} alt="Mockup Maquineta" className="w-[460px] h-auto"/>
      </div>

      <div className="w-full md:w-[50%] text-center md:text-left text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow">
          Transforme sua forma <br /> de vender com a <span className="underline">Maquineta</span>
        </h1>
        <p className="text-lg mb-8 drop-shadow">
          Nossa plataforma te ajuda a vender mais, com menos esforço. <br />
          Rápido, simples e digital.
        </p>
        <Button>Começar agora</Button>
      </div>
    </section>
  )
}
