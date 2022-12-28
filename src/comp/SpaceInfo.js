import React from "react";
import { useState } from "react";


const Ship= (Ships)=>{
  const [ toggleTab, setToggleTab] = useState(1)
  const toggleState = (index) =>{
    setToggleTab(index)
  }
  return (
    <>

    <section className="about">

    <div className="row">

    <div className="column">
      <img src={Ships.image} id="about-img" alt="abput"
      className="img-fluid animated" />
    </div>

    <div className="column">

    <div className="tabs">

    <div className={toggleTab === 1 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(1)}
    >
      <h2>Read</h2>
    </div>
      
    </div>

    <div className="tab-content">

  

    <div className={toggleTab === 1 ?"content active-content":"content"}>
      <h2>{Ships.title}</h2>
      <p>{Ships.Description}</p>
       <h3>{Ships.Description}</h3>
       <p>njfsjkfnskfvlzsfnnflksdlfkslskfksdlfnselknizlsefknbvlkdv  bn 
        klbdkwevn;bovnv
        bskndkslfbsfkk ncjdsbfbsd 
         ejfcs jdbnekfbw
        infv jbfjsbgbv jbfksfbs smbgjwjebfn</p>
    </div>
        
    </div>

    </div>

    </div>

    </section>
    
    </>
  )

}
export default Ship;