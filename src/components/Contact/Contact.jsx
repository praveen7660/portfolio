import React from 'react'
import contactMe from "../../assets/contact.jpg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';


function Contact() {

  const [formData,setFormData] = useState({email:"",name:"",subject:"",message:""});


  function handleSubmit(e){
    e.preventDefault();
    console.log(formData);
    const formelement = document.querySelector("form");
    
    const form = new FormData(formelement);
    
   
    fetch("https://script.google.com/macros/s/AKfycbz8pxDHhA9vsx7zEa-n-EfUZpRwCmf7j4ZMMxx4LtcEMfX-VbN7v_KkUQKaA7yZHPwh3w/exec",{
      method:"POST",
      body:form,
    }).then((res)=>{toast.success("Message sent");}).catch((res)=>{ toast.error("Something went wrong");})

    

    setFormData({name:"",email:"",subject:"",message:""});

  


  }
  return (

    <>
    
    
    
    <ToastContainer/>
    
    <div className='w-screen h-fit dark:bg-slate-900 bg-white flex flex-row justify-center items-center pb-7 gap-12'>
      
     
         <img src={contactMe} alt="" className='hidden xl:inline-block'/>
      


      <div>
      <p className='text-2xl text-violet-500 font-semibold mt-10 text-start w-[350px]' >{"<Praveen>"}</p>      
      <h1 className='text-orange-500 text-3xl font-bold mt-3'>Contact me</h1>
      <div className='w-[400px] h-fit mt-7 mb-8 bg-slate-200 dark:bg-slate-800 backdrop-blur-sm  p-4 rounded-lg'>
      <form action="" className='flex flex-col gap-5' onSubmit={handleSubmit}>
          
          
      <div className='flex flex-col'>
          <label htmlFor="name" className='dark:text-white'>Name</label>
          <input type="text" name="name" placeholder="Enter your full name" id="name" value={formData.name} onChange={(e)=>setFormData((prev)=>{return {...prev,name:e.target.value}})} className='h-[30px] rounded-lg p-4'/>
          </div>

          <div className='flex flex-col'> 
          <label htmlFor="email" className='dark:text-white'>Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={(e)=>setFormData((prev)=>{return {...prev,email:e.target.value}})} placeholder="Enter your email" className='h-[30px] rounded-lg p-4' required/>
          </div>
          
          

          <div className='flex flex-col'>
            <label htmlFor="subject" className='dark:text-white'>What you to contact me for?</label>
            <input type="text" name="subject" placeholder="Enter the subject" id ="subject" className='h-[30px] rounded-lg p-4' value={formData.subject} onChange={(e)=>setFormData((prev)=>{return {...prev,subject:e.target.value}})} required/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="message" className='dark:text-white'>Message</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter your message" className='rounded-lg p-4' value={formData.message} onChange={(e)=>setFormData((prev)=>{return {...prev,message:e.target.value}})} required></textarea>
          </div>

          <button className='w-[100px] h-[60px] bg-violet-500 text-white rounded-lg text-xl'>Submit</button>
          


        </form>


      </div>
      <p className='text-2xl text-violet-500 font-semibold w-[350px] text-start' >{"</Praveen>"}</p>
        
        </div>

        
    </div>

    </>
  )
}

export default Contact