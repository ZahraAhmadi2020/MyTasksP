import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PCode = ({ formData,setFormData,setPage}) => {

  const [errors, setErrors] = useState({});



  return (
    <form className='codeP m-4 pt-4'>
      <div>
        <label className="label1 float-md-end position-relative bg-white text-muted">کد پیامکی</label>
      <input className="form-control mt-n3" type='number' value={formData.codePayamak}
        onChange={(e)=>setFormData({...formData,codePayamak:e.target.value})} required minLength={6}
        />
       {errors && formData.codePayamak.length <= 0 ? <p style={{ color: 'red' }}> نام کاربری خود را وارد کنید .</p> : ''}

      </div>
      <Row className='text-center mt-5 '>

        <Col xs={12} md={6} lg={6}>
          <button className='btn btn-primary mb-2 w-100'
            onClick={(e) => {
              e.preventDefault()
              setPage((currPage) => currPage - 1)
            }}>Prev</button>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <button disabled={!formData.codePayamak} className='btn btn-success w-100' onClick={(e) => {
            e.preventDefault()
            // alert('Form submitted')
            console.log(formData);
              setPage((currPage) => currPage + 1)
            }} >Submit</button>
        </Col>
      </Row>


     </form>
  )
}

export default PCode




