import React from "react"
import ReactDOM from "react-dom/client"

// import App from "./App"
import "./index.css"
function BookList() {
  return (
    <>
      <AboutProject />
      <section className="bookList">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<BookList />)

//explicitly creating elements
const AboutProject = () => {
  return React.createElement("h1", {}, "BookList Project ")
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => {
  return (
    <img
      src="https://cdn.kobo.com/book-images/6f3cf06c-4811-42d4-bd63-564c8264bc2d/1200/1200/False/the-power-of-your-subconscious-mind-57.jpg"
      alt=""
    />
  )
}

const Title = () => {
  return (
    <h1 style={{ fontSize: "1.5rem", color: "#fe4345" }}>
      The Power of Your Subconscious Mind
    </h1>
  )
}

const Author = () => {
  return <div>Joseph Murphy</div>
}
