import React from "react";
import { Button } from "react-bootstrap";
import Earth from './media/neptune.jpg'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center bg-black ">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center  flex-column">
                  <h1>
                    Welcome to
                    <strong className="brand-name"> GoSpace </strong>
                  </h1>
                  <h2 className="my-2">
                    Space travel , we will make it possible
                  </h2>
                  <div className="mt-3">
                    <Link to="/trip">
                    <Button  className="btn-get-started bg-dark " >
                      Explore
                    </Button></Link>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={Earth}
                    className="img-fluid animated"
                    alt="Home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    
  );
};

export default Home;