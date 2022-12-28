import React, { useState } from "react"
import { Button } from "react-bootstrap"




const Contact = () => {
    const [data,setData] = useState({
      from: '',
      to: '',
      date: '',
    });
   
    const InputEvent = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        setData((preValue) => {
            if(name=== "from"){
          return {
            ...preValue,
              from: value
          };}
          else if(name==="to"){
          return{
            ...preValue,   
            to: value
          };}
          else if(name==="date"){
          return{
            ...preValue,
            date: value
          };
        }
        else if(name==="text"){
            return{
              ...preValue,
              text: value
            };
          }
        });
      };
      
      const formSubmit = (event) => {
        event.preventDefault();
        alert(`Hi ${data.from}, We are sorry for ${data.date},We will contact you soon on ${data.to}`)
        setData({
            from: '',
            to: '',
            date: '',
            
          });
          
      };
      return(
        <>
      <section className='hero'>
        <div className='container'>
            <h1>Contact US!</h1>
          <form className='flex' onSubmit={formSubmit}>
         
            <div className='box'>
              <span>Your Name {data.to}</span>
              <input type='text' placeholder='Name'           
                name="from"
                  value={data.from}
                  onChange={InputEvent} />
            </div>
            <div className='box'>
              <span>Email</span>
              <input type='text' placeholder='ex@mail.com'
              name="to"
              value={data.to}
              onChange={InputEvent} />
            </div>
            <div className='box'>
              <span>Grievances</span>
              <input type='text' placeholder='Enter your message here'
               name="date"
               value={data.date}
               onChange={InputEvent} />
            </div>
            <Button id="btn" className='primary mt-2 my-2 mx-2' type="submit">
            Less Go!
            </Button>
          </form>
        </div>
      </section>
     
      </>
      )
      }


export default Contact;