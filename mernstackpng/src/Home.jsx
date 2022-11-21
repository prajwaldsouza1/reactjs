import React from 'react'
import logo from './logo.svg';
import {Link} from 'react-router-dom'
import './shop.css'
export default function Home() {
  return (
    <>
    <div className="backimage">
    <nav className="nav">
    <a href="/" className="app-logo">
    <img src={logo} className="App-logo" alt="logo" />
      REACT</a> 
    <ul>
      <li className="active">
        <a href="/Home">HOME</a>
        
      </li>
    </ul>
    <ul>
    <li className="active"> 
        <a href="/a10">PORTFOLIO</a>
      </li>
    </ul>
    <ul>
    <li className="active"> 
        <a href="/contact">CONTACTS</a>
      </li>
    </ul>
    <ul>
    <li className="active">
        <a href="/about">ABOUT</a>
      </li>
    </ul>
   
    </nav>
    
   

    
   <center><div className="a"><h2>Design,communiacate,<br/>
    and <span>shine!</span></h2></div></center> 


<br/>
<br/>





    <ul>
    <li className="prajwal"> 
   <Link to='/'><span>Home</span></Link><br/></li></ul>         
   

   <ul>
    <li className="prajwal"> 
    <Link to='/a1'><span>Module</span></Link><br/></li></ul>

    
    <ul>
    <li className="prajwal"> 
    <Link to='/a2'><span>Arraymethod</span></Link><br/></li></ul>

    <ul>
    <li className="prajwal"> 
    <Link to='/a3'><span>Arrow</span></Link><br/></li></ul>
    <ul>
    <li className="prajwal"> 
    <Link to='/a4'><span>Class</span></Link><br/></li></ul>
    <ul>
    <li className="prajwal"> 
    <Link to='/a5'><span>Classes</span></Link><br/></li></ul>
    <ul>
    <li className="prajwal"> 
    <Link to='/a6'><span>Conditional</span></Link><br/></li></ul>
    <ul>
    <li className="prajwal"> 
    <Link to='/a7'><span>Destructure</span></Link><br/></li></ul>
    <ul>
    <li className="prajwal"> 
    <Link to='/a8'><span>Events</span></Link><br/></li></ul>
    <ul>
    <li className="prajwal"> 
    <Link to='/a9'><span>Project1</span></Link><br/></li></ul>
    <ul>
    <li className="prajwal"> 
    <Link to='/a10'><span>List</span></Link><br/></li></ul>
    <ul>
    <li className="prajwal"> 
    <Link to='/a11'><span>Employee</span></Link><br/></li></ul>
    <ul>
    <li className="prajwal"> 
    <Link to='/a12'><span>Formm</span></Link><br/></li></ul>
    <ul>
    <li className="prajwal"> 
    <Link to='/a13'><span>Shop</span></Link><br/></li></ul>
    <ul>
    <li className="prajwal"> 
    <Link to='/a14'><span>Studentform</span></Link><br/></li></ul>
    <ul>
    <li className="prajwal"> 
    <Link to='/a15'><span>Employeeform</span></Link><br/></li></ul>
    <ul>
    <li className="prajwal"> 
    <Link to='/a16'><span>Useeffect</span></Link><br/></li></ul> 
    <ul>
    <li className="prajwal"> 
    <Link to='/a17'><span>Product</span></Link><br/></li></ul> 
    <ul>
    <li className="prajwal"> 
    <Link to='/a18'><span>Textfield</span></Link><br/></li></ul> 
   
   

    </div>

   

      
    </>
    
  )
}
