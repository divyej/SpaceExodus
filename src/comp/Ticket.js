import React from "react";
import { Button } from "react-bootstrap";
import rocket from './media/rocket1.gif'
import { Link } from "react-router-dom";


const Ticket = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center bg-black ">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
              <div id= "img-3" className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={rocket}
                    className="img-fluid animated"
                    alt=" img"
                  />
                </div>
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center  flex-column">

                  <h1>
                    Tickets
                    <strong className="brand-name">  Booked! </strong>
                  </h1>
                  <h2 className="my-2">
                    Congratulations, Enjoy your trip!
                  </h2>
                  <div className="mt-3">
                    <Link to="/contact">
                    <Button  className="btn-get-started bg-dark " >
                      Help?
                    </Button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
    </>
    
  );
};

export default Ticket;