function Modal() {
  return (
    <div
      id="ModalAU"
      className={`modal fade`}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className={`modal-dialog .modal-dialog-centered`}>
        <div className={`modal-content`}>
          <div className={`modal-header`}>
            <h5 className={`modal-title`} id="staticBackdropLabel">
              Modal title
            </h5>
            <button
              type="button"
              className={`btn-close`}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className={`modal-body`}>...</div>
          <div className={`modal-footer`}>
            <button
              type="button"
              className={`btn btn-secondary`}
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className={`btn btn-primary`}>
              Understood
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
