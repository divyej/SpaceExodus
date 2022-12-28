import React from "react";
import { useState } from "react";
import rocket from './media/rocket2.gif'

const About= ()=>{
  const [ toggleTab, setToggleTab] = useState(1)
  const toggleState = (index) =>{
    setToggleTab(index)
  }
  return (
    <>

    <section className="about">

    <div className="row">

    <div className="column">
      <img src={rocket} id="about-img" alt="abput"
      className="img-fluid animated" />
    </div>

    <div className="column">

    <div className="tabs">

    <div className={toggleTab === 1 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(1)}
    >
      <h2>About</h2>
    </div>
    <div className={toggleTab === 2 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(2)}
    >
      <h2>Recoginitions</h2>
    </div>
      
    </div>

    <div className="tab-content">

  

    <div className={toggleTab === 1 ?"content active-content":"content"}>
      <h2>Our Story</h2>
      <p>nksnfksfnsfwfjwklfnsl
        fslksakfbkjdsfsnfkslfbrejkfanskfnksnkj
        fbjkbzjs
        gdbjksdbkdbvkd
        gbvkgvbdfvnksldf
        xvk
        xnkxnk</p>
       <h3>We are a Space travel Company Having 10 Year Of Experience</h3>
       <p>njfsjkfnskfvlzsfnnflksdlfkslskfksdlfnselknizlsefknbvlkdv  bn 
        klbdkwevn;bovnv
        bskndkslfbsfkk ncjdsbfbsd 
         ejfcs jdbnekfbw
        infv jbfjsbgbv jbfksfbs smbgjwjebfn</p>
    </div>
      

    <div className={toggleTab === 2 ?"content active-content":"content"}>

    <div className="exp-column">
      <h3>Space Travels</h3>
      <span>2018-2022</span>
      <p>We completed the mile stone of 150 space travels</p>
    </div>

    <div className="exp-column">
      <h3>Travels</h3>
      <span>2016-2022</span>
      <p> 20000 Passengers have travelled with us safely with 0% casulaty rate .</p>
    </div>

    <div className="exp-column">
      <h3>Awards</h3>
      <span>2022</span>
      <p>We got the Elon Muk award for making space travel this easy and at such affordable prices</p>
    
    </div>
    </div>
        
    </div>

    </div>

    </div>

    </section>
    
    </>
  )

}
export default About;