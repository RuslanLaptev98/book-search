import React, { useState } from 'react'
import Modal from './Modal'

export default function Snippet() {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div>
            <div id="Snippet" onClick={() => setModalActive(true)}>
                <div className="snippet-title">
                    <p className="book-title">Crime and Punishment</p>
                    <p className="book">Fyodor Dostoevsky</p>
                </div>
                <div className="snippet-cover">Book Cover</div>
            </div>
            <Modal active={modalActive} setActive={setModalActive} />
        </div>
    )
}
