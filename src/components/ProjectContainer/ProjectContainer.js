import { useContext, useEffect } from 'react'
import uniqid from 'uniqid'
import Slideshow from './Slideshow';
import './ProjectContainer.css'
import { ThemeContext } from '../../contexts/theme'
import bebras1 from '../../assets/bebras1.png'
import bebras11 from '../../assets/bebras11.png'
import bebras12 from '../../assets/bebras12.png'
import bebras21 from '../../assets/bebras21.png'
import bebras61 from '../../assets/bebras61.png'
import bebras2 from '../../assets/bebras2.png'
import bebras3 from '../../assets/bebras3.png'
import bebras4 from '../../assets/bebras4.png'
import bebras5 from '../../assets/bebras5.png'
import bebras6 from '../../assets/bebras6.png'
import portowise1 from '../../assets/portowise1.png'
import portowise2 from '../../assets/portowise2.png'
import portowise3 from '../../assets/portowise3.png'
import portowise4 from '../../assets/portowise4.png'
import portowise5 from '../../assets/portowise5.png'
import portowise6 from '../../assets/portowise6.png'
import portowise7 from '../../assets/portowise7.png'
import portowise8 from '../../assets/portowise8.png'
import openminer from '../../assets/openminer.png'
import karmadaan from '../../assets/karmadaan.png'



const ProjectContainer = ({ project }) => {
  
    const [{ themeName }] = useContext(ThemeContext); 
    const color=themeName === 'light' ?  '#5dade2' : 'steelblue';

const imagesBebras = [
 bebras1, bebras11, bebras2, bebras21, bebras3,  bebras6, bebras61, bebras4, bebras5,
];
const imagesPortowise = [
 portowise1, portowise3, portowise4, portowise5, portowise6, portowise7,  portowise8,
];
const imagesOpenMiner = [
openminer
]
const imagesKarmadaan = [
karmadaan
]
  return (

  <div className='project' >

    <h4>{project.name}</h4>
    <br/>
{project.name === 'Bebras' &&

   <Slideshow images={imagesBebras}/>
}

{project.name === 'Portowise: Portfolio Reporting' &&

   <Slideshow images={imagesPortowise}/>
}
{project.name === 'Open Miner' &&

   <Slideshow images={imagesOpenMiner}/>
}
{project.name === 'Karmadaan' &&

   <Slideshow images={imagesKarmadaan}  name={project.name}/>
}
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

 