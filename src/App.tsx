import { GlobalCss } from './styles'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import { Provider } from 'react-redux'
import { store } from './store'
import Footer from './components/Footer'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <GlobalCss />
          <Rotas />
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
