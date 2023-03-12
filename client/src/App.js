import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import {NavLink,Routes,Route} from 'react-router-dom'
import Consult from './Consult';
import {BrowserRouter} from 'react-router-dom'
import Add from './Add';
import Update from './Update';
import Delete from './Delete';
function App() {
return  ( <>
    <BrowserRouter>
    
    <NavLink to="consult">consult</NavLink>
   <NavLink to="add">add</NavLink>
    <NavLink to="update">update</NavLink>
    <NavLink to="delete">delete</NavLink> 

    <Routes>
        <Route path='/consult' element={<Consult></Consult>}></Route>
        <Route path='/add' element={<Add></Add>}></Route>
        <Route path='/update' element={<Update></Update>}></Route>
        <Route path='/delete' element={<Delete></Delete>}></Route>

    </Routes>
    
    </BrowserRouter>
</>
 )
}

export default App;
