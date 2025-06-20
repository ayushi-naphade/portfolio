import uniqid from 'uniqid'


import '../Projects/Projects.css'
import CertificationContainer from './CertificationContainer'
import { certificates } from '../../portfolio'
 
const Certifications = () => {

  if (!certificates.length) return null

 

  return (

    <section id='certifications' className='section projects'>

      <h2 className='section__title'>Certifications</h2>

 

      <div className='certifications__grid' >

        {certificates.map((cert) => (

          <CertificationContainer key={uniqid()} certification={cert} />

        ))}

      </div>

    </section>

  )

}

 

export default Certifications