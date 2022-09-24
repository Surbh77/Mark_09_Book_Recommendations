import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [books, setbooks] = useState([
    ["Book Name", "rating"],
    ["Book Name", "rating"]
  ]);
  // books = [["", ""],["", ""]];
  var booksdict = {
    Javascript: [
      ["Eloquent JavaScript", "4/5"],
      ["You Don't know JS", "3.5/5"]
    ],
    Fiction: [
      ["Shiv Trilogy", "5/5"],
      ["Harry Potter", "4.5/5"]
    ],
    Business: [
      ["Never Split the difference", "3.5/5"],
      ["Loonshots", "5/5"]
    ]
  };
  var bookslist = Object.keys(booksdict);

  function clickhandler(item) {
    var books = booksdict[item];
    console.log(books);
    setbooks(books);
  }
  return (
    <div className="App container-left">
      <h1 className="heading">
        <span>{"📚"} </span> My Favorite Books
      </h1>
      <p>Checkout my favorite books. Select a genre to get started.</p>
      {/* <button >JavaScript</button> */}
      <div>
        {bookslist.map(function (item) {
          return (
            <button
              className="button"
              key={item}
              onClick={() => clickhandler(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <hr></hr>
      <ul>
        <li className="books">
          <div>{books[0][0]}</div>
          <div>{books[0][1]}</div>
        </li>
        <li className="books">
          <div>{books[1][0]}</div>
          <div>{books[1][1]}</div>
        </li>
      </ul>
    </div>
  );
}
