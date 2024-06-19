import React, { useEffect } from 'react'
import lightimage from '../../assets/light.png';
import darkimage from '../../assets/dark.png'
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../Context/ThemeContext';
import { useState } from 'react';
import navProfile from "../../assets/navProfile.jpeg"
import Option from '../Option/Option';

function Header() {

  const [dark,setDark] = useState(true);
  const [imageTheme,setimageTheme] = useState(darkimage);
  const {themeMode,lightTheme,darkTheme} = useTheme();

  function handleClick(){
    setDark((prev)=>(!prev));
  }

  useEffect(()=>{

    if(dark){
      darkTheme();
      setimageTheme(lightimage);

    }
    else{
      lightTheme();
      setimageTheme(darkimage);
    }
  },[dark])


  return (
    
    <div className='bg-white w-[100vw] h-24  flex flex-row justify-between items-center dark:bg-slate-900 px-8'>
          <div>
               {/* <h1 className='md:text-3xl text-violet-500 md:font-extrabold  text-3xl font-bold '>Nishant Rai</h1> */}
               <img src={navProfile} alt="" className='w-16 h-16 rounded-full'/>

          </div>

          <div className='w-[calc(25%+200px)] hidden  md:block'>
            
                <ul className=' w-[full] flex flex-row justify-between items-center'>
                <li>

                    <NavLink
                      to="/"
                      className={({isActive})=>`text-[25px]  hover:text-orange-500 font-bold transition-all duration-100 ${isActive?"text-orange-500":"text-grey-700 dark:text-white"}`
                    }
                     >
                    Home
                    </NavLink>
                    
                </li>

                <li>
                <NavLink
                      to="/about"
                      className={({isActive})=>`text-[25px] hover:text-orange-500 font-bold transition-all duration-100 ${isActive?"text-orange-500":"text-grey-700 dark:text-white"}`
                    }
                     >
                    About
                    </NavLink>
                </li>

                <li>
                <NavLink
                      to="/contact"
                      className={({isActive})=>`text-[25px]  hover:text-orange-500 font-bold transition-all duration-100  ${isActive?"text-orange-500":"text-grey-700 dark:text-white"}`
                    }
                     >
                    Contact
                    </NavLink>
                </li>

                </ul>
           
          </div>

          <div className='hidden md:block'>
              <button onClick={handleClick}><img src={imageTheme}  alt="theme" width="40px" height="40px"/> </button>
          </div>

          <Option/>

    </div>

  );
}

export default Header