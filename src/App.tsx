import { FC, useEffect, useState } from 'react'
import Background from './components/Background'
import Header from './components/Header'
import Hint from './components/Hint'
import MintButton from './components/MintButton'
import MintModal from './components/MintModal'
import Notepad from './components/Notepad'
import Plant from './components/Plant'
import Stats from './components/Stats'
import Timer from './components/Timer'
import TreasureList from './components/TreasureList'
import {
  addMintListener,
  addReopenListener,
  getPlantLifespan,
  getTimeLeft,
  getTreasureFound,
} from './utils/contract'
import { MAX_TIME } from './utils/time'
import './App.scss'

const App: FC = () => {
  const [isNotepadOpen, setNotepadOpen] = useState<boolean>(false)
  const [isMintModalOpen, setMintModalOpen] = useState<boolean>(false)
  const [timeLeft, setTimeLeft] = useState<number>(-1)
  const [lifespan, setLifespan] = useState<number>(0)
  const [treasureFound, setTreasureFound] = useState<number>(0)

  useEffect(() => {
    updateTimeLeft()
    updateLifespan()
    updateTreasureFound()
    addMintListener({
      onMint: () => {
        updateTimeLeft()
        updateTreasureFound()
      },
    })
    addReopenListener({
      onReopen: () => {
        updateTimeLeft()
        updateTreasureFound()
      },
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prev) => prev - 1)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [timeLeft])

  const updateTimeLeft = async () => {
    const timeLeft = await getTimeLeft()
    setTimeLeft(timeLeft)
  }

  const updateLifespan = async () => {
    const lifespan = await getPlantLifespan()
    setLifespan(lifespan)
  }

  const updateTreasureFound = async () => {
    const treasureFound = await getTreasureFound()
    setTreasureFound(treasureFound)
  }

  const displayNotepad = () => {
    setNotepadOpen(true)
    // Prevent scrolling
    document.body.style.overflow = 'hidden'
  }

  const closeNotepad = () => {
    setNotepadOpen(false)
    document.body.style.overflow = ''
  }

  const displayMintModal = () => {
    setMintModalOpen(true)
    // Prevent scrolling
    document.body.style.overflow = 'hidden'
  }

  const closeMintModal = () => {
    setMintModalOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <div className="app">
      <Header displayNotepad={displayNotepad} />
      <main>
        <Timer timeLeft={timeLeft} isPortrait={false} />
        <div className="landscape-hint-and-stats">
          <Hint isPortrait={false} />
          <Stats
            timeLeft={timeLeft}
            lifespan={lifespan}
            treasureFound={treasureFound}
            isPortrait={false}
          />
        </div>
        <Plant timeLeft={timeLeft} />
        <p className="water-plant-prompt">
          {timeLeft === 0 ? 'Game Over' : 'Water the plant'}
        </p>
        <Timer timeLeft={timeLeft} isPortrait={true} />
        <MintButton
          isModal={false}
          disabled={timeLeft === 0}
          onClick={displayMintModal}
        />
        <Hint isPortrait={true} />
        <TreasureList />
        <Stats
          timeLeft={timeLeft}
          lifespan={lifespan}
          treasureFound={treasureFound}
          isPortrait={true}
        />
      </main>
      <Background />
      {isNotepadOpen && <Notepad closeNotepad={closeNotepad} />}
      {isMintModalOpen && <MintModal closeModal={closeMintModal} />}
    </div>
  )
}

export default App
