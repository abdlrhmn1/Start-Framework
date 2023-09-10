import React from "react";

const About = () => {
  return (
    <div className=" vh-100 d-flex align-items-center justify-content-center flex-column main-color text-white">
      <div>
        <div className="content mb-5">
          <h1 className="text-center fw-bold">About Component </h1>
        </div>
        <hr />
      </div>

      <div className="  container mt-2">
        <div className="align-items-center d-flex">
          <div className="info mx-3">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="info mx-3">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
