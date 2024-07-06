import './Modal.css'

export function Modal ({ open = false, time = 0, onAction }) {
  if (!open) return false
  return (
    <div className='backdrop'>
      <div className='modal'>
        <p className='modal-text'>
          Your time is<br />{time.toFixed(3)}s
        </p>
        <button
          className='modal-button'
          onClick={() => {
            onAction()
          }}
        >Restart
        </button>
      </div>
    </div>
  )
}
