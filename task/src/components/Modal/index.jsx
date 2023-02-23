import style from "./style.module.css";

function Modal({ children }) {
  return (
    <>
      <dialog open className={style.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
