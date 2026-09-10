import './Modal.css'

function FailedPopUp({ Title, Message }) {
  return (
    <section className="modal-popup modal-popup--failed" role="dialog" aria-labelledby="failed-popup-title" aria-describedby="failed-popup-message">
      <div className="modal-popup__icon" aria-hidden="true">!</div>
      <div className="modal-popup__content">
        <p className="modal-popup__eyebrow">Something went wrong</p>
        <h2 id="failed-popup-title">{Title}</h2>
        <p id="failed-popup-message">{Message}</p>
      </div>
    </section>
  )
}

export default FailedPopUp
