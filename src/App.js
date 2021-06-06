import SearchBar from './SearchBar'
import Snippet from './Snippet'
import { useState, useEffect } from 'react'

function App() {
    let bookArray = []
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
    let key = ''

    // delay
    let timer = null
    const delay = () => {
        return new Promise((resolve) => {
            timer = setTimeout(() => resolve(), 1000)
        })
    }
    // fetch
    const apiUrl = `http://openlibrary.org/search.json?q=${search}`

    async function fetchApi() {
        try {
            //clearTimeout(timer)
            //await delay()
            const response = await fetch(apiUrl)
            const data = await response.json()
            setBooks(data.docs)
            console.log(books)
            // assigning states and creating new array of objects
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

            {books.slice(0, 10).map((book) => {
                console.log(book)
                return (
                    <Snippet
                        key={book.key}
                        title={book.title ? book.title : 'unknown'}
                        author={
                            book.author_name ? book.author_name[0] : 'unknown'
                        }
                        firstPublished={
                            book.first_publish_year
                                ? book.first_publish_year
                                : 'unknown'
                        }
                        publisher={
                            book.publisher ? book.publisher[0] : 'unknown'
                        }
                        isbn={book.isbn ? book.isbn[0] : 'unknown'}
                        cover={
                            book.isbn
                                ? 'http://covers.openlibrary.org/b/isbn/' +
                                  book.isbn[0] +
                                  '-M.jpg'
                                : ''
                        }
                    />
                )
            })}
        </div>
    )
}

export default App
