import { GlobalCss } from './styles'
import Hero from './components/Hero'
import CardList from './components/CardList'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div>
        <GlobalCss />
        <Hero />
        <CardList />
        <Footer />
      </div>
    </>
  )
}

export default App
