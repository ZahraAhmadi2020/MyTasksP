import React from 'react'

const Form = () => {
  return (
    <form className='container'>
      {/* col-md  */}
      <div className="row mt-5">
        <input class="bg-danger-subtle col-4 col-md-4 py-2" />
        <input class="bg-dark-subtle col-4 col-md-4 py-2"  />
        <input class="bg-danger-subtle col-4 col-md-4 py-2" />
      </div>

      <div className="row mt-4">
        <input class="bg-dark-subtle col-4 col-md-4 p-2"/>
        <input class="bg-danger-subtle col-4 col-md-4 p-2"/>
        <input class="bg-dark-subtle col-4 col-md-4 p-2"/>
      </div>

      <div className="row mt-4" >
        <input className='col-6 col-md-6 p-2 bg-info'/>
        <input className='col-6 col-md-6 p-2 bg-danger'/>
      </div>

      <div className="row justify-content-end mt-4">
        <input class="col-6 col-md-6 p-2 bg-warning"/>
      </div>

      <div className="row mt-4">
        <input class="bg-success-subtle border-5 col-12 col-md-12 p-2"/>
      </div>
      <br />
      <br/>
      <hr/>
    {/* col-xl  */}
      <div className="row mt-5">
        <input class="bg-primary-subtle col-3 p-2"/>
        <input className='bg-dark-subtle col-3 p-2 '/>
        <input class="bg-primary-subtle col-3 p-2"/>
        <input className='bg-dark-subtle col-3 p-2 '/>
      </div>

      <div className="row justify-content-end mt-4">
        <input className='col-3 col-xl-3 bg-danger p-2'/>
        <input className='col-3 col-xl-3 bg-black p-2'/>
      </div>

      <div className="row text-center mt-4">
        <input className='bg-danger-subtle col-sm-12 col-4 col-xl-4 p-2'/>
        <input className='bg-success-subtle col-sm-12 col-4 col-xl-4 p-2'/>
        <input  className='bg-danger-subtle col-sm-12 col-4 col-xl-4 p-2'/>
      </div>

      <div className="row mt-4">
        <input className='bg-warning-subtle border-5 col-12 col-xl-12 p-2'/>
      </div>




    </form>
  )
}

export default Form
