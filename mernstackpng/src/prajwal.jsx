import React from 'react'
import {BrowserRouter,Routes,Route}from "react-router-dom"
import Prajwal1 from './prajwal1'
import List from './list'
import Class from './class'
export default function prajwal() {
  return (
    
    <div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
            <div class="navbar-nav mr-auto"/>
                <li class="nav-item active">
                    <a class="nav-link" href="ab12">Home<span class="sr-only"></span></a>
                    
                </li>
               <div> <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button onClick="hello()">click here</button>
        </a> </div>
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Prajwal1/>}></Route>
            <Route exact path='/ab12' element={<List/>}></Route>
            <Route exact path='/ab123' element={<Class/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
    
  )
}
