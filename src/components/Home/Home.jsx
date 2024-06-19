import React from 'react'
import profile from '../../assets/profile.png'
import { useTypewriter,Cursor} from 'react-simple-typewriter'

function Home() {
 
  const [text] = useTypewriter({
    words: ['Praveen Tiwari','A Frontend Developer','A Coder','A React Developer'],
    loop:{},
    typeSpeed: 120,
    deleteSpeed:80,
    cursor:true


  })


  return (
    <div className='w-screen  h-fit md:h-[500px] flex flex-col md:flex-row  justify-evenly gap-4 items-center  xl:justify-center pt-10 dark:bg-slate-900 '>


      

      <div className='' >

        <img src={profile} alt=""  className='rounded-md w-[250px] h-[250px] md:h-[400px] md:w-[400px] ' />

      </div>


      <div className=' w-[80%] lg:w-[25%] mb-14 '>
        <p className='text-2xl text-violet-500 font-semibold' >{"<Praveen>"}</p>
        <div className=' dark:text-white text-xl'>Hi Everyone, I am</div>

        <div className='h-fit'><span className='text-orange-500 text-4xl font-bold'>{text}</span> 
          
          <span className='text-orange-500 text-4xl'><Cursor cursorStyle="|" cursorColor='orange' cursorBlinking={false}/></span>
          
          
        
          
          </div>
        
        <div className=' dark:text-white text-xl'>a passionate and driven Front-End Developer with a knack for creating visually stunning and user-friendly web applications. I'm thrilled to be on this journey to shape the digital world with my coding skills and creativity.</div>
        <p className='text-2xl text-violet-500 font-semibold'>{"</Praveen>"}</p>
      </div>


      </div>
    
  )
}

export default Home