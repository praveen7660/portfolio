import React from 'react'

import { Link, NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-screen h-[300px] flex flex-col items-center justify-evenly bg-slate-200 dark:bg-slate-950  gap-1'>

         <div className='flex flex-row gap-11'>

           <div className='w-[50px]  h-[50px] bg-white rounded-full '> 
                    <Link to="https://github.com/praveen7660" target="_blank">
                      <span>
                      <svg enable-background="new 0 0 512 512" height="50px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="50px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path clip-rule="evenodd" d="M296.133,354.174c49.885-5.891,102.942-24.029,102.942-110.192   c0-24.49-8.624-44.448-22.67-59.869c2.266-5.89,9.515-28.114-2.734-58.947c0,0-18.139-5.898-60.759,22.669   c-18.139-4.983-38.09-8.163-56.682-8.163c-19.053,0-39.011,3.18-56.697,8.163c-43.082-28.567-61.22-22.669-61.22-22.669   c-12.241,30.833-4.983,53.057-2.718,58.947c-14.061,15.42-22.677,35.379-22.677,59.869c0,86.163,53.057,104.301,102.942,110.192   c-6.344,5.452-12.241,15.873-14.507,30.387c-12.702,5.438-45.808,15.873-65.758-18.592c0,0-11.795-21.31-34.012-22.669   c0,0-22.224-0.453-1.813,13.592c0,0,14.96,6.812,24.943,32.653c0,0,13.6,43.089,76.179,29.48v38.543   c0,5.906-4.53,12.702-15.865,10.89C96.139,438.977,32.2,354.626,32.2,255.77c0-123.807,100.216-224.022,224.03-224.022   c123.347,0,224.023,100.216,223.57,224.022c0,98.856-63.946,182.754-152.828,212.688c-11.342,2.266-15.873-4.53-15.873-10.89   V395.45C311.1,374.577,304.288,360.985,296.133,354.174L296.133,354.174z M512,256.23C512,114.73,397.263,0,256.23,0   C114.73,0,0,114.73,0,256.23C0,397.263,114.73,512,256.23,512C397.263,512,512,397.263,512,256.23L512,256.23z" fill="#0D2636" fill-rule="evenodd"/></g></svg>
                      </span>
                    </Link>
           </div>

           <div className='w-[50px]  h-[50px] bg-white rounded-full '>
                 <Link to="https://www.linkedin.com/in/praveenxx/" target="_blank">
                <svg enable-background="new 0 0 32 32" height="50px" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="50px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle clip-rule="evenodd" cx="16" cy="16" fill="#007BB5" fill-rule="evenodd" r="16"/><g><rect fill="#FFFFFF" height="14" width="4" x="7" y="11"/><path d="M20.499,11c-2.791,0-3.271,1.018-3.499,2v-2h-4v14h4v-8c0-1.297,0.703-2,2-2c1.266,0,2,0.688,2,2v8h4v-7    C25,14,24.479,11,20.499,11z" fill="#FFFFFF"/><circle cx="9" cy="8" fill="#FFFFFF" r="2"/></g></g><g/><g/><g/><g/><g/><g/></svg>
                 </Link>
           </div>

         </div>

         <div className='flex flex-row justify-center items-center w-[300px] gap-11 text-[18px] '>

          <div className='hover:underline'>
          
                  <NavLink
                  
                  to="/"
                  className={({isActive})=>`${isActive?"text-orange-500 underline":"dark:text-white text-black"}`}>
                   Home
                  </NavLink>
                    
                  

          </div>

          <div className='hover:underline'>

          <NavLink
                  
                  to="/about"
                  className={({isActive})=>`${isActive?"text-orange-500 underline":"dark:text-white text-black"}`}>
                   About
                  </NavLink>
          </div>
          <div className='hover:underline'>

          <NavLink
                  
                  to="/contact"
                  className={({isActive})=>`${isActive?"text-orange-500 underline":"dark:text-white text-black"}`}>
                   Contact
                  </NavLink>
          </div>
          
         </div>

         <div className='dark:text-white text-black'>

               Made with ❤️ by Praveen

         </div>
    </div>
  )
}

export default Footer