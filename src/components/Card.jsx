import react from 'react';
import './Card.css';

export default function Card({ item , counter , setCounter, reset }) {
    const [flipped, setFlipped] = react.useState('rotateY(0deg)')
    const handleClick = () => {
        if(counter.count < 2){
            if(counter.firstCard === null){
                setCounter({...counter, firstCard: item.name, firstCardId: item.id, count: counter.count + 1})
            }else if(counter.secondCard === null){
                setCounter({...counter, secondCard: item.name, secondCardId: item.id , count: counter.count + 1})
            }
            setFlipped('rotateY(180deg)')
        }
    }
    react.useEffect(() => {
        if(reset){
            setFlipped('rotateY(0deg)') 
        }
    }, [reset]) 
    return (
        <div className="flip-card">
            <div className="flip-card-inner" style={{transform : flipped}} onClick={handleClick}>
                <div className="flip-card-front">
                </div>
                <div className="flip-card-back">
                    <p className="title">{item.name}</p>
                </div>
            </div>
        </div>
    )
}
