import { useEffect, useState } from "react"

import * as C from "./App.styles"

import logo from "./assets/devmemory_logo.png"
import restartIcon from "./svgs/restart.svg"

import Button from "./components/Button"
import InfoItem from "./components/InfoItem"

import { GridItemType } from "./types/GridItemType"
import { items } from "./data/items"
import GridItem from "./components/GridItem"
import formtTimeElapsed from "./helpers/formatTimeElapsed"

const App = () => {
  const [playing, setPlaying] = useState<boolean>(false)
  const [timeElapsed, setTimeElapsed] = useState<number>(0)
  const [moveCount, setMoveCount] = useState<number>(0)
  const [showCount, setShowCount] = useState<number>(0)
  const [gridItems, setGridItems] = useState<GridItemType[]>([])

  useEffect(() => resetAndCreateGrid(), [])

  useEffect(() => {
    const timer = setInterval(() => {
      if(playing) {
        setTimeElapsed(timeElapsed + 1)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [playing, timeElapsed])

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
    for (let w = 0; w < 2 ; w++) {
      for (let i = 0; i < items.length; i++) {
        let pos = -1
        while(pos < 0 || tmpGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2))
        }
        tmpGrid[pos].item = i
      }
    }
  
    // JOGAR NO STATE
    setGridItems(tmpGrid)

    // COMEÇAR O JOGO
    setPlaying(true)
  }

  const handleItemClick = (index: number) => {
    
  }

  return(
    <C.Container>

      <C.Info>
        <C.LogoLink href="">
          <img src={logo} alt="imagem do logo" width={200}/>
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label="Tempo" value={formtTimeElapsed(timeElapsed)}/>
          <InfoItem label="Movimentos" value="0"/>
        </C.InfoArea>

        <Button icon={restartIcon} label="Reiniciar" onClick={resetAndCreateGrid}/>

      </C.Info>

      <C.GridArea>
        <C.Grid>
          {gridItems.map((item, index) => (
            <GridItem 
              key={index}
              item={item}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </C.Grid>
      </C.GridArea>

    </C.Container>
  )
}

export default App