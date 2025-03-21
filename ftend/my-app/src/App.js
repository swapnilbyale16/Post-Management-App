import React, { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Nav from './Comp/Nav'
import Home from './Comp/Home'
import Reg from './Comp/Reg'
import Login from './Comp/Login'
import Logout from './Comp/Logout'
import All from './Comp/All'
import Sport from './Comp/Sport'
import Weth from './Comp/Weth'
import Bs from './Comp/Bs'
import Health from './Comp/Health'
import Politics from './Comp/Politics'
import Education from './Comp/Education'
import Ct from './Comp/Ct'
import Pdm from './Comp/Pdm'
import Admin from './Comp/Admin'
import Addpost from './Comp/Addpost'
import Edit from './Comp/Edit'
 
function App() {
  let [state,setState] = useState({"_id":"","name":"","token":"","role":""})
  let updstate=(obj)=>{
    setState({...state,...obj})
  }
  let obj = {"state":state,"updstate":updstate}


  return (
    <BrowserRouter>
    <Ct.Provider value={obj}>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}>
      <Route path='/' element={<All/>}/>
      <Route path='/sport' element={<Sport/>}/>
      <Route path='/business' element={<Bs/>}/>
      <Route path='/weather' element={<Weth/>}/>
      <Route path='/health' element={<Health/>}/>
      <Route path='/politics' element={<Politics/>}/>
      <Route path='/education' element={<Education/>}/>
      <Route path='/post-by-me' element={<Pdm/>}/>
      </Route>
      <Route path='/reg' element={<Reg/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/edit' element={<Edit/>}/>
      <Route path='/add-post' element={<Addpost/>}/>
    </Routes>
    </Ct.Provider>
    </BrowserRouter>
  )
}

export default App