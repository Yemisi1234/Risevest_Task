import React from 'react';
import './Cards.css'

export default function Goals() {
  return (
    <>
    <div className='goal_container'>
      <img src="wealth.png" className='wealth' alt=""/>
      <div className='goal_description'>
          <h3>The Rise App</h3>
          <h1 style={{ paddingTop: '20px', paddingBottom: '20px'}}>Save for your <span style={{color: 'purple'}}>future</span></h1>
          <p style={{ width: '80%', lineHeight: 1.5}}>With Rise, you achieve your financial goals faster. Save for school, your home, vacations, your children’s future and more.</p>
          <button style={{ width: '40%', height: '50px', fontSize: '15px', background: 'teal', borderRadius: '5px', color: '#fff', fontWeight: 'bolder', outline: 'none',
        marginTop: '20px', border: 'none'}}>Start Saving</button>
      </div>
    </div>
    
    {/* <img src='https://www.figma.com/file/Hevc45ogbUy06wVFK6Yzta/Home-Page?node-id=1%3A1765' style={{height: '70vh', width: '100%'}} alt=''/> */}
    </>
  )
}
