import Card from './components/Card'
import './App.css'
import { useState ,useEffect } from 'react'


export default function App () {
    const [reset, setReset] = useState(false) ;
    const [play, setPlay] = useState(false) ;
    const [counter, setCounter] = useState({
        count:0,
        firstCard: null,
        secondCard: null,
        firstCardId: null,
        secondCardId: null

    })
    const [ItemsCards, setItemsCards] = useState([
        {name: '1', id: 1},
        {name: '2', id: 2},
        {name: '3', id: 3},
        {name: '4', id: 4},
        {name: '5', id: 5},
        {name: '6', id: 6},
        {name: '7', id: 7},
        {name: '8', id: 8},
        {name: '1', id: 9},
        {name: '2', id: 10},
        {name: '3', id: 11},
        {name: '4', id: 12},
        {name: '5', id: 13},
        {name: '6', id: 14},
        {name: '7', id: 15},
        {name: '8', id: 16},
    ])
    const matchClick = () => {
        console.log(counter)
        if(counter.count == 2){
            if(counter.firstCard== counter.secondCard){
                const newItems = ItemsCards.filter((item) => item.id !== counter.firstCardId && item.id !== counter.secondCardId)
                console.log("match") ;
                setTimeout(() => {
                    setItemsCards(newItems)

                }, 1000)
            }
            console.log("no match") ;
            setTimeout(() => {
                setReset(true);
            }, 1000)
        }
    }
    const resetAll = () => {
        setCounter({
            count: 0,
            firstCard: null,
            secondCard: null,
            firstCardId: null,
            secondCardId: null
        })
        setReset(false)
    }
    useEffect(matchClick, [counter]);
    useEffect(resetAll, [reset]);
    return( <div className='contentMain'>
        <header>
            <h1>Memory</h1>
        </header>
        <div className='content'>
            {ItemsCards.map((item) => (
                <Card
                    key={item.id}
                    item={item}
                    counter={counter}
                    setCounter={setCounter}
                    reset={reset}
                    play={play} 
                />
            ))}
        </div>
        </div>
    )
}
