import React, { useState } from 'react'
import Child from './Child'

const Parents = () => {
    const [count , setCount] =useState(0)
  return (
    <div>
        <p>Count: </p>
        <p>
            {count}
        </p>
        <Child value ={setCount}/>
    </div>
  )
}

export default Parents