import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import useInput from '../../hooks/use-input';

const Part2= ({setPage}) => {

  const {
    value: code,
    isValid: codeIsValid,
    hasError: codeHasError,
    valueChangeHandler: codeChangeHandler,
    inputBlurHandler: codeBlurHandler,
    reset:codeReset
   }=useInput(value=> value !== '' && value.length >= 4)

  let formIsValid = false;
  if (codeIsValid) {
    formIsValid=true
  }
  // var PCode = '2255'



  const nextSubHandler = (e) => {
    e.preventDefault()
    setPage((currPage) => currPage + 1)
    console.log(code);
  }
  const prev = (e) => {
    e.preventDefault()
     setPage((currPage) => currPage - 1)
  }
  const submitCode = (e) => {
    e.preventDefault()
     codeReset()

  }
  return (
    <form className='codeP m-4 pt-4' onSubmit={submitCode}>
      <Row>
        <Col>
          <input className='codeInput' maxLength='4' required size="10"
            onBlur={codeBlurHandler}
            style={{ color: codeIsValid === false ? 'red' : ' blue' }}
            onChange={codeChangeHandler}
            value={code}
          />

          {codeIsValid === false ? <p className='text-danger'>wrong number</p> :''}
         </Col>
      </Row>
      <Row className='text-center mt-5 '>
        <Col xs={12} md={6} lg={6}>
          <button className='btn btn-primary mb-2 w-100'
            onClick={prev}>Prev</button>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <button
            disabled={!formIsValid}
            className='btn btn-success w-100'
            onClick={nextSubHandler} >Submit</button>
        </Col>
      </Row>
     </form>
  )
}

export default Part2
