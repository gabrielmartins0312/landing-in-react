import React, { Suspense } from "react"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

const HeroSection = React.lazy(() => import("./components/organisms/HeroSection"))
const AboutSection = React.lazy(() => import("./components/organisms/AboutSection"))
const ServicesSection = React.lazy(() => import("./components/organisms/ServicesSection"))
const CallToActionFinal = React.lazy(() => import("./components/organisms/CallToActionFinal"))

function App() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <Navbar />

      <Suspense fallback={<p className="text-center py-10">Carregando seção...</p>}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CallToActionFinal />
      </Suspense>

      <Footer />
    </div>
  )
}

export default App
