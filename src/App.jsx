import Card from './components/Card'
import './App.css'
import { useRef, useState, useEffect } from 'react'
import { useCards } from './hooks/useCards'
import { Chrono } from './components/Chrono'
import confetti from 'canvas-confetti'
import { Modal } from './components/Modal'
import { useChrono } from './hooks/useChrono'

export default function App () {
  const [cards, setCards, shuffle] = useCards()
  const firstCard = useRef(null)
  const secondCard = useRef(null)
  const [started, setStarted] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [time, setRuning] = useChrono()

  useEffect(() => {
    setRuning(started)
  }, [started])

  const handleClick = (id) => {
    if (cards[id].flipped || cards[id].matched) return
    if (firstCard.current && secondCard.current) return
    if (!started) setStarted(true)
    const newCards = { ...cards }
    if (!firstCard.current) {
      firstCard.current = id
      newCards[id].flipped = true
    } else {
      secondCard.current = id
      newCards[id].flipped = true
    }
    if (firstCard.current && secondCard.current) {
      const match = cards[firstCard.current].content === cards[secondCard.current].content
      setTimeout(() => {
        const newCards = { ...cards }
        newCards[firstCard.current].flipped = false
        newCards[secondCard.current].flipped = false
        if (match) {
          newCards[firstCard.current].matched = true
          newCards[secondCard.current].matched = true
        }
        firstCard.current = null
        secondCard.current = null
        if (Object.values(newCards).every(card => card.matched)) {
          setStarted(false)
          setOpenModal(true)
          confetti({
            particleCount: 200,
            spread: 80,
            origin: { y: 1 }
          })
        }
        setCards(newCards)
      }, 1000)
    }
    setCards(newCards)
  }

  return (
    <div className='contentMain'>
      <header>
        <h1 className=' title'>Memory</h1>
      </header>
      <Chrono time={time} />
      <Modal
        open={openModal}
        time={time}
        onAction={() => {
          shuffle()
          setOpenModal(false)
        }}
      />
      <div className='content'>
        <div className='cards'>
          {Object.entries(cards).map(([key, item]) => (
            <Card
              key={key}
              item={item}
              onClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
