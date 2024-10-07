import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WhyJoin from '../components/WhyJoinAndResources'
import Learn from '../components/Learn'
import Team from '../components/Team'
import FAQAndTestimonials from '../components/FAQAndTestimonials'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <Header />
      <section id="hero" className="snap-start h-screen"><Hero /></section>
      <section id="about" className="snap-start h-screen"><About /></section>
      <section id="why-join" className="snap-start h-screen"><WhyJoin /></section>
      <section id="learn" className="snap-start h-screen"><Learn /></section>
      <section id="team" className="snap-start h-screen"><Team /></section>
      <section id="faq" className="snap-start h-screen"><FAQAndTestimonials /></section>
      <section id="contact" className="snap-start min-h-screen">
        <Contact />
      </section>
    </div>
  )
}