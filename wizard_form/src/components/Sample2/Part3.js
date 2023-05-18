 import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 const Part3 = () => {
   return(
    <Row>
      <Col></Col>
      <Col xs={12} md={8} lg={8} className='p-1 m-3' style={{
        boxShadow: ' 0 0 20px 20px rgba(2, 243, 231, 0.6)',
      background:'rgba(87, 242, 98, 0.6)'}}>Done</Col>
      <Col></Col>
    </Row>
  )
 }

 export default Part3
