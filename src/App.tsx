import { useState } from 'react'

import { ThemeProvider } from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Projetos from './components/Projetos'
import Sidebar from './containers/SideBar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import Home from './Pages/Home'
import ListaProjetos from './Pages/ListaProjetos'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <ListaProjetos />
  }
])

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    // Negando o false e tendo como retorno true
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }
  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <RouterProvider router={rotas} />
    </ThemeProvider>
  )
}

export default App
