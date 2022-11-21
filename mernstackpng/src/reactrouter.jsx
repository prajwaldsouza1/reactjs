import React from 'react'
import {BrowserRouter,Routes,Route}from "react-router-dom"
import List from './list'
import Module from './Module'
import Arraymethod from './Arraymethod'
import Arrow from './arrow'
import Class from './class'
import Classes from './classes'
import Conditional from './conditional'
import  Destructure from './destructure'
import Events from './events'
import Project1 from './Project1'
import Home from './Home'
import Employee from './Employee'
import Form from './Form'
import Shop from './Shop'
import Studentform from './Studentform'
import Employeeform from './Employeeform'
import Useeffect from './Useeffect'
import Product from './Product'
import Textfield from './Textfield'

export default function reactrouter() {
  return (
    <div>
        <BrowserRouter>
        <Routes>

            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/a1' element={<Module/>}></Route>
            <Route exact path='/a2' element={<Arraymethod/>}></Route>
            <Route exact path='/a3' element={<Arrow/>}></Route>
            <Route exact path='/a4' element={<Class/>}></Route>
            <Route exact path='/a5' element={<Classes/>}></Route>
            <Route exact path='/a6' element={<Conditional/>}></Route>
            <Route exact path='/a7' element={<Destructure/>}></Route>
            <Route exact path='/a8' element={<Events/>}></Route>
            <Route exact path='/a9' element={<Project1/>}></Route>
            <Route exact path='/a10' element={<List/>}></Route>
            <Route exact path='/a11' element={<Employee/>}></Route>
            <Route exact path='/a12' element={<Form/>}></Route>
            <Route exact path='/a13' element={<Shop/>}></Route>
            <Route exact path='/a14' element={<Studentform/>}></Route>
            <Route exact path='/a15' element={<Employeeform/>}></Route>
            <Route exact path='/a16' element={<Useeffect/>}></Route>
            <Route exact path='/a17' element={<Product/>}></Route>
            <Route exact path='/a18' element={<Textfield/>}></Route>
        </Routes>

        </BrowserRouter>      

    </div>
  )
}
