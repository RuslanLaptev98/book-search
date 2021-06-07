import React, { useState } from 'react'
import Modal from './Modal'

export default function Snippet({
    title,
    author,
    firstPublished,
    publisher,
    isbn,
    cover,
}) {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div>
            <div id="Snippet" onClick={() => setModalActive(true)}>
                <div className="snippet-title">
                    <p className="book-title">{title}</p>
                    <p className="book">{author}</p>
                </div>
                <div className="snippet-cover">
                    <img
                        className="img-snippet-cover"
                        src={cover}
                        alt="no cover available"
                    />
                </div>
            </div>
            <Modal
                active={modalActive}
                setActive={setModalActive}
                title={title}
                author={author}
                firstPublished={firstPublished}
                publisher={publisher}
                isbn={isbn}
                cover={cover}
            />
        </div>
    )
}
