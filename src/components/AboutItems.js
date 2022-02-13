import React from 'react';
import './About.css';

export default function AboutItems(props) {
  return (
    <div className='aboutitems_container'>
        <p className='about_description'>{props.description}</p>
        <div className='aboutUs'>
            <img src={props.img} alt="about_img"/>
            <p>{props.title}</p>
        </div>
    </div>
  )
}
