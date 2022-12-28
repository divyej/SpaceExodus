import React from "react";
import Ships from "./apiS";
import Card from "./Card";

const Featured= () => {
  return (
    <div className="bg-black">
     <div className="my-5 bg-black mt-10 ">
        <h1 id="trip" className="text-center "> Our SpaceCrafts </h1>
      </div>
      <div className="container mb-4 bg-black ">
        <div className="row bg-black ">
          <div className="col-12 mx-auto  ">
            <div className="row gy-4 gx-5 bg-black">
            {Ships.map((elem) => {
                return <Card key={elem.id} text={elem.Description} title={elem.title}  image={elem.image} link={elem.link}/>;
              })}
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Featured;