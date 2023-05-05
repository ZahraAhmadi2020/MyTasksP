import React from 'react'
import { Col } from 'react-bootstrap'

const Card = (props) => {
  return (
    <div className='card text-center'>{props.children}</div>
  )
}

export default Card
