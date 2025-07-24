import React, { useState, useEffect } from 'react';




const Slideshow = ({images, name}) => {
  const [index, setIndex] = useState(0);
const styles = {
  container: {
    position: 'relative',
    // width: '600px',
    // height: '300px',
    margin: 'auto',
    overflow: 'hidden',
    borderRadius: '5px',
    boxShadow: '2px 2px 2px rgba(0,0,0,0.2)',
    
  },
  image: {
    width: name ==='Karmadaan' ? '100px' : '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'all 0.5s ease-in-out',
  },
//   controls: {
//     position: 'absolute',
//     top: '50%',
//     width: '100%',
//     display: 'flex',
//     justifyContent: 'space-between',
//     transform: 'translateY(-50%)',
//   },

//   button: {
//     background: 'rgba(0, 0, 0, 0.5)',
//     border: 'none',
//     color: 'white',
//     padding: '10px 20px',
//     fontSize: '18px',
//     cursor: 'pointer',
//     borderRadius: '4px',
//   },
};
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div style={styles.container}>
      <img src={images[index]} alt={`Slide ${index}`} style={styles.image} />
      {/* <div style={styles.controls}>
        <button type='button' onClick={()=>prevSlide()} style={styles.button}>❮</button>
        <button type='button' onClick={()=>nextSlide()} style={styles.button}>❯</button>
      </div> */}
    </div>
  );
};



export default Slideshow;