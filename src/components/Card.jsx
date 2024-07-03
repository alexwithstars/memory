import './Card.css'

export default function Card ({ item, onClick = () => {} }) {
  return (
    <div className='flip-card'>
      <div
        className='flip-card-inner'
        style={{
          transform: (item.flipped || item.matched) ? 'rotateY(180deg)' : 'none',
          opacity: item.matched ? '0.2' : '1'
        }}
        onClick={() => {
          onClick(item.id)
        }}
      >
        <div className='flip-card-front' />
        <div className='flip-card-back'>
          <p className='card-content'>{item.content}</p>
        </div>
      </div>
    </div>
  )
}
