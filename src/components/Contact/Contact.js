import uniqid from 'uniqid'
import { contact } from '../../portfolio'

import './Contact.css'

 

const Contact = () => {

  if (!contact.email) return null

 
const openWithMail=(email)=>{
   const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
  window.open(gmailUrl, '_blank');
}

  return (

    <section className='section contact center' id='contact'>

      <h2 className='section__title'>Let&apos;s connect!</h2>

      <div style={{textAlign:'center'}}>

      <ul className='skills__list'>

       

          <li key={uniqid()} className='skills__list-item btn btn--plain'>

            <button

        type='button'

        onClick={()=>openWithMail('ayushinaphade@gmail.com')}

        className='btn btn--icon nav__theme'
        style={{backgroundColor: 'inherit'}}
        aria-label='toggle theme'

      >ayushinaphade@gmail.com</button>

          </li>

      

       

      </ul>

      </div>

    </section>

  )

}

 

export default Contact