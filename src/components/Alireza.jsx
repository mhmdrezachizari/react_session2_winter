import React, { useState } from 'react'
import Styles from './Alireza.module.css'
const Alireza = () => {
  const [count, setcount] = useState(0)
  const increasecahngehandler =()=>{
    setcount(count+1)
  }
  const decreasecahngehandler =()=>{
    if(count>0){
      setcount(count-1)
    }
  }
  return (
    <>
        <button onClick={increasecahngehandler}>+</button>
      <div className={Styles.alireza1}>{count}</div>
      <button onClick={decreasecahngehandler}>-</button>

    </>

  )
}

export default Alireza