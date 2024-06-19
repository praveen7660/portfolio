import React, { useRef } from 'react'
import code from '../../assets/code.png'
import { projectData } from '../../data'
import { Link, NavLink } from 'react-router-dom'
import {skillImage} from '../../skillsData' 
import { Outlet } from 'react-router-dom'

function Skills() {
  return (
    <section id={"Skills"}className="skills w-full flex gap-5 justify-center items-center flex-col mb-32 mt-24">

      <h2 className='text-orange-500 font-bold text-3xl '>Skills</h2>
      <h2 className='dark:text-white font-bold text-3xl text-violet-500'>What I am capable of?</h2>

      <div className='w-full md:w-[50%] flex flex-row gap-12 justify-center flex-wrap '>
                  {
                          skillImage.map((image)=>{

                            return(
                            <div className=''>
                                    <img src={image} alt="" width="100" height="100" />  
                            </div>
                            );
                          })
                  }
      </div>


      </section>
  )
}

export default Skills;