import React from "react";
import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";


const Card= (elem) => {
  return (
    <>
      <div className="col-md-3 col-12 mx-auto my-2 "  >
        <div className="card " >
          <img src={elem.image} className="card-img-top" alt="jj" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold text-capitalize">{elem.title}</h5>
            <p className="card-text py-2">
              {elem.text}
            </p>
            <p className="card-text py-2  font-weight-bold">
              {elem.price}
            </p>
            <Link to={elem.link}>
            <Button  className="btn btn-primary">
              Book Now!
            </Button></Link>
          </div>
        </div>  
      </div>
    </>
  );
};

export default Card ;