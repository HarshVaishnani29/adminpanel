import React from 'react'
import Header from '../Header/Header'
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Admin from './Admin/Admin';

function MainContent({handleSidebar}) {
  return (
    <div className='col'>
      <Header handleSidebar={handleSidebar}/>
      <Routes> 
        <Route path='/' element={<Dashboard />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </div>
  )
}

export default MainContent;                                                                           