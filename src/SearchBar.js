import React from 'react'

export default function SearchBar(props) {
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
                onClick={() =>
                    props.onChange(
                        document.getElementById('search-input').value
                    )
                }
            >
                Search
            </button>
        </div>
    )
}
