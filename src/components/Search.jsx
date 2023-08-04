import React, { useState } from "react";
import "../styles/style.css";
import axios from "axios";
import MyButton from "../UI/MyButton/MyButton";
import BookList from "./BookList";

const Search = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  
  function searchBook() {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          search +
          "&key=AIzaSyDEmuwmgJ6BV9vHSq7DhV8uJjxZkTI9qBw" +
          "&maxResults=24"
      )
      .then((response) => setBookData(response.data.items))
      .catch((error) => console.log(error));
  }

  return (
    <>
      <input
        type="text"
        placeholder="Find your book"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <MyButton onClick={searchBook}>Search</MyButton>
      <BookList books={bookData} />
    </>
  );
};

export default Search;
