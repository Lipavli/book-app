import React, { useState } from "react";
import styles from "../styles/Card.module.css";
import Modal from "../UI/MyModal/Modal";

const BookItem = ({ book, onAddToFavorites, isFavorite, onRemoveFromFavorites }) => {
  const [bookItem, setBookItem] = useState();
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className={styles.myCard}>
        <img
          src={
            book.volumeInfo.imageLinks &&
            book.volumeInfo.imageLinks.smallThumbnail
          }
          onClick={() => {
            setModal(true);
            setBookItem(book);
          }}
        />
        <h3>{book.volumeInfo.title}</h3>
        <h4>{book.volumeInfo.authors}</h4>
        {isFavorite ? (
          
          <img src="/images/added.png" className={styles.add} onClick={() => onRemoveFromFavorites(book.id)}/>
        ) : (
          <img src="/images/add.png" className={styles.add} onClick={() => onAddToFavorites(book)}/>
        )}
      </div>
      <Modal modal={modal} book={bookItem} onClose={() => setModal(false)} />
    </>
  );
};
export default BookItem;
