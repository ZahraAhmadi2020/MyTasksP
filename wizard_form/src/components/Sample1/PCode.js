import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PCode = ({ setPage}) => {
  const[payamakCode,setPayamakCode]=useState('')
  // const [errors, setErrors] = useState({});
  const [codeValid, setCodeValid] = useState('0945')
  const[codeSum,setCodeSub]=useState(false)
  const[errorCode,setErroeCode]=useState('')


  var PCode = '2255'
  // var code= /^[0-9\b]+$/
  const pCodeChangeHandler = (e) => {
    setPayamakCode(e.target.value)

    setCodeSub( e.target.value.trim()  > 2 && payamakCode.includes(PCode))

    if (!payamakCode.match(PCode)) {
      setErroeCode('کد وارد شده صحیح نمیباشد.')
    }
    else {
      setErroeCode('')
    }

  }

  const codeValidate = () => {
      setCodeValid(payamakCode.trim().length === 4 )
  }

  const submitCode = (e) => {
    e.preventDefault()
    setPayamakCode('')
  }
  return (
    <form className='codeP m-4 pt-4' onSubmit={submitCode}>
      {/* <div>
        <label className="label1 float-md-end position-relative bg-white text-muted">کد پیامکی</label>
      <input className="form-control mt-n3" type='number' value={payamakCode}
        onChange={pCodeChangeHandler} required minLength={6}
        />
       {errors && payamakCode.length <= 0 ? <p style={{ color: 'red' }}> نام کاربری خود را وارد کنید .</p> : ''}

      </div> */}

      {/* <Row className='text-center'>
        <Col xs={2} md={2} lg={2}>
          <input type='number' className='p-2' minLength={4} required/>

        </Col>
        <Col xs={2} md={2} lg={2}>
          <input type='number' className='p-2' minLength={4} required/>

        </Col>
        <Col xs={2} md={2} lg={2}>
          <input type='number' className='p-2' minLength={4} required/>

        </Col>
        <Col xs={2} md={2} lg={2}>
          <input type='number' className='p-2' minLength={4} required/>

        </Col>
      </Row> */}

      <Row>
        <Col>
          {/* <input type='number' className='p-2'
            // minLength={4} required
            onBlur={codeValidate}
            style={{ borderColor: codeValid === false ? 'red' : ' ' }}
            onChange={pCodeChangeHandler}
          /> */}

          <input className='codeInput' maxLength='4' required size="10"

            // pattern=' /^[0-9\b]+$/'
            onBlur={codeValidate}
            style={{ color: codeValid === false ? 'red' : ' blue' }}
            onChange={pCodeChangeHandler}
          />
          <div className='mt-1' style = {{ color: "red" }}> {errorCode} </div>

          {codeValid === false ? <p className='text-danger'>کد ۴ رقمی را وارد کنید  </p> : ''}

        </Col>
      </Row>


      <Row className='text-center mt-5 '>

        <Col xs={12} md={6} lg={6}>
          <button className='btn btn-primary mb-2 w-100'
            onClick={(e) => {
              e.preventDefault()
              setPage((currPage) => currPage - 1)
            }}>Prev</button>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <button
            disabled={!codeSum}
            className='btn btn-success w-100' onClick={(e) => {
            e.preventDefault()
            // alert('Form submitted')
            // console.log(formData);
              setPage((currPage) => currPage + 1)
            }} >Submit</button>
        </Col>
      </Row>


     </form>
  )
}

export default PCode




