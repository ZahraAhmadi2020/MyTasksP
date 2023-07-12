import $ from 'jquery';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { HiEye } from 'react-icons/hi';
import useInput from '../../hooks/use-input';


const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const  numbers = /[0-9]/g;
const Part1 = ({ setPage }) => {

  const {
    value: username,
    isValid: usernameIsValid,
    hasError: usernameHasError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset:usernameReset

  } = useInput(value => value !== '' && value.length > 5 )

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordReset

  } = useInput(value => value !== '' && value.length > 8 && value.match(lowerCaseLetters) && value.match(upperCaseLetters) && value.match(numbers));

  let formIsValid = false;
  if (usernameIsValid && passwordIsValid) {
    formIsValid=true
  }






// show password
    var passField = $('input[type=password]');
  $('.show-pass').hover(function (e) {
    e.preventDefault()
     passField.attr('type', 'text');
  }, function (e) {
    e.preventDefault()
    passField.attr('type', 'password');
  })



const nextHandler= async(e) => {
   e.preventDefault()
    setPage((currPage) => currPage + 1)
    console.log(username);
    console.log(password);
  const response =await fetch('https://mywizardform-default-rtdb.firebaseio.com/value.json', {
      method: 'POST',
      body: JSON.stringify({username,password, title: 'Send data' }),
      headers: {
        'Content-Type':'application/json'
      }
    })
    const data =await response.json()
      console.log(data);

}


  const submit = (e) => {
    e.preventDefault()

    if (!usernameIsValid && !passwordIsValid) {
      return;
    }
    console.log(username, password);

    usernameReset()
    passwordReset()


  }

  return (
    <form className='m-4 pt-3' dir='rtl' onSubmit={submit} >
      <Row className='mt-3 h-100'>

        <Col xs={12} md={12} lg={12} className='inputCol'
          style={{ border: usernameHasError ? '2px solid red' : '' }}>
          <label className="label1 text-muted">نام کاربری</label>
          <Row >
            <Col xs={4} md={8} lg={12}  >
              <input
                key='username'
                id='userName'
                type='text' className="input border-0 mt-n3 m-2 p-1"
                value={username} name='userName'
                onChange={usernameChangeHandler}
                onBlur={usernameBlurHandler}
                minLength='5'
                maxLength='13'

              />

            </Col>

          </Row>

        </Col>
        {usernameHasError &&
              (<p className='text-danger'> نام کاربری باید بیشتر از ۵ رقم باشد.</p>
              )}


      </Row>
      <Row className='mt-4 ' >
        <Col className='inputCol'
          style={{ border: passwordHasError ? '2px solid red' : '' }}>
          <label className="label2 text-muted"> رمز عبور</label>
          <Row>
              <Col xs={4} md={8} lg={12}>
              <input
                key='pass'
               id='password'
               type='password'
                className="border-0 input mt-n3 p-1 m-2"
                value={password}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                maxLength='15'
                minLength='8'

               />
             </Col>
              <Col xs={2} md={2} lg={3}>
                  <span className='showE show-pass'><HiEye/></span>
                </Col>
               </Row>
        </Col>
          {passwordHasError &&
              (<p className='text-danger'> رمز عبور باید بیشتر از ۸ رقم بوده و شامل حروف کوچک و بزرگ باشد.</p>)}
             {/* <div style = {{ color: "red" }}> {errorMessagePass} </div> */}
      </Row>
      <Row className='text-center  mt-4 '>
        <Col></Col>
        <Col xs={12} md={8} lg={6}
          // onMouseEnter={next}
        >
          <button
            type='submit'
            disabled={!formIsValid}
            className='btn btn-success w-100'
            onClick={nextHandler}
             >Next</button>
        </Col>
        <Col></Col>
      </Row>

    </form>
  )
}

export default Part1
