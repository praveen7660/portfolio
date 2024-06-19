import React, { useRef } from 'react'
import code from '../../assets/code.png'
import { projectData } from '../../data'
import { Link, NavLink } from 'react-router-dom'
import {skillImage} from '../../skillsData' 
import { Outlet } from 'react-router-dom'

function Projects() {
  return (
    <section id={"Projects"}className='Projects w-full flex gap-5 justify-center items-center flex-col mt-24 mb-20'>
              
                <h2 className='text-orange-500 font-bold text-3xl '>Projects</h2>
                <h2 className='dark:text-white font-bold text-3xl text-violet-500'>What I have made ?</h2>

                <div className='w-94% flex flex-col items-center gap-8'>

                  {
                    projectData.map((project)=>{


                      return (
                        <div className='w-[350px] md:w-[70%] h-fit dark:bg-white  bg-slate-100 flex flex-col md:flex-row justify-between  rounded-lg'>

                             
                              <img src={project.Image} alt=""  className='md:h-full md:w-[50%] w-full' />

                              <div className='h-[60%] mx-5 flex flex-col gap-1'>
                              <h3 className='text-violet-500 text-2xl font-semibold'>{project.title}</h3>  
                              <p className='text-black text-[18px] '>{project.description}</p> 

                              <Link to={project.link} target='_blank' className='text-blue-600 underline'>{project.title}</Link>

                              </div>

                        </div>
                      )
                    })
                  }

                      

                </div>

    
             
               
            

              

       </section>
  )
}

export default Projects