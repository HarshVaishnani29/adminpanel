import React, { useEffect } from 'react'
import Header from '../Header/Header'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from '../../components/Dashboard/Dashboard'
import Admin from '../../components/Body/Admin/Admin'

function MainContent({handleSidebar, handle}) {

  const navigate = useNavigate()

  const getLoginDetail = () => {

    let data = JSON.parse(sessionStorage.getItem("LoginData"));

    if (data === null){
      navigate('/login')
    } else {
      navigate('/')
    }
  }

  useEffect(() => {
    getLoginDetail();
  }, [])

  return (
    <div className='col'>
      <Header handleSidebar={handleSidebar} handle={handle}/>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </div>
  )
}

export default MainContent