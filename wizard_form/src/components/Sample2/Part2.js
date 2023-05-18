import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Part2= ({setPage}) => {
   const[payamakCode,setPayamakCode]=useState('')
  const [codeValid, setCodeValid] = useState('0945')
  const[codeSum,setCodeSub]=useState(false)
  // const[errorCode,setErroeCode]=useState('')


  var PCode = '2255'
  const pCodeChangeHandler = (e) => {
    setPayamakCode(e.target.value)
    setCodeSub(e.target.value.includes(PCode) && payamakCode.trim().length > 2)


  }

  const codeValidate = () => {
      setCodeValid(payamakCode.trim().length >3 )
  }
  const nextSubHandler = (e) => {
    e.preventDefault()
    setPage((currPage) => currPage + 1)
    console.log(payamakCode);
  }
  const prev = (e) => {
    e.preventDefault()
     setPage((currPage) => currPage - 1)
  }
  const submitCode = (e) => {
    e.preventDefault()
    setPayamakCode('')
    // console.log(payamakCode);
    const dataCode={payamakCode:payamakCode}
    console.log(dataCode);
  }
  return (
    <form className='codeP m-4 pt-4' onSubmit={submitCode}>
      <Row>
        <Col>
          <input className='codeInput' maxLength='4' required size="10"
            onBlur={codeValidate}
            style={{ color: codeValid === false ? 'red' : ' blue' }}
            onChange={pCodeChangeHandler}
            value={payamakCode}
          />

          {codeValid === false ? <p className='text-danger'>wrong number</p> :''}
         </Col>
      </Row>
      <Row className='text-center mt-5 '>
        <Col xs={12} md={6} lg={6}>
          <button className='btn btn-primary mb-2 w-100'
            onClick={prev}>Prev</button>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <button
            disabled={!codeSum}
            className='btn btn-success w-100'
            onClick={nextSubHandler} >Submit</button>
        </Col>
      </Row>
     </form>
  )
}

export default Part2
