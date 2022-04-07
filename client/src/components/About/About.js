import React from 'react';
import { useState } from 'react';
import AboutApi from '../../api/AboutApi';
import "./about.css";
import AboutInfo from './AboutInfo';

const About = () => {
    const [items, setItems] = useState(AboutApi);
  return (
    <div className='container'>
       <div className='about-content'>
           <div className='about'>
           {items.map((item) => {
            return <AboutInfo key={item.id} item={item} setItems={setItems} />;
          })}
           </div>
       </div>
    </div>
  )
}

export default About
