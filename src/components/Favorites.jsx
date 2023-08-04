import React from "react";
import "../styles/favorites.css";

const Favorites = ({ favorites, onRemoveFromFavorites, onCloseFavorites }) => {
  return (
    <div className="favorites__modal">
      <h2>My favorite books</h2>
      <div className="favorites__container">
        <img onClick={onCloseFavorites} src="./images/close.png" className="close-btn fav" />
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
                <div className="book-info">
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
