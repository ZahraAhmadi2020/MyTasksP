import React, { Fragment, useState } from "react";

const Form1 = () => {
  const [firstView, setFirstView] = useState(true);

  return (
    <Fragment>
      <div className="row my-5">
        <div className="col-3"></div>
        <div className="col-6">
          <button
            className={
              "btn  w-100 text-wrap " + (firstView ? "btn-primary" : "btn-info")
            }
            onClick={() => {
              setFirstView(!firstView);
            }}
          >
            click to display {firstView ? "second" : "first"} view
          </button>
        </div>
        <div className="col-3"></div>
      </div>
      {firstView ? (
        <form className="container">
          {/* col-md  */}
          <div className="row mt-5">
            <input className="bg-danger-subtle col-4 col-md-4 py-2" />
            <input className="bg-dark-subtle col-4 col-md-4 py-2" />
            <input className="bg-danger-subtle col-4 col-md-4 py-2" />
          </div>

          <div className="row mt-4">
            <input className="bg-dark-subtle col-4 col-md-4 p-2" />
            <input className="bg-danger-subtle col-4 col-md-4 p-2" />
            <input className="bg-dark-subtle col-4 col-md-4 p-2" />
          </div>

          <div className="row mt-4">
            <input className="col-6 col-md-6 p-2 bg-info" />
            <input className="col-6 col-md-6 p-2 bg-danger" />
          </div>

          <div className="row justify-content-end mt-4">
            <input className="col-6 col-md-6 p-2 bg-warning" />
          </div>

          <div className="row mt-4">
            <input className="bg-success-subtle border-5 col-12 col-md-12 p-2" />
          </div>
          <br />
          <br />
          <hr />
          {/* col-xl  */}
          <div className="row mt-5">
            <input className="bg-primary-subtle col-3 p-2" />
            <input className="bg-dark-subtle col-3 p-2 " />
            <input className="bg-primary-subtle col-3 p-2" />
            <input className="bg-dark-subtle col-3 p-2 " />
          </div>

          <div className="row justify-content-end mt-4">
            <input className="col-3 col-xl-3 bg-danger p-2" />
            <input className="col-3 col-xl-3 bg-black p-2" />
          </div>

          <div className="row text-center mt-4">
            <input className="bg-danger-subtle col-sm-12 col-4 col-xl-4 p-2" />
            <input className="bg-success-subtle col-sm-12 col-4 col-xl-4 p-2" />
            <input className="bg-danger-subtle col-sm-12 col-4 col-xl-4 p-2" />
          </div>

          <div className="row mt-4">
            <input className="bg-warning-subtle border-5 col-12 col-xl-12 p-2" />
          </div>
        </form>
      ) : (
        <form className="m-4 p-4 border rounded" dir="rtl">
          <div className="row">
            <div className=" col-12 col-md-4 col-xl-3 py-2">
              <input className="border rounded w-100 p-2" placeholder="نام" />
            </div>

            <div className=" col-12 col-md-4 col-xl-3 py-2">
              <input
                className="border rounded w-100 p-2"
                placeholder="نام خانوادگی"
              />
            </div>
            <div className=" col-12 col-md-4 col-xl-3 py-2">
              <input
                className="border rounded w-100 p-2"
                placeholder="نام پدر"
              />
            </div>
            <div className=" col-12 col-md-4 col-xl-3 py-2">
              <input className="border rounded w-100 p-2" placeholder="کدملی" />
            </div>

            <div className=" col-12 col-md-4 col-xl-3 py-2">
              <input
                className="border rounded w-100 p-2"
                placeholder="شماره همراه"
              />
            </div>

            <div className=" col-12 col-md-4 col-xl-3 py-2 ">
              <input
                className="border rounded w-100 p-2"
                placeholder="سن"
                type="number"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 col-xl-4  py-2">
              <input
                className="border rounded w-100 p-2"
                placeholder="قد"
                type="number"
              />
            </div>
            <div className="col-12 col-md-6 col-xl-4  py-2">
              <input
                className="border rounded w-100 p-2"
                placeholder="وزن"
                type="number"
              />
            </div>

            <div className="col-12 col-md-6 col-xl-4  py-2">
              <input
                className="border rounded w-100 p-2"
                placeholder="توضیحات"
              />
            </div>
          </div>

          <div className="row">
            <div className=" col-12  py-2">
              <textarea
                className="border rounded w-100 p-2"
                placeholder="آدرس"
                cols={2}
                rows={2}
              ></textarea>
            </div>
          </div>
        </form>
      )}
    </Fragment>
  );
};

export default Form1;
