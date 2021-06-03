import React from 'react'
import './modal.css'

const Modal = ({ active, setActive }) => {
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
                    <p className="book-title">Crime and Punishment</p>
                    <p className="book">Fyodor Dostoevsky</p>
                </div>
                <div className="modal-cover">Modal cover</div>
                <div className="modal-info">
                    <p className="book">Published: 1866</p>
                    <p className="book">Publisher: Publisher name</p>
                    <p className="book">ISBN: isbn</p>
                </div>
            </div>
        </div>
    )
}

export default Modal
