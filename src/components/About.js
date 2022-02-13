import React from 'react';
import './About.css'
import AboutItems from './AboutItems';


export default function About() {
  return (
    <div>
        <div className='about_container'>
            <h1>From The People Who Use Rise</h1>
            <p>Our mission at Risevest is to empower more people just like you to achieve your personal financial goals.</p>
            <div className='about_div'>
            <AboutItems description='Like everyone, I want to be protected from currency fluctuations and Rise helps me with that. The fixed income and real estate asset classes are my preferred things about Rise. I 💚 seeing how my returns perform on a daily basis.
             It demonstrates safety and also puts me at a lower risk of losing money!'
             img='babajide.png'
             title='Babajide'
             />
             <AboutItems description='I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.'
             img='jesse.png'
             title='Jesse'
             />
              <AboutItems description='I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.'
             img='lade.png'
             title='Lade
             UX Researcher'
             />
            </div>
            
        </div>
    </div>
  )
}

