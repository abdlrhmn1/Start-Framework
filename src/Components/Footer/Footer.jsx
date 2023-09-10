import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="second-color text-white d-flex p-5 text-center">
        <div className="col-md-4">
          <div className="location">
            <h3>location</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className=" around">
            <h3>AROUND THE WEB</h3>
            <div className="icons py-4 d-flex justify-content-center">
              <i className="fa-brands fa-facebook mx-2 fa-2x"></i>
              <i className="fa-brands fa-twitter mx-2 fa-2x"></i>
              <i className="fa-brands fa-linkedin mx-2 fa-2x"></i>
              <i className="fa-brands fa fa-globe mx-2 fa-2x"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="freelance">
            <h3>ABOUT FREELANCER</h3>
            <p className="py-4">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
