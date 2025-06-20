import { useContext } from 'react'
import uniqid from 'uniqid'

import './ProjectContainer.css'
import { ThemeContext } from '../../contexts/theme'

const ProjectContainer = ({ project }) => {
  
    const [{ themeName }] = useContext(ThemeContext); 
    const color=themeName === 'light' ?  '#5dade2' : 'steelblue';
  return (

  <div className='project' >

    <h4>{project.name}</h4>



    <p className='project__description'>{project.description}</p>
<br/>



         
      <ul className='project__stack'>
        {project.stack.map((item) => (

          

          <li key={uniqid()} className='tech__stack-item' style={{borderColor: color, color}}>

           {item}

          </li>

        ))}
      </ul>


 

  </div>

)
}
 

export default ProjectContainer

 