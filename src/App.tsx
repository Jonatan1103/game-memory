import * as C from "./App.styles"

import logo from "./assets/devmemory_logo.png"
import restartIcon from "./svgs/restart.svg"

import Button from "./components/Button"
import InfoItem from "./components/InfoItem"

const App = () => {

  const resetAndCreateGrid = () => {

  }

  return(
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={logo} alt="imagem do logo" width={200}/>
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label="Tempo" value="00:00"/>
          <InfoItem label="Movimentos" value="0"/>
        </C.InfoArea>

        <Button icon={restartIcon} label="Reiniciar" onClick={resetAndCreateGrid}/>

      </C.Info>

      <C.GridArea>
        ....
      </C.GridArea>
    </C.Container>
  )
}

export default App