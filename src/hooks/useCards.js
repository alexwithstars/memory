import { useEffect, useState } from 'react'
import { random } from '../misc/misc'

export function useCards ({ pairs = 8, icons } = {}) {
  const [cards, setCards] = useState({})
  const items = icons?.length === pairs
    ? icons
    : Array(pairs).fill(0).map((_, i) => i + 1)
  const shuffleCards = () => {
    const cardPairs = [...items, ...items]
    cardPairs.sort(() => random(-1, 0))
    const cardItems = {}
    for (const card of cardPairs) {
      const id = crypto.randomUUID()
      cardItems[id] = {
        id,
        content: card,
        flipped: false,
        matched: false
      }
    }
    setCards(cardItems)
  }
  useEffect(() => {
    shuffleCards()
  }, [])
  return [cards, setCards, shuffleCards]
}
