import React from 'react'

export default function SearchBar() {
    return (
        <div id="SearchBar">
            <input
                type="text"
                id="search-input"
                placeholder="Book name or author..."
            />
            <button id="search-button">Search</button>
        </div>
    )
}
