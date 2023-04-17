import React from 'react'
import Header from '../Header/Header'

function MainContent({handleSidebar}) {
  return (
    <div className='col'>
      <Header handleSidebar={handleSidebar}/>
    </div>
  )
}

export default MainContent;                                                                           