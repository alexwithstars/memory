import { useEffect, useState } from 'react'
import { random } from '../misc/random'

export function useCards ({ pairs }) {
  const [cards, setCards] = useState({})
  useEffect(() => {
    const items = Array(pairs).fill(0).map((_, i) => i + 1)
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
  }, [])
  return [cards, setCards]
}
