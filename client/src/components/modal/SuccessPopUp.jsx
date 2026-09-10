import './Modal.css'

function SuccessPopUp({ Title, Message }) {
  return (
    <section className="modal-popup modal-popup--success" role="dialog" aria-labelledby="success-popup-title" aria-describedby="success-popup-message">
      <div className="modal-popup__icon" aria-hidden="true">✓</div>
      <div className="modal-popup__content">
        <p className="modal-popup__eyebrow">Success</p>
        <h2 id="success-popup-title">{Title}</h2>
        <p id="success-popup-message">{Message}</p>
      </div>
    </section>
  )
}

export default SuccessPopUp
