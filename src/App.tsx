import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Differentials } from './sections/Differentials'
import { Hero } from './sections/Hero'
import { Portfolio } from './sections/Portfolio'
import { Process } from './sections/Process'
import { Services } from './sections/Services'

export default function App() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Services />
        <Differentials />
        <Portfolio />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
