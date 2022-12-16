import React, {useState} from 'react'

function Counter() {
    const [num, setNum] = useState(1)

    const decrease = ()=> {
      if(num>0){
        setNum(num -1)
  
      }
    }
  
    const increase = ()=> {
      setNum(num+1)
    }
  
  
    return (
      <div className="App">
        <span style={{cursor: "pointer"}} onClick={decrease}>-</span>
        <span>{num}</span>
        <span style={{cursor: "pointer"}} onClick={increase}>+</span>
      </div>
    );
}

export default Counter