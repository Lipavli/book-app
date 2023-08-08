import React from "react";
import styles from "../styles/Favorites.module.css";

const Favorites = ({ favorites, onRemoveFromFavorites, onCloseFavorites }) => {
  return (
    <div className={styles.favorites__modal}>
      <h2>My favorite books</h2>
      <div className={styles.favorites__container}>
        <img onClick={onCloseFavorites} src="./images/close.png" className={styles.closeBtnFav}/>
        <ul>
          {favorites.map((book) => {
            return (
              <li key={book.id}>
                <img
                  src={
                    book.volumeInfo.imageLinks &&
                    book.volumeInfo.imageLinks.smallThumbnail
                  } className="book-img"
                />
                <div className={styles.bookInfo}>
                  <a href={book.volumeInfo.previewLink}><h3>{book.volumeInfo.title}</h3></a>
                  <h4>{book.volumeInfo.authors}</h4>
                  <button onClick={() => onRemoveFromFavorites(book.id)}>Remove</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Favorites;
