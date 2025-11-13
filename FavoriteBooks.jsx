import React, {useState} from 'react'

const FavoriteBooks = () => {
const [bookList, setFavoriteBookList] = useState([ 
    {id: 1, title: "One Dark Window", rating: "4.2" },
    {id: 2, title: "Two Twisted Crowns", rating: "4.0" },
    {id: 3, title: "The Knight and the Moth", rating: "4.5" },
])

const addBookstoList= (book) => {
    setFavoriteBookList([...bookList, book])
}

const removeBooksFromList= (id) => {
    const removal= bookList.filter((book)=> book.id !== id)
    setFavoriteBookList(removal)
}

const removeAllBooks= () => {
    setFavoriteBookList([])
}

  return (
    <>
    <h1> Favorite Books </h1>
    <ul>
        {bookList.map((book)=> (
        <li key={book.id}>
            Book Name: {book.title} Book Rating: {book.rating} 
        <button onClick={()=> removeBooksFromList(book.id)}> Remove</button> 
            </li>
        ))}
    </ul>
    <button onClick={()=>addBookstoList({id: 4, title: "A Court of Thorns and Roses", rating: "5"})}> Add </button>
    <button onClick={()=> removeAllBooks()}> Clear All </button>
    </>
  )
}

export default FavoriteBooks