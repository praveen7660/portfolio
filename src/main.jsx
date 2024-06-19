import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import {Home,About,Contact,Intro, Projects,Skills} from './components'

import { Navigate } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
         
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}>
                <Route path='intro'element={<Intro/>}/>
                <Route path='skills'element={<Skills/>}/>
                <Route path='projects'element={<Projects/>}/>

                <Route index element={<Navigate to="intro" />} />
               
        </Route>
        <Route path="contact" element = {<Contact/>}/>


    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router = {router}/>
 
)
