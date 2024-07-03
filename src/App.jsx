import Card from './components/Card'
import './App.css'
import { useRef } from 'react'
import { useCards } from './hooks/useCards'

export default function App () {
  const [cards, setCards] = useCards({ pairs: 8 })
  const firstCard = useRef(null)
  const secondCard = useRef(null)

  const handleClick = (id) => {
    if (cards[id].flipped || cards[id].matched) return
    if (firstCard.current && secondCard.current) return
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
        setCards(newCards)
      }, 1000)
    }
    setCards(newCards)
  }

  return (
    <div className='contentMain'>
      <header>
        <h1 className='title'>Memory</h1>
      </header>
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
