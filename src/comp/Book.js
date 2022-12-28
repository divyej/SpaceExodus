import React, { useState } from "react"
import { Button } from "react-bootstrap"
import Ticket from "./Ticket";



const Book = () => {
    const [data,setData] = useState({
      from: '',
      to: '',
      date: '',
    });
   const [isFormVisible, setIsFormVisible] = useState(true);
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
          };}
        });
      };
      
      const formSubmit = (event) => {
        event.preventDefault();
        alert(`Congratulations Your tickets are booked from ${data.from} to ${data.to} on the date ${data.date}. Please press OK.`)
        setData({
            from: '',
            to: '',
            date: '',
            
          });
          setIsFormVisible(false);
      };
      return(
        <>
{isFormVisible ? (
      <section className='hero'>
        <div className='container'>
            <h1>Where to?</h1>
          <form className='flex' onSubmit={formSubmit}>
         
            <div className='box'>
              <span>From Planet {data.to}</span>
              <input type='text' placeholder='Earth?'           
                name="from"
                  value={data.from}
                  onChange={InputEvent} />
            </div>
            <div className='box'>
              <span>To Planet</span>
              <input type='text' placeholder='Where to?'
              name="to"
              value={data.to}
              onChange={InputEvent} />
            </div>
            <div className='box'>
              <span>Dates</span>
              <input type='Date' placeholder='enter Date'
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
         ) : (<Ticket  />)}
      </>
      )
      }


export default Book