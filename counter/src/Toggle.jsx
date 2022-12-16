import React, { useState } from 'react'

function Toggle() {

    const [show, setShow] = useState(true)

    const handleShow = () => {
        setShow(!show)
    }

    return (
        <>
            <button onClick={handleShow}>{
                show ? "Hide" : "Show"
            }</button>
            {
                show && (
                    <h2>Text</h2>
                )
            }
        </>
    )
}

export default Toggle