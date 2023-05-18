import React,{useState} from 'react'
import Card from '../UI/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3'

const Form = () => {

const [page, setPage] = useState(0)

  const formTitles = ['Sign In', 'Verify', '']

//  for showing pages
  const pageInfo = () => {
    if (page === 0) {
      return <Part1  page={page} setPage={setPage}   />
    }
    else if (page === 1) {
      return <Part2  setPage={setPage} />
    }
    else{
      return <Part3 setPage={setPage}/>
    }
  }


  return (
    <Container>
      <Row>
        <Col   md={2}  xl={4}></Col>

        <Col className='back' xs={10} md={8} xl={4}  >
          <div className='p-1 mt-3'>
            <Row>
            <Col xs={12} md={8} xl={6} className='progressBar mt-3 mb-4'
            style={{
                width: page === 0 ? '33.3%' : page === 1 ? '66.6%' : '100%',height:'2vh',
                background:'rgb(98, 6, 228)',borderRadius:'10px'
              }}>

            </Col>

          </Row>

          <Row>
            <Card>
              <Col xs={12} md={12} lg={12}>
                {/* header */}
                <header className='text-center mt-4'>
                  {formTitles[page]}
                </header>
                {/* main page and forms */}
                  <Row>
                    <Col className='form' xs={12} md={12} lg={12}>
                       {pageInfo()}
                    </Col>
                </Row>
             </Col>
            </Card>
          </Row>
          </div>
        </Col>

        <Col   md={2} xl={4}></Col>
      </Row>
    </Container>
  )}

export default Form
