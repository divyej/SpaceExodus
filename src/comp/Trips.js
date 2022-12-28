import React from "react";
import Packages from "./api";
import Card from "./Card";

const Trip= () => {
  return (
    <div className="bg-black">
     <div className="my-5 bg-black ">
        <h1 id="trip" className="text-center"> Our Packages </h1>
      </div>
      <div className="container mb-4 bg-black ">
        <div className="row bg-black ">
          <div className="col-12 mx-auto  ">
            <div className="row gy-4 gx-5 bg-black">
            {Packages.map((elem) => {
                return <Card key={elem.id} text={elem.text} title={elem.Trip} price={elem.price} image={elem.image} link="/book" />;
              })}
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Trip;