import { GlobalCss } from './styles'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <div>
        <GlobalCss />
        <Rotas />
      </div>
    </BrowserRouter>
  )
}

export default App
