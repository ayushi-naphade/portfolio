import GitHubIcon from '@material-ui/icons/GitHub'

import LinkedInIcon from '@material-ui/icons/LinkedIn'

import Typewriter from 'typewriter-effect';
import { about } from '../../portfolio'

import './About.css'
import image from '../../assets/image.png';
import ResumeDoc from '../../assets/ResumeDoc.pdf'

const About = () => {

  const { name, role, description, descriptionTwo, resume, social } = about

  
  return (

    <div className='about center' style={{display: 'flex'}}>

<div>
      {name && (

        <h1>

          <span className='about__name'><span><span>{name}</span></span></span>

        </h1>

      )}
      
      
      

<div style={{marginTop: '1.5em'}}>
  
<p style={{display: 'flex', fontSize: '30px', fontWeight: 600}}>A &nbsp;<Typewriter
  options={{
    strings: ['Software Engineer', 'React Developer', 'Fullstack Developer','UI Enthusiast'],
    autoStart: true,
    loop: true,
    delay: 60,
    deleteSpeed: 40,
    wrapperClassName: 'typewriter',
    cursorClassName: 'cursor'
  }}
/></p>

</div>
    
      <br/>

      <p className='about__desc' style={{  marginTop: '1em'}}>{description && description}</p>

 

      <p className='about__desc'>{descriptionTwo && descriptionTwo}</p>

      <div className='about__contact center'>

        {resume && (

          <a href={ResumeDoc} download="ResumeDoc.pdf" rel="noopener noreferrer">

            <span type='button' className='btn btn--outline'>

              Resume

            </span>

          </a>

        )}

 

        {social && (

          <>

            {social.github && (

              <a

                href={social.github}

                aria-label='github'

                className='link link--icon'

              >

                <GitHubIcon />

              </a>

            )}

 

            {social.linkedin && (

              <a

                href={social.linkedin}

                aria-label='linkedin'

                className='link link--icon'

              >

                <LinkedInIcon />

              </a>

            )}

          </>

        )}

      </div>
      </div>
<div > <img src={image} alt="developer"/></div>
    </div>

  )

}

 

export default About