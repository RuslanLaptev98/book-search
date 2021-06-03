import SearchBar from './SearchBar'
import Snippet from './Snippet'
import { useState } from 'react'

function App() {
    const [search, setSearch] = useState('')
    return (
        <div className="App">
            <SearchBar onChange={(inputValue) => setSearch(inputValue)} />
            <Snippet />
        </div>
    )
}

export default App
