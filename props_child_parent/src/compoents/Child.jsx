import React from 'react'



const Child = ({value}) => {
    
  return (
    <div>
        <button onClick={()=>value(1)}>click me </button>
    </div>
  )
}

export default Child