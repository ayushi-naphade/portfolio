import uniqid from 'uniqid'

import '../ProjectContainer/ProjectContainer.css'



const ExperienceContainer = ({ experience }) => (

  <div className='project' style={{textAlign:'left', margin: 0}}>

    <div><h4>{experience.name}<i>{experience.date}</i></h4></div>

    <p className='project__description'><ul style={{listStyleType: 'disc', listStylePosition:'outside'}}>{experience.description.map((item)=>(
        <li key={uniqid()} className='project__stack-item'>{item}</li>
    ))}</ul></p>
 


  </div>

  

)

 

export default ExperienceContainer

 