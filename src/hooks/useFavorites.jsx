import React, {useState} from "react";

const useFavorites = () => {
    const [favorites, setFavorites] = useState([]); 
    const [showFavorites, setShowFavorites] = useState(false);

    const addToFavorites = (book) => {
        setFavorites((prevFav) => [...prevFav, book]);
      };
      const removeFromFavorites = (id) => {
        setFavorites((prevFav) => prevFav.filter((book) => book.id !== id));
      };
    
      const openFavorites = () => {
        setShowFavorites(true);
      };
      const closeFavorites = () => {
        setShowFavorites(false);
      };

      return{
        favorites,
        showFavorites,
        addToFavorites,
        removeFromFavorites,
        openFavorites,
        closeFavorites
      }
}

export default useFavorites;