import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext(null);

export const useFavoriteContext = () => {
    return useContext(FavoriteContext);
}

export const FavoritesProvider = ({ children }) => {
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

    const contextValue = {
        favorites,
        showFavorites,
        addToFavorites,
        removeFromFavorites,
        openFavorites,
        closeFavorites
    }
    return (
        <FavoriteContext.Provider value={contextValue}>{children}</FavoriteContext.Provider>
    )
}

export default FavoritesProvider;