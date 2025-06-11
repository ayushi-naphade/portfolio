import uniqid from 'uniqid'

import { skills } from '../../portfolio'

import './Skills.css'

 

const Skills = () => {

  if (!skills.length) return null

 

  const backend = [

    'Java',

    'Spring Boot',

    'Junit',

    'Python',

    'Django REST Framework',

    'SQL',

  ]

 

 const tools =[

  'Git',

  'Github',

  'Gitlab',

  'JIRA',

  'Confluence',

  'Azure',

  'Agile',

  'Scrum',

  ]

 

   const libraries = [

    'Material UI',

    'Ant Design',

    'Leaflet',

    'Ag Grid',

    'React Data Table',

  ]

 

  return (

    <section className='section skills' id='skills'>

      <h2 className='section__title'>Skills</h2>

   

      <div style={{textAlign:'center'}}>

      <ul className='skills__list'>

        {skills.map((skill) => (

          <li key={uniqid()} className='skills__list-item btn btn--plain'>

            {skill}

          </li>

        ))}

       

      </ul>

      <div>

      <br/>

      <br/>

        {/* <h5 style={{textAlign:'center'}}>Backend</h5>

      <ul className='skills__list'>

        {backend.map((skill) => (

          <li key={uniqid()} className='skills__list-item btn btn--plain'>

            {skill}

          </li>

        ))}

       

      </ul>

      </div>

      <br/>

      <br/>

      <div>

        <h5 style={{textAlign:'center'}}>Libraries</h5>

      <ul className='skills__list'>

        {libraries.map((skill) => (

          <li key={uniqid()} className='skills__list-item btn btn--plain'>

            {skill}

          </li>

        ))}

       

      </ul>

      </div>

      <br/>

      <br/>

      <div>

        <h5 style={{textAlign:'center'}}>Miscellaneous</h5>

      <ul className='skills__list'>

        {tools.map((skill) => (

          <li key={uniqid()} className='skills__list-item btn btn--plain'>

            {skill}

          </li>

        ))}

       

      </ul>

      </div>

      </div> */}

      </div>

      </div>

    </section>

  )

}

 

export default Skills

 