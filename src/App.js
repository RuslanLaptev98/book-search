import SearchBar from './SearchBar'
import Snippet from './Snippet'
import { useState, useEffect } from 'react'

function App() {
    // Search Input Value
    const [search, setSearch] = useState('')
    const [books, setBooks] = useState([])

    // Pagination
    const [visible, setVisible] = useState(5)
    const loadMoreBooks = () => {
        setVisible((prevValue) => prevValue + 5)
    }
    // Pagination button
    const loadMoreButton = document.getElementById('load-more-button')

    // fetch
    const apiUrl = `http://openlibrary.org/search.json?q=${search}`

    async function fetchApi() {
        try {
            const response = await fetch(apiUrl)
            const data = await response.json()
            setBooks(data.docs)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchApi()
        if (loadMoreButton) {
            loadMoreButton.style.display = 'block'
        }
    }, [search])
    return (
        <div className="App">
            <SearchBar
                onChange={(inputValue) => {
                    setSearch(inputValue)
                }}
            />

            {books.slice(0, visible).map((book) => {
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
            <button id="load-more-button" onClick={loadMoreBooks}>
                Load more books
            </button>
        </div>
    )
}

export default App
