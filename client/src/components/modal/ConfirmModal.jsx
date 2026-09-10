import './Modal.css'

function ConfirmModal({ open, title, message, confirmLabel = 'Confirm', onCancel, onConfirm }) {
  if (!open) return null

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onCancel}>
      <section className="confirm-modal" role="dialog" aria-modal="true" aria-labelledby="confirm-modal-title" onMouseDown={(event) => event.stopPropagation()}>
        <div className="confirm-modal__icon" aria-hidden="true">!</div>
        <p className="modal-popup__eyebrow">Please confirm</p>
        <h2 id="confirm-modal-title">{title}</h2>
        <p className="confirm-modal__message">{message}</p>
        <div className="confirm-modal__actions">
          <button type="button" className="modal-button modal-button--quiet" onClick={onCancel}>Cancel</button>
          <button type="button" className="modal-button modal-button--danger" onClick={onConfirm}>{confirmLabel}</button>
        </div>
      </section>
    </div>
  )
}

export default ConfirmModal
