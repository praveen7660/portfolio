import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import ham from '../../assets/ham.png'
import hamDark from '../../assets/hamDark.png'
import { useState } from 'react'
import { useTheme } from '../../Context/ThemeContext'
import lightimage from '../../assets/light.png';
import darkimage from '../../assets/dark.png'


function Option() {

    const [menuAvailable,setMenuAvailable] = useState(false);
    const {themeMode,lightTheme,darkTheme} = useTheme(); 
    const [imageTheme,setimageTheme] = useState(darkimage);
    const [dark,setDark] = useState(true);


    function handleTheme(){
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

    

    const handleClick = ()=>{
        setMenuAvailable((prev)=>!prev);
    }

  return (
    <>

      <button type="button" className={`inline-block md:hidden w-[60px] h-[60px]`}>
        <img src={(themeMode==="dark")?hamDark:ham} alt="" className={`inline-block md:hidden w-[90%] h-[90%]`} onClick={handleClick}/>
      </button>


      <div className={`transition-all flex flex-col items-center gap-10 z-10  duration-300 dark:bg-slate-950 absolute top-24  left-0 right-0 bg-slate-300 ${(menuAvailable)?"h-[300px]":"h-[0]"}`}>

                    <NavLink
                      to="/"
                      className={({isActive})=>`text-[25px]  hover:text-orange-500 font-bold transition-all duration-100 ${isActive?"text-orange-500":"text-grey-700 dark:text-white"} ${(menuAvailable)?"block":"hidden"} mx-auto`
                    }
                     >
                    Home
                    </NavLink>
                    
                

               
                <NavLink
                      to="/about"
                      className={({isActive})=>`text-[25px] hover:text-orange-500 font-bold transition-all duration-100 ${isActive?"text-orange-500":"text-grey-700 dark:text-white"} ${(menuAvailable)?"block":"hidden"} mx-auto`
                    }
                     >
                    About
                    </NavLink>
             

              
                <NavLink
                      to="/contact"
                      className={({isActive})=>`text-[25px]  hover:text-orange-500 font-bold transition-all duration-100  ${isActive?"text-orange-500":"text-grey-700 dark:text-white"} ${menuAvailable?"block":"hidden"} mx-auto`
                    }
                     >
                    Contact
                    </NavLink>


                    <button className={`${menuAvailable?"block":"hidden"}`} onClick={handleTheme}><img src={imageTheme}  alt="theme" width="40px" height="40px"/> </button >
              


      </div>


      </>
  )
}

export default Option