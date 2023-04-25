import React, { useState } from 'react'

const Form = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [id, setId] = useState('');
  const [tel, setTel] = useState('');
  const [age, setAge] = useState('');
  const [size, setSize] = useState('');
  const [weight, setWeight] = useState('');
  const [desc, setDesc] = useState('');
  const [address, setAddress] = useState('');


  const [active, setActive] = useState(false);


  const firstNameChangeHadler = (e) => {
    setFirstName(e.target.value)
  }

  const lastNameChangeHadler = (e) => {
    setLastName(e.target.value)
  }

  const fatherNameChangeHadler = (e) => {
    setFatherName(e.target.value)
  }

  const idChangeHadler = (e) => {
    setId(e.target.value)
  }

  const telChangeHadler = (e) => {
    setTel(e.target.value)
  }

  const ageChangeHadler = (e) => {
    setAge(e.target.value)
  }

  const sizeChangeHadler = (e) => {
    setSize(e.target.value)
  }

  const weightChangeHadler= (e) => {
    setWeight(e.target.value)
  }

  const descChangeHadler= (e) => {
    setDesc(e.target.value)
  }

  const addressChangeHadler= (e) => {
    setAddress(e.target.value)
  }



  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      firstName: fatherName,
      lastName: lastName,
      fatherName: fatherName,
      id: id,
      tel: tel,
      age: age,
      size: size,
      weight: weight,
      desc: desc,
      address:address
    }
    console.log(data);

    setFirstName('');
    setFatherName('');
    setLastName('');
    setFatherName('');
    setId('');
    setTel('');
    setAge('');
    setSize('');
    setWeight('')
    setDesc('');
    setAddress('');

  }

  const click = () => {
    setActive(!active);

  }
  return (

    <form className="m-4 p-4 border rounded" onSubmit={submitHandler} >
      <div className='row'>
        <div className='float-lable position-relative col-12 col-md-4 col-xl-3 mt-3'>
          <label className="float-md-end position-absolute bg-white text-muted" >
            نام</label>
          <input name='firstName' value={firstName} type='text' className="form-control mt-n3"
            onChange={firstNameChangeHadler} />
        </div>

        <div className='float-lable position-relative col-12 col-md-4 col-xl-3 mt-3'>
          <label className="float-md-end position-absolute bg-white text-muted" >نام خانوادگی</label>
          <input name='lastName' value={lastName} type='text' className="form-control mt-n3" onChange={lastNameChangeHadler}/>
        </div>

        <div className='float-lable position-relative col-12 col-md-4 col-xl-3 mt-3'>
          <label className="float-md-end position-absolute bg-white text-muted" >نام پدر</label>
          <input name='fatherName' value={fatherName} type='text' className="form-control mt-n3" onChange={fatherNameChangeHadler}/>
        </div>

        <div className='float-lable position-relative col-12 col-md-4 col-xl-3 mt-3'>
          <label className="float-md-end position-absolute bg-white text-muted" > کد ملی</label>
          <input name='id' value={id} type='number' className="form-control mt-n3"
            onChange={idChangeHadler} />
        </div>
        <div className='float-lable position-relative col-12 col-md-4 col-xl-3 mt-3'>
          <label className="float-md-end position-absolute bg-white text-muted" > شماره همراه</label>
          <input name='tel' value={tel} type='tel' className="form-control mt-n3"
            onChange={telChangeHadler} />
        </div>
        <div className='float-lable position-relative col-12 col-md-4 col-xl-3 mt-3'>
          <label className="float-md-end position-absolute bg-white text-muted" >سن</label>
          <input name='age' value={age} type='number' className="form-control mt-n3"
            onChange={ageChangeHadler} />
        </div>

      </div>

      <div className='row'>
        <div className='float-lable position-relative col-12 col-md-3 col-xl-6 mt-3'>
          <label className="float-md-end position-absolute bg-white text-muted">قد</label>
          <input name='size' value={size} type='number' className="form-control mt-n3"
            onChange={sizeChangeHadler} />
        </div>

        <div className='float-lable position-relative col-12 col-md-3 col-xl-6 mt-3'>
          <label className="float-md-end position-absolute bg-white text-muted">وزن</label>
          <input name='weight' value={weight} type='number' className="form-control mt-n3"
            onChange={weightChangeHadler} />
        </div>

        <div className='float-lable position-relative col-12 col-md-6 col-xl-6 mt-3'>
         <label className="float-md-end position-absolute bg-white text-muted">توضیحات</label>
          <input name='desc' value={desc} type='text' className="form-control mt-n3"
            onChange={descChangeHadler} />
        </div>

      </div>
      <div className='row' >
        <div className="float-lable position-relative  col-12  py-2 mt-3">
              <textarea
                className="border rounded w-100 p-2"
                placeholder="آدرس"
                cols={2}
               rows={2}
            onChange={addressChangeHadler}
            name='address'
            value={address}
              ></textarea>
         </div>
      </div>

      <div className="row my-5">
        <div className="col-4"></div>
        <div className="col-4">
          <button className="btn w-100 " onClick={click} style={{ backgroundColor: active ? "green" : "white",color: active ? "white" : "blue" }}
          >
             Submit
          </button>
        </div>
        <div className="col-4"></div>
      </div>







    </form>



  )
}

export default Form



// how to set gap for inputs ?
