import React from 'react'

const Card = (props) => {
    console.log(props.data);
  return (
    <>
        <div>{props.data.name}</div>
    <div>{props.data.price}</div>
    </>

  )
}

export default Card