const Modal = ({ handleClose, show, children }) => {
  const showMe = show? "modal display-block" : "modal display-none";
  return (
    <div className={showMe} onClick={() => {handleClose()}}>
      <section className="modal-main" onClick={(e) => {e.stopPropagation()}}>
        <div className="modal-top-row">
          <div className="x-close-button" onClick={() => {handleClose()}}>x</div>
        </div>
        {children}
      </section>
    </div>
  );
};