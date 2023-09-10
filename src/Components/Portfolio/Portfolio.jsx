import React from "react";

const Portfolio = () => {
  return (
    <div className="container py-5">
      <div className="row  m-auto gy-3 ">
        <h1 className=" text-center fw-bold pt-5">Portfolio Component</h1>
        <div class="portfolioinfo col-md-6 p-4 col-lg-4">
          <div class="portfolioimg">
            <img src="poert1.png" className=" rounded-3 img-fluid" alt="" />
            <div class="portfoliolayer rounded-3 d-flex justify-content-center align-items-center">
              <i className=" fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>
        </div>
        <div class="portfolioinfo col-md-6 p-4 col-lg-4">
          <div class="portfolioimg">
            <img src="port2.png" className=" rounded-3 img-fluid" alt="" />
            <div class="portfoliolayer rounded-3 d-flex justify-content-center align-items-center">
              <i className=" fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>
        </div>
        <div class="portfolioinfo col-md-6 p-4 col-lg-4">
          <div class="portfolioimg">
            <img src="port3.png" className=" rounded-3 img-fluid" alt="" />
            <div class="portfoliolayer rounded-3 d-flex justify-content-center align-items-center">
              <i className=" fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>
        </div>
        <div class="portfolioinfo col-md-6 p-4 col-lg-4">
          <div class="portfolioimg">
            <img src="poert1.png" className=" rounded-3 img-fluid" alt="" />
            <div class="portfoliolayer rounded-3 d-flex justify-content-center align-items-center">
              <i className=" fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>
        </div>
        <div class="portfolioinfo col-md-6 p-4 col-lg-4">
          <div class="portfolioimg">
            <img src="port2.png" className=" rounded-3 img-fluid" alt="" />
            <div class="portfoliolayer rounded-3 d-flex justify-content-center align-items-center">
              <i className=" fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>
        </div>
        <div class="portfolioinfo col-md-6 p-4 col-lg-4">
          <div class="portfolioimg">
            <img src="port3.png" className=" rounded-3 img-fluid" alt="" />
            <div class="portfoliolayer rounded-3 d-flex justify-content-center align-items-center">
              <i className=" fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
