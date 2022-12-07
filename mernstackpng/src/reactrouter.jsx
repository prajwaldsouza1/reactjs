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
import Auto from './Auto'
import Example from './Example'
import Button from './Button'
import Check from './Check'
import Web from './Web'
import Employee from './Employee'
import Form from './Form'
import Shop from './Shop'
import Studentform from './Studentform'
import Employeeform from './Employeeform'
import Useeffect from './Useeffect'
import Product from './Product'
import Autocomplete from './Autocomplete'
import Countryselect from './MUI/Autocomplete/Countryselect'
import Group from './MUI/Autocomplete/Group'
import Disable from './MUI/Autocomplete/Disable'
import Customizedhook from './MUI/Autocomplete/Customizedhook'
import Asynchronous from './MUI/Autocomplete/Asynchronous'
import Fixedoptions from './MUI/Autocomplete/Fixedoptions'
import Checkbox from './MUI/Autocomplete/Checkbox'
import Basicbutton from './MUI/Autocomplete/Buttons/Basicbutton'
import Buttongroup from './MUI/Autocomplete/Buttons/Buttongroup'
import Checkboxes from './MUI/Autocomplete/Buttons/Checkboxes.jsx'
import Floatingbutton from './MUI/Autocomplete/Buttons/Floatingbutton'
import Animation from './MUI/Autocomplete/Buttons/Animation'
import Radiogroup from './MUI/Autocomplete/Buttons/Radiogroup'
import Rattings from './MUI/Autocomplete/Buttons/Rattings'
import Select from './MUI/Muiselect/Select'
import Slider from './MUI/Muiselect/Slider'
import Console from './MUI/Muiselect/Console'
import Switch from './MUI/Muiselect/Switch'
import Textfield from './MUI/Muiselect/Textfield'
import Transferlist from './MUI/Muiselect/Transferlist'
import Avatar from './MUI/Muiselect/Avatar'
import Badge from './MUI/Muiselect/Badge'
import Table from './MUI/Muiselect/Table'
import Alert from './MUI/Muiselect/Alert'
import Dialog from './MUI/Muiselect/Dialog'
import Snackbar from './MUI/Muiselect/Snackbar'
import Appbar from './MUI/Muiselect/Appbar'
import Card from './MUI/Muiselect/Card'
import Bottomnavigation from './MUI/Muiselect/Bottomnavigation'
import Drawer from './MUI/Muiselect/Drawer'
import Link from './MUI/Muiselect/Link'
import Menu from './MUI/Muiselect/Menu'
import Pagination from './MUI/Muiselect/Pagination'
import Speeddial from './MUI/Muiselect/Speeddial'
import Tabs from './MUI/Muiselect/Tabs'
import Report from './MUI/Muiselect/Report'

import Navbar from './MUI/Navbar'

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
            <Route exact path='/a18' element={<Autocomplete/>}></Route>
            <Route exact path='/a19' element={<Countryselect/>}></Route>
            <Route exact path='/a20' element={<Group/>}></Route>
            <Route exact path='/a21' element={<Disable/>}></Route>
            <Route exact path='/a22' element={< Customizedhook />}></Route>
            <Route exact path='/a23' element={< Asynchronous />}></Route>
            <Route exact path='/a24' element={< Fixedoptions />}></Route>
            <Route exact path='/a25' element={< Checkbox />}></Route>
            <Route exact path='/a26' element={<Basicbutton />}></Route>
            <Route exact path='/a27' element={<Navbar />}></Route>
            <Route exact path='/a30' element={<Auto />}></Route>
            <Route exact path='/a31' element={<Button />}></Route>
            <Route exact path='/a28' element={<Buttongroup />}></Route>
            <Route exact path='/a29' element={<Checkboxes />}></Route>
            <Route exact path='/a32' element={<Check />}></Route>
            <Route exact path='/a33' element={<Web />}></Route>
            <Route exact path='/a34' element={<Example />}></Route>
            <Route exact path='/a35' element={<Floatingbutton />}></Route>
            <Route exact path='/a36' element={<Animation />}></Route>
            <Route exact path='/a37' element={<Radiogroup />}></Route>
            <Route exact path='/a38' element={<Rattings />}></Route>
            <Route exact path='/a39' element={<Select />}></Route>
            <Route exact path='/a40' element={<Slider />}></Route>
            <Route exact path='/a41' element={<Console />}></Route>
            <Route exact path='/a42' element={<Switch />}></Route>
            <Route exact path='/a43' element={<Textfield />}></Route>
            <Route exact path='/a44' element={<Transferlist />}></Route>
            <Route exact path='/a45' element={<Avatar />}></Route>
            <Route exact path='/a46' element={<Badge />}></Route>
            <Route exact path='/a47' element={<Table />}></Route>
            <Route exact path='/a48' element={<Alert />}></Route>
            <Route exact path='/a49' element={<Dialog />}></Route>
            <Route exact path='/a50' element={<Snackbar />}></Route>
            <Route exact path='/a51' element={<Appbar />}></Route>
            <Route exact path='/a52' element={<Card />}></Route>
            <Route exact path='/a53' element={<Bottomnavigation />}></Route>
            <Route exact path='/a54' element={<Drawer />}></Route>
            <Route exact path='/a55' element={<Link />}></Route>
            <Route exact path='/a56' element={<Menu />}></Route>
            <Route exact path='/a57' element={<Pagination />}></Route>
            <Route exact path='/a58' element={<Speeddial />}></Route>
            <Route exact path='/a59' element={<Tabs />}></Route>
            <Route exact path='/a60' element={<Report />}></Route>
        </Routes>

        </BrowserRouter>      

    </div>
  )
}
