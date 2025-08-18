import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Team from "@/components/Team";


export default function Home() {
  return (
    <div>
      {/* Hero Section */}
        <Hero />

      {/* Services Section */}
      <Services />

      {/* Portfolio Section */}
      <Portfolio />

      {/* About Section */}
      <About />
      
      {/* Team Section */}
      <Team />

      {/* Contact Section */}
      <Contact />
    </div>
  )
}