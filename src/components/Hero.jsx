import React from "react";
import "../styles/style.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <h1>Collect your favorite books</h1>
        <p>
          The best place to help you discover and save all your favorite books in
          one place.
        </p>
      </div>
      <div className="hero__right">
        <a href="https://books.google.ru/books/about/The_Da_Vinci_Code.html?id=hbZ0Yfz-NG8C&redir_esc=y"><img src="/images/Davinci.png" /></a>
        <a href="https://books.google.ru/books/about/The_Hitchhiker_s_Guide_to_the_Galaxy_The.html?id=ppLI3zTIhQ4C&redir_esc=y"><img src="/images/Hitch.png" /></a>
        <a href="https://books.google.ru/books/about/Pride_and_Prejudice.html?id=s1gVAAAAYAAJ&redir_esc=y">
          <img src="/images/JaneAusten.png" /></a>


      </div>
    </div>
  );
};

export default Hero;
