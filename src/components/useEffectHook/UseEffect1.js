import React, { useState } from 'react'
import  { useEffect } from 'react'

export const UseEffect1 = () => {
    const [count, setcount] = useState(0)
    useEffect(() => {
        if(count>=1){
            document.title = `chats (${count})`
        }
        else{
            document.title = `chats`
        }
    })    

  return (
    <div>
        <h1>{count}</h1>
        <button className='btn' onClick={()=>{
            setcount(count+1)
        }}>Click😉</button>
    </div>
  )
}

export default UseEffect1;
