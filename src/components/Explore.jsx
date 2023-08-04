import React, { useState } from "react";
import cl from '../styles/Explore.module.css'

const Explore = () => {
  const [explore, setExplore] = useState([
    { id: 1, title: 'The Little Prince', author: 'Charles Dickens', img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1367545443i/157993.jpg', link: 'https://www.goodreads.com/book/show/157993.The_Little_Prince?from_search=true&from_srp=true&qid=1plTKaf95c&rank=1' },
    { id: 2, title: 'Dream of the Red Chamber', author: 'Cao Xueqin', img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1645905884i/535739.jpg', link: 'https://www.goodreads.com/book/show/535739.Dream_of_the_Red_Chamber?from_search=true&from_srp=true&qid=ooolcESpRZ&rank=1' },
    { id: 3, title: 'The Hobbit', author: 'J. R. R. Tolkien', img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg', link: 'https://www.goodreads.com/book/show/5907.The_Hobbit?from_search=true&from_srp=true&qid=HEBbnljJOM&rank=1' },
    { id: 4, title: 'The Alchemist', author: 'Paulo Coelho', img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg', link: 'https://www.goodreads.com/book/show/18144590-the-alchemist?from_search=true&from_srp=true&qid=MMf20s6yVo&rank=1' },
    { id: 5, title: 'The Old Man and the Sea', author: 'Ernest Hemingway', img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1329189714i/2165.jpg', link: 'https://www.goodreads.com/book/show/2165.The_Old_Man_and_the_Sea?from_search=true&from_srp=true&qid=LSDM3QG7Vs&rank=1' },
    { id: 6, title: 'To Kill a Mockingbird', author: 'Harper Lee', img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg', link: 'https://www.goodreads.com/book/show/2657.To_Kill_a_Mockingbird?from_search=true&from_srp=true&qid=JeOXWXCCeG&rank=1' },
    { id: 7, title: 'War and peace', author: 'Leo Tolstoy', img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1413215930i/656.jpg', link: 'https://www.goodreads.com/book/show/656.War_and_Peace?from_search=true&from_srp=true&qid=0rJkZxsNlU&rank=1' },
    { id: 8, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1490528560i/4671.jpg', link: 'https://www.goodreads.com/book/show/4671.The_Great_Gatsby?ref=nav_sb_ss_1_13' },
    { id: 9, title: 'Animal farm', author: 'George Orwell', img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1325861570i/170448.jpg', link: 'https://www.goodreads.com/book/show/170448.Animal_Farm?from_search=true&from_srp=true&qid=JmZesBNhge&rank=1' },

  ])
  return (
    <div className={cl.explore}>
      <h1>Explore</h1>
      <div className={cl.explore__box}>
        {explore.map((book) => (
          <div className={cl.explore__item} key={book.id}>
            <a href={book.link}> <img src={book.img} /> </a>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
          </div>
        )
        )}
      </div>
    </div>
  );
};

export default Explore;
