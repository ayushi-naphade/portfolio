import { header } from '../../portfolio'

import Navbar from '../Navbar/Navbar'

import './Header.css'
import photo from '../../assets/photo.jpeg'

 

const Header = () => {

  const { homepage, title } = header

 

  return (

    <header className='header center'>

      <h3>

        {homepage ? (

          <a  href={homepage} className='link'>
{title}
            {/* <img style={{borderRadius: '50%'}}width="60" height ="60" alt='myphoto' src={photo} /> */}

          </a>

        ) : (

          /* <img width="60" style={{borderRadius: '50%'}}height ="60" alt='myphoto'src={photo} /> */
        title
        )}

      </h3>

      <Navbar />

    </header>

  )

}

 

export default Header