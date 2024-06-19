import React, { useRef } from 'react'
import code from '../../assets/code.png'
import { projectData } from '../../data'
import { Link, NavLink } from 'react-router-dom'
import {skillImage} from '../../skillsData' 
import { Outlet } from 'react-router-dom'

function About() {
  return (
    <div className='wrapper w-screen h-fit flex flex-col pt-5 items-center dark:bg-slate-900'>
           
           <div className='w-[200px] flex flex-row justify-between h-[55px] backdrop-blur-sm dark:bg-white/30 bg-black/10 rounded-lg p-2 relative -z-0'>
                   
                   <NavLink to="/about/intro" className={({isActive})=>(`${isActive?"bg-slate-400 rounded-lg dark:bg-white":""}`)}><span className='text-[30px]'>👨‍💼</span></NavLink>
                   <NavLink to="/about/skills" className={({isActive})=>(`${isActive?"bg-slate-400 rounded-lg dark:bg-white":""}`)}><span className='text-[30px]'>😎</span></NavLink>
                   <NavLink to="/about/projects" className={({isActive})=>(`${isActive?"bg-slate-400 rounded-lg dark:bg-white":""}`)}><span className='text-[30px]'>🙂</span></NavLink>
           </div>

           <Outlet></Outlet>



    </div>
  )
}

export default About