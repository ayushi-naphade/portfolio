import React, { useState, useContext, useEffect } from 'react';
import './Accordian.css'
import uniqid from 'uniqid';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { ThemeContext } from '../../contexts/theme'

const Accordian = ({ name, firm, location, date, description, currActive, setCurrActive }) => {
     const [{ themeName }] = useContext(ThemeContext);
   
  const [isActive, setIsActive] = useState(false);

  useEffect(()=>{
if(name===currActive) {
  setIsActive(true);
} else {
  setIsActive(false);
}
  },[currActive])
useEffect(()=>{
if(date === 'Feb 2023 - Present') {
    setIsActive(true);
    setCurrActive(name);
} 
},[])
  return (
    <div style={{marginBottom: '0.3em'}} className="accordion-item">
      <button style={{ borderRadius: '2px',width: '100%', backgroundColor: themeName === 'dark' ? '#23283e': '#fcfcfc'}} type='button' className="accordion-title" onClick={() => {setIsActive(!isActive); setCurrActive(name);}}>
        <span style={{display: 'flex'}}>{isActive ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/>}&nbsp;<p style={{fontWeight: '550', textAlign: 'left', fontSize: '16px', marginRight: '10px'}}>{name} &middot; {firm} &middot; {location}</p></span>
      <span style={{fontSize:"14px"}}><i>{date}</i></span>
      </button>
      {isActive && <div style={{ paddingLeft: '2.5em', borderRadius: '2px',width: '100%', backgroundColor: themeName === 'dark' ? '#23283e': '#fcfcfc'}} className="accordion-content">
        <p className='project__description'><ul style={{listStyleType: 'disc', listStylePosition:'outside'}}>{description.map((item)=>(
        <li key={uniqid()} className='project__stack-item'>{item}</li>
    ))}</ul></p>
 
        </div>}
    </div>
  );
};

export default Accordian;