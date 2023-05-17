import React,{useState} from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {HiEyeOff,HiEye} from 'react-icons/hi'
import $ from 'jquery'


const User = ({ setPage }) => {

  const [userName, setUserName] = useState('')
  const [userNameValid, setUserNameValid] = useState('')
  const [password, setPassword] = useState('')
  const [passwordValid, setPasswordValid] = useState('')
  const [errorMessageUserName, setErrorMessageUserName] = useState('');
  const [errorMessagePass, setErrorMessagePass] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  // const [isShow, setIsShow] = useState(false);

//  var lowerCase = /[a-z]/g;
  var upperCase = /[A-Z]/g;
  var numbers = /[0-9]/g;
  var name ='ZahraAhmadi'
  var pass='002021zahrA'
  const userNameChangeHandler = (e) => {
    setUserName(e.target.value)

   setFormIsValid(
      e.target.value.includes(name) && password.trim().length > 8
   );
    if (userName.length <= 5 || !userName.match(upperCase)) {
      setErrorMessageUserName(`${' نام کاربری باید بیشتر از ۵ حرف باشد.'}${'نوشتن حروف بزرگ الزامیست .'}`)
      // setErrorMessageUserName('نام کاربری باید بیشتر از ۵ حرف باشد .')
    }
    else if (!userName.match(name)) {
      setErrorMessageUserName('نام کاربری صحیح نمیباشد.')
    }
    // else if (!userName.match(upperCase)) {
    //   setErrorMessageUserName('نوشتن حروف بزرگ الزامیست .')
    // }
    else {
      setErrorMessageUserName('')
    }
    // if (!userName.match(userNameValid)) {
    //   setErrorMessageUserName('wrong name')
    // }

  }

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value)
    setFormIsValid(
      e.target.value.trim().length > 8 && userName.includes(pass)
    );

    if (!password.match(upperCase) || !password.match(numbers) || password.length < 8) {
      setErrorMessagePass(`${'نوشتن حروف بزرگ الزامیست .'}${'باید عدد هم وارد کنید .'}${'رمز عبور باید بیشتر از ۸ حرف باشد .'}`)
      //     setErrorMessagePass('نوشتن حروف بزرگ الزامیست .')
    }
  //      else if (!password.match(numbers)) {
  //        setErrorMessagePass('باید عدد هم وارد کنید .')
  //  }  else if (password.length < 8) {
  //      setErrorMessagePass('رمز عبور باید بیشتر از ۸ حرف باشد .')
  //    }
    else {
      setErrorMessagePass('')
    }

  }

    const validateUserName = () => {
      setUserNameValid(userName.trim().length > 5)
   }
  const validatePass = () => {
    setPasswordValid(password.trim().length > 8)

  }

// show password
    var passField = $('input[type=password]');
  $('.show-pass').hover(function() {
     passField.attr('type', 'text');
  }, function() {
    passField.attr('type', 'password');
  })

  const submit = (e) => {
    e.preventDefault()

    // setUserNameValid('zahraAhmadi')
    // setPasswordValid('002zahrA021')
    setPassword('')
    setUserName('')
  }
  return (
    <form className='m-4 pt-3' dir='rtl' onSubmit={submit}>
      <Row className='mt-3 h-100'>

        <Col xs={12} md={12} lg={12} className='inputCol' style={{ borderColor: userNameValid === false ? 'red' : ' ' }}>
          <label className="label1 text-muted">نام کاربری</label>

          <Row>
            <Col xs={4} md={8} lg={12}  >
              <input
                id='userName'
                type='text' className="input border-0 mt-n3 m-2 p-1"
                value={userName} name='userName'
                onChange={userNameChangeHandler}
                onBlur={validateUserName}
                minLength='5'
                maxLength='15'
          />
           </Col>
        </Row>
        </Col>

        <div className='mt-1' style = {{ color: "red" }}> {errorMessageUserName} </div>

        {userNameValid === false ? <p className='text-danger mt-2'>نام کاربری خود را وارد کنید. </p> : ' '}
      </Row>
      <Row className='mt-4 ' >
        <Col className='inputCol' style={{ borderColor: passwordValid === false ? 'red' : ' ' }}>
          <label className="label2 text-muted"> رمز عبور</label>
          <Row>
              <Col xs={4} md={8} lg={12}>
                 <input
               id='password'
                // type={isShow ? "text" : "password"}
                type='password'
                className="border-0 input mt-n3 p-1 m-2"
                value={password}
                 onChange={passwordChangeHandler}
                onBlur={validatePass}
                maxLength='15'
                minLength='8'
               />
             </Col>
              <Col xs={2} md={2} lg={3}>
                <button className='btn showE show-pass'
                  // title={isShow ? "Hide password" : "Show password"}

                  // onClick={(e) => {
                  //  e.preventDefault()
                  //  setIsShow(!isShow)
                  //    }
                  //  }

              >
                    <HiEye/>
                {/* <i class="show-pass fa fa-eye fa-lg"></i> */}
                   {/* {isShow ? <HiEye/>: <HiEyeOff/> } */}
              </button>
              {/* <HiEye  className='btn showE show-pass'/> */}
                </Col>
               </Row>
            </Col>

        <div style = {{ color: "red" }}> {errorMessagePass} </div>
        {passwordValid === false ? <p className='text-danger'>رمز عبور را وارد کنید . </p> : ''}

        {/* {errors && password <= 0 ? <p style={{ color: 'red' }}> رمز عبور خود را وارد کنید . </p> :
          errors && !password_pattern.test(password) ? <p style={{ color: 'red' }}> رمز عبور قابل قبول نمیباشد .</p> : ''} */}
        {/* {passwordValid === false ? 'red' : ''} */}

      </Row>
      <Row className='text-center  mt-4 '>
        <Col></Col>
        <Col xs={12} md={8} lg={6}>
          <button
            type='submit'
            // disabled={!formIsValid}
            className='btn btn-success w-100'
            onClick={(e) => {
              e.preventDefault()
              setPage((currPage) => currPage + 1)
            }}>Next</button>
        </Col>
        <Col></Col>
      </Row>

    </form>
  )
}

export default User


