import React, {useState} from 'react'

function Color() {

    const [color, setColor] = useState("black")

    const handleColor = (e) => {
        setColor(e.target.value)
    }



  return (
    <>
        <input type="color" onChange={handleColor}/>
        <div style={{width: "300px", height: "300px", backgroundColor: color, marginTop: "30px"}}></div>
    </>
  )
}

export default Color