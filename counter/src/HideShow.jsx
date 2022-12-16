import React, { useState } from 'react'

function HideShow() {

    const [show, setShow] = useState(true)

    const handleHide = ()=> {
        setShow(false)
    }

    const handleShow = ()=> {
        setShow(true)
    }
    console.log(show);


    return (
        <>
            <button onClick={handleHide}>Hide</button>
            <button onClick={handleShow}>Show</button>
            {
                show && (
                    <div style={{ width: "300px", height: "300px", backgroundColor: "red", marginTop: "30px" }}></div>
                )
            }

        </>
    )
}

export default HideShow