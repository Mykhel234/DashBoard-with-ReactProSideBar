import React from 'react'
import GeneralDashboard from "./scenes/General"
import {Routes, Route} from 'react-router-dom'
import SidebarMenu from 'scenes/SidebarMenu'



const App = () => {
  return (
    <div>
      <SidebarMenu/>
      <Routes>
        <Route path='/' element={<GeneralDashboard/>}/>
        {/* <Route path='/a' element={""}/>
        <Route path='/b' element={""}/>
        <Route path='/c' element={""}/>
        <Route path='/d' element={""}/>
        <Route path='/e' element={""}/> */}
      </Routes>
    </div>
  )
}

export default App

