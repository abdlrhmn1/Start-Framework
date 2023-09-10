import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center flex-column vh-100">
        <div className="info my-5">
          <h1 className="text-center mt-4 fw-bold">Contact Component</h1>
        </div>
        <div class="row ">
          <div className="">
            <input
              type="text"
              className="form-control my-3"
              placeholder="userName"
              aria-label="userName"
            />
          </div>
          <div className="">
            <input
              type="text"
              className="form-control  my-3"
              placeholder="userAge"
              aria-label="userAge"
            />
          </div>
          <div className="">
            <input
              type="text"
              className="form-control  my-3"
              placeholder="userEmail"
              aria-label="userEmail"
            />
          </div>
          <div className="">
            <input
              type="text"
              className="form-control  my-3"
              placeholder="userPassword"
              aria-label="userPassword"
            />
          </div>
        </div>
        <div className="btn-content">
          <button className="btn btn-success">send Message</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
