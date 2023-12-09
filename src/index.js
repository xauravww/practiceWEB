import React from "react"
import ReactDOM from "react-dom/client"

// import App from "./App"
import "./index.css"
import { title } from "process"

//prop
const books = [
  {
    id: 1,
    title: "The Power of Your Subconscious Mind",
    author: "Joseph Murphy",
    img: "https://cdn.kobo.com/book-images/6f3cf06c-4811-42d4-bd63-564c8264bc2d/1200/1200/False/the-power-of-your-subconscious-mind-57.jpg"
  },
  {
    id: 2,
    title: "Think And Grow Rich [Original Edition",
    author: "Napoleon Hill",
    img: "https://images-eu.ssl-images-amazon.com/images/I/61B84NiWabL._AC_UL900_SR900,600_.jpg"
  },
  {
    id: 3,
    title: "THE 48 LAWS OF POWER",
    author: "Robert Greene",
    img: "https://images-eu.ssl-images-amazon.com/images/I/41cF79iFTHL._AC_UL900_SR900,600_.jpg"
  },
  {
    id: 4,
    title: "Do It Today",
    author: "Darius Foroux",
    img: "https://images-eu.ssl-images-amazon.com/images/I/61jCkOVf1oL._AC_UL900_SR900,600_.jpg"
  }
]

function BookList() {
  return (
    <>
      <section className="bookList">
        {books.map((book) => {
          return <Book key={book.id} {...book}></Book>
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<BookList />)

//event handlers

const easyClickHandler = (e) => {
  console.log(e)
  alert("Hello World")
}

const complexClickHandler = (author) => {
  console.log(author)
}

//component
const Book = (props) => {
  const { img, title, author } = props
  return (
    <article className="book" onMouseOver={(e) => console.log(e.target)}>
      <img src={img} />
      <h1 onClick={() => easyClickHandler()}>{title}</h1>
      <h4>{author}</h4>

      <button type="button" onClick={complexClickHandler(author)}>
        Called on rendering
      </button>
    </article>
  )
}
// calling with and without arrow function
//event.target
//onClick , onMouseOver
