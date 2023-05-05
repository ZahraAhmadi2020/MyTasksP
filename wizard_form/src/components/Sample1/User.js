import React,{useState} from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {HiEyeOff,HiEye} from 'react-icons/hi'

const User = ({formData, nextHandler,setFormData,setPage,pag}) => {

  const [errors, setErrors] = useState({});


  const [isShow, setIsShow] = useState(false);


 const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/




  return (
    <form className='m-4' dir='rtl'>
      <div className='mt-3'>

        <label className="label1 float-md-end position-relative bg-white text-muted">نام کاربری</label>
        <input
            pattern= "^[A-Za-z0-9]{4,20}$"
          required
          type='text' className="form-control mt-n3" id='userName' value={formData.userName || ''} name='userName'
          onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
        />

        {errors && formData.userName.length <= 0 ? <p style={{ color: 'red' }}> نام کاربری خود را وارد کنید .</p> : ''}


      </div>
      <div className='mt-3'>
        <label className="label2 float-md-end position-relative  bg-white text-muted"> رمز عبور</label>
        <input
          type={isShow ? "text" : "password"} className="form-control mt-n3" value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <button className='btn position-relative' style={{fontSize:'20px' , background:'none',float:'left',bottom:'2.7rem'}}
          title={isShow ? "Hide password" : "Show password"}

          onClick={(e) => {
            e.preventDefault()
            setIsShow(prevState => !prevState)
          }
        }
        >
          {isShow ? <HiEyeOff/> : <HiEye/>}
        </button>

        {errors && formData.password <= 0 ? <p style={{ color: 'red' }}> رمز عبور خود را وارد کنید . </p> :
       errors && !password_pattern.test(formData.password) ? <p style={{ color: 'red' }}> رمز عبور قابل قبول نمیباشد .</p> :''}

      </div>
      <Row className='text-center  mt-4 '>
        <Col></Col>
        <Col xs={12} md={8} lg={6}>
          <button type='submit' disabled={!formData.userName || !formData.password} className='btn btn-success w-100'
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

