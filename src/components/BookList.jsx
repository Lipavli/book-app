import React, { useState } from "react";
import Modal from "../UI/MyModal/Modal";
import styles from "../styles/Card.module.css";
import BookItem from "./BookItem";
import Favorites from "./Favorites";
// import useFavorites from "../hooks/useFavorites";
import { useFavoriteContext } from "../context/appContext";


const BookList = ({ books }) => {

  const {
    favorites,
    addToFavorites,
    removeFromFavorites
  } = useFavoriteContext ();
  
  return (
    <div className={styles.cardContainer}>
      {books.map((book) => {
        return (
          <BookItem
            book={book}
            key={book.id}
            isFavorite={favorites.includes(book)}
            onAddToFavorites={addToFavorites}
            onRemoveFromFavorites={removeFromFavorites}
          />
        );
      })}
 
    </div>
  );
};

export default BookList;
