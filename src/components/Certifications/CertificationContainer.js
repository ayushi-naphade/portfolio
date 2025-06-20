import '../ProjectContainer/ProjectContainer.css'
import az900 from './az900.png'
import ai900 from './ai900.png'
import image from './image.png'


const CertificationContainer = ({ certification }) => (

  <div className='project' style={{textAlign:'left'}}>

{certification.img === 'az900' &&
    <div><img width="100" height="100"alt={certification.img} src={az900}/><div ><h5>{certification.name}</h5> <p style={{fontStyle: 'italic', fontSize: '14px'}}>{certification.date}</p></div></div>
}
 {certification.img === 'ai900' &&
    <div><img width="100" height="100" alt={certification.img} src={ai900}/><div ><h5>{certification.name}</h5> <p style={{fontStyle: 'italic',fontSize: '14px'}}>{certification.date}</p></div></div>
}
{certification.img === 'meta' &&
    <div><img style={{marginTop: '5px'}}width="100" height="70" alt={certification.img} src={image}/><div ><br/><h5>{certification.name}</h5> <p style={{fontStyle: 'italic',fontSize: '14px'}}>{certification.date}</p></div></div>
}
  </div>

)

 

export default CertificationContainer

 