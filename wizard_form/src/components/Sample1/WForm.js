import React, { useState } from 'react'
import Card from '../UI/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import PCode from './PCode';
import User from './User';
import Other from './Other';




const WForm = () => {
  const [page, setPage] = useState(0)

  const [formData, setFormData] = useState({

    userName: '',
    password: '',
    codePayamak:''
  })


  const formTitles = ['Sign In', '', '']









//  for showing pages
  const pageInfo = () => {
    if (page === 0) {
      return <User  page={page} setPage={setPage} formData={formData} setFormData={setFormData}/>
    }
    else if (page === 1) {
      return <PCode formData={formData} setFormData={setFormData} setPage={setPage} />
    }
    else{
      return <Other />
    }
  }


// const submitForm = (e) => {
//     e.preventDefault();

//     // if (formData.userName.length == 0 || formData.password.length == 0) {
//     //   setErrors(true)
//     // }

//     const data = {
//       userName: formData.userName,
//       passsword:formData.passsword

//     }
//     console.log(data);
//     setFormData('')




//   }


  return (
    <Container>
      <Row>
        <Col xs={2} md={2}  xl={4}></Col>

        <Col className='back' xs={12} md={8} xl={4}  >
          <div className='p-1 text-center'>
            <Row>
            <Col xs={12} md={8} xl={6} className='progressBar mt-3 mb-4'
            style={{
                width: page === 0 ? '33.3%' : page == 1 ? '66.6%' : '100%',height:'2vh',
                background:'rgb(98, 6, 228)',borderRadius:'10px'
              }}>

            </Col>

          </Row>

          <Row>
            <Card>
              <div>
                {/* header */}
                <header className='text-center mt-2'>
                  {formTitles[page]}
                </header>
                {/* main page and forms */}
                <form >{pageInfo()}</form>

                {/* buttons */}
               {/* <footer className='m-5 text-center'>
                  <Row>
                   <Col xs={12} md={6} xl={6}>
                    {/* <button className='btn btn-primary mb-3' onClick={prevHandler}
                        style={{ display: page === 0 ? 'none' : page == 1 ? 'block' : 'none' ,width:'100%'}}> Prev</button> */}
                    {/* </Col> */}

                   {/* <Col xs={12} md={6} xl={6}> */}
                      {/* <button
                        className='btn btn-success mb-3' disabled={page == formTitles.length - 1}
                     style={{display: page === 2 ? 'none' : page == 0 ? 'inline-block' : 'Submit',width:'100%'}}
                     onClick={nextHandler}>
                     {page === formTitles.length - 2 ? 'Submit' : 'Next'}

                    </button> */}
                    {/* </Col>
                  </Row> */}
              {/* </footer> */}
             </div>
            </Card>
          </Row>
          </div>
        </Col>

        <Col xs={2} md={2} xl={4}></Col>
      </Row>





    </Container>
  )
}

export default WForm



