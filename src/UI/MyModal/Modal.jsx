import React from "react";
import style from "./MyModal.module.css";

const Modal = ({ modal, book, onClose }) => {
  if (!modal) {
    return null;
  }
  return (
    <div className={style.modalContainer}>
      <div className={style.myModal}>
        <img src="./images/close.png" className={style.close} onClick={onClose} />
        <a href={book.volumeInfo.previewLink}>
          <img
            src={
              book.volumeInfo.imageLinks &&
              book.volumeInfo.imageLinks.smallThumbnail
            }
            alt="book img"
            className={style.heroImg}
          />
        </a>
        <h1>{book.volumeInfo.title}</h1>
        <h2>{book.volumeInfo.authors}</h2>
        <p>{book.volumeInfo.description}</p>
      </div>
    </div>
  );
};
export default Modal;
