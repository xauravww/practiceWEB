import React from "react"
import ReactDOM from "react-dom/client"

// import App from "./App"
import "./index.css"

//prop

const firstBook = {
  title: "The Power of Your Subconscious Mind",
  author: "Joseph Murphy",
  img: "https://cdn.kobo.com/book-images/6f3cf06c-4811-42d4-bd63-564c8264bc2d/1200/1200/False/the-power-of-your-subconscious-mind-57.jpg"
}

const secondBook = {
  title: "Think And Grow Rich [Original Edition",
  author: "Napoleon Hill",
  img: "https://images-eu.ssl-images-amazon.com/images/I/61B84NiWabL._AC_UL900_SR900,600_.jpg"
}

function BookList() {
  return (
    <>
      <section className="bookList">
        <Book
          title={firstBook.title}
          author={firstBook.author}
          img={firstBook.img}
        />
        <Book
          title={secondBook.title}
          author={secondBook.author}
          img={secondBook.img}
        />
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<BookList />)

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  )
}
