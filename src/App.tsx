import * as C from "./App.styles"

import logo from "./assets/devmemory_logo.png"

const App = () => {
  return(
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={logo} alt="imagem do logo" width={200}/>
        </C.LogoLink>

        <C.InfoArea>
          ....
        </C.InfoArea>

        <button>Reiniciar</button>

      </C.Info>

      <C.GridArea>
        ....
      </C.GridArea>
    </C.Container>
  )
}

export default App