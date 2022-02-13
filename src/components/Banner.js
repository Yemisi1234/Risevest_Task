import React from 'react';
import './Banner.css';

export default function Banner() {
  return (
    <>
    <div className='container_banner'>
      <div className='container_banner_div'>
          <h1>Join The Rise Community</h1>
          <p>If you want to go far, go together. Our Telegram community surrounds you with others who can help you along your financial journey with tips, support, advice and learning. It's completely free and open to new and seasoned investors.</p>
          <button>Join our Community</button>
      </div>
         <img src='https://risevest.com/_next/static/images/rise-community-09f0a69d1eb80c0a1b8122f8c2e32cac.png' alt='bannerImage'/><br/>
    </div>
       <img src='banner.png' alt='banner'className='banner_img'/>
       </>
  )
}
