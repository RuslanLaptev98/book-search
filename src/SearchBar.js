import React from 'react'

export default function SearchBar(props) {
    const input = document.getElementById('search-input')
    return (
        <div id="SearchBar">
            <input
                type="text"
                id="search-input"
                placeholder="Book name or author..."
                onChange={(e) => props.onChange(e.target.value)}
            />
            <button
                id="search-button"
                onClick={(e) => {
                    console.log(input.value)
                    props.onChange(input.value)
                }}
            >
                Search
            </button>
        </div>
    )
}
