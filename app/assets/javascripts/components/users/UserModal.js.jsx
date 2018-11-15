const UserModal = ({ handleClose, show, children }) => {
  const showMe = show? "modal slide-modal-show" : "modal slide-modal-hide";
  return (
    <div className={showMe} onClick={() => {handleClose()}}>
      <section className="userModal-main" onClick={(e) => {e.stopPropagation()}}>
        <div className="userModal-top-row">
          <div className="x-close-button" onClick={() => {handleClose()}}>x</div>
        </div>
        {children}
      </section>
    </div>
  );
};
