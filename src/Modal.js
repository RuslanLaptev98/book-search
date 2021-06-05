import React from 'react'
import './modal.css'

const Modal = ({
    active,
    setActive,
    title,
    author,
    firstPublished,
    publisher,
    isbn,
    cover,
}) => {
    return (
        <div
            className={active ? 'modal active' : 'modal'}
            onClick={() => setActive(false)}
        >
            <div
                className="modal__content"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-title">
                    <p className="book-title">{title}</p>
                    <p className="book">{author}</p>
                </div>
                <div className="modal-cover">{cover}</div>
                <div className="modal-info">
                    <p className="book">First Published: {firstPublished}</p>
                    <p className="book">Publisher: {publisher}</p>
                    <p className="book">ISBN: {isbn}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal
