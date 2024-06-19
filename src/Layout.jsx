import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from './components'
import { ThemeContextProvider } from './Context/ThemeContext';
function Layout() {

  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = ()=>{
    setThemeMode("light");
  }

  const darkTheme = ()=>{
    setThemeMode("dark");
  }

  // doing the actual change

  useEffect(()=>{
     document.querySelector('html').classList.remove("light");
     document.querySelector('html').classList.remove("dark");
     document.querySelector('html').classList.add(themeMode);
  },[themeMode])
  return (


    <div className='overflow-x-hidden '>
      <ThemeContextProvider value={{ themeMode,lightTheme,darkTheme}}> 
      
        <Header />
        <Outlet />
        <Footer />

    </ThemeContextProvider>
    </div>

    

  );
}

export default Layout