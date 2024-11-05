import { GlobalCss } from './styles'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <GlobalCss />
          <Rotas />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
