import { useEffect, useState } from "react"

import * as C from "./App.styles"

import logo from "./assets/devmemory_logo.png"
import restartIcon from "./svgs/restart.svg"

import Button from "./components/Button"
import InfoItem from "./components/InfoItem"

import { GridItemType } from "./types/GridItemType"
import { items } from "./data/items"

const App = () => {
  const [playing, setPlaying] = useState<boolean>(false)
  const [timeElapsed, setTimeElapsed] = useState<number>(0)
  const [moveCount, setMoveCount] = useState<number>(0)
  const [showCount, setShowCount] = useState<number>(0)
  const [gridItems, setGridItems] = useState<GridItemType[]>([])

  useEffect(() => resetAndCreateGrid(), [])

  const resetAndCreateGrid = () => {
    // RESETANDO O JOGO
    setTimeElapsed(0)
    setMoveCount(0)
    setShowCount(0)
    
    // CRIANDO O GRID VAZIO
    let tmpGrid: GridItemType[] = []
    for(let i = 0; i < (items.length * 2) ; i++) {
      tmpGrid.push({
        item: null,
        shown: false,
        permanentShown: false
      })
    }
    
    // PREENCHER O GRID
    setGridItems(tmpGrid)

    // JOGAR NO STATE

    // COMEÇAR O JOGO
    setPlaying(true)
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
        <C.Grid>

        </C.Grid>
      </C.GridArea>

    </C.Container>
  )
}

export default App