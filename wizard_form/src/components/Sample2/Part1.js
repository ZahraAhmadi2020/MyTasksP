import React,{useState} from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {HiEye} from 'react-icons/hi'
import $ from 'jquery'



const Part1 = ({ setPage }) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessageUserName, setErrorMessageUserName] = useState('');
  const [errorMessagePass, setErrorMessagePass] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  var upperCase = /[A-Z]/g;
  var numbers = /[0-9]/g;
  var name ="Zahra_Ahmadi"
  var pass = '002zahrA021'

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value)
     setFormIsValid(
      e.target.value.includes(name) && password.trim().length > 8
    );
    if (userName.length < 5 || !userName.match(upperCase)) {
      setErrorMessageUserName(`${' نام کاربری باید بیشتر از ۵ حرف باشد.'}${'نوشتن حروف بزرگ الزامیست .'}`)

    }
    else {
      setErrorMessageUserName('')
    }

  }

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value)
    setFormIsValid(
      e.target.value.trim().length > 8 && userName.includes(pass)
      // e.target.value.includes(pass) && password.trim().length > 8
     );

    if (!password.match(upperCase) || !password.match(numbers) || password.length < 8) {
      setErrorMessagePass(`${'نوشتن حروف بزرگ الزامیست .'}${'باید عدد هم وارد کنید .'}${'رمز عبور باید بیشتر از ۸ حرف باشد .'}`)
    }
    else {
      setErrorMessagePass('')
    }

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


  const nextHandler = (e) => {
    e.preventDefault()
    setPage((currPage) => currPage + 1)
    console.log(userName);
    console.log(password);
  }

  const next = () => {
    if (userName.length === 0 || password.length === 0) {
      alert('نام کاربری و رمز عبور را وارد کنید .')
    }
    else {
      return;
    }
  }

  const submit = (e) => {
    e.preventDefault()
    const data = {
      userName: userName,
      password:password
    }
    setPassword('')
    setUserName('')
    console.log(data);

  }

  return (
    <form className='m-4 pt-3' dir='rtl' onSubmit={submit} >
      <Row className='mt-3 h-100'>

        <Col xs={12} md={12} lg={12} className='inputCol'>
          <label className="label1 text-muted">نام کاربری</label>
          <Row>
            <Col xs={4} md={8} lg={12}  >
              <input
                key='username'
                id='userName'
                type='text' className="input border-0 mt-n3 m-2 p-1"
                value={userName} name='userName'
                onChange={userNameChangeHandler}
                // onBlur={validateUserName}
                minLength='5'
                maxLength='13'
          />
           </Col>
        </Row>
        </Col>

        <div className='mt-1'
          style={{ color: "red" }}>{errorMessageUserName}
        </div>
      </Row>
      <Row className='mt-4 ' >
        <Col className='inputCol'>
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
                maxLength='15'
                minLength='8'
               />
             </Col>
              <Col xs={2} md={2} lg={3}>
                  <span className='showE show-pass'><HiEye/></span>
                </Col>
               </Row>
            </Col>
             <div style = {{ color: "red" }}> {errorMessagePass} </div>
      </Row>
      <Row className='text-center  mt-4 '>
        <Col></Col>
        <Col xs={12} md={8} lg={6}
          onMouseEnter={next}
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
