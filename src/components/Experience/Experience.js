import uniqid from 'uniqid'

import { useState } from 'react';
import '../Projects/Projects.css'
import ExperienceContainer from './ExperienceContainer'
import Accordian from './Accordian';
import { experience } from '../../portfolio'


const Experience = () => {

  if (!experience.length) return null
const [currActive, setCurrActive] = useState('');
 

  return (

    <section id='experience' className='section projects'>

      <h2 className='section__title'>Experience</h2>

 

      {/* <div className='experience__grid' >

        {experience.map((exp) => (

          <ExperienceContainer key={uniqid()} experience={exp} />

        ))}

      </div> */}

      <div className="accordion">
        {experience.map(({ name, firm, location, date, description }) => (
          <Accordian currActive={currActive} setCurrActive={setCurrActive} name={name} firm={firm} location={location} date={date} description={description} />
      
        ))}
      </div>

    </section>

  )

}

 

export default Experience