import SearchBar from './SearchBar'
import Snippet from './Snippet'
import { useState, useEffect } from 'react'

function App() {
    let bookArray = []
    let i = 0
    // Search Input Value
    const [search, setSearch] = useState('')
    const [books, setBooks] = useState([])

    // Book Properties
    let author = 'Author'
    let title = 'Title'
    let cover = ''
    let publisher = 'Publisher'
    let firstPublished = 'first published'
    let isbn = 'isbn'
    // delay
    const delay = () => {
        return new Promise((resolve) => setTimeout(() => resolve(), 1000))
    }
    // fetch
    const apiUrl = `http://openlibrary.org/search.json?q=${search}`

    async function fetchApi() {
        try {
            //await delay()
            const response = await fetch(apiUrl)
            const data = await response.json()
            // assigning states and creating new array of objects
            let bookObject = {}
            await data.docs.forEach((book) => {
                book.title ? (title = book.title) : (title = 'unknown')
                book.author_name
                    ? (author = book.author_name[0])
                    : (author = 'unknown')
                bookObject.bookTitle = title
                bookObject.bookAuthor = author
                bookArray.push(bookObject)
            })
            console.log(bookArray)
            return
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        console.log('useEffect worked')
        fetchApi()
    }, [search])
    return (
        <div className="App">
            <SearchBar
                onChange={(inputValue) => {
                    setSearch(inputValue)
                }}
            />
            <Snippet
                title={title}
                author={author}
                firstPublished={firstPublished}
                publisher={publisher}
                isbn={isbn}
                cover={cover}
            />

            {bookArray.slice(0, 5).map((book) => {
                console.log(book)
                return (
                    <Snippet
                        title={book.bookTitle}
                        author={book.bookAuthor}
                        firstPublished={firstPublished}
                        publisher={publisher}
                        isbn={isbn}
                        cover={cover}
                    />
                )
            })}
        </div>
    )
}

export default App
