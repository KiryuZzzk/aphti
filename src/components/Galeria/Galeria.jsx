import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import aba from '../../resources/clientes/aba.png';
import afirme from '../../resources/clientes/afirme.png';
import aig from '../../resources/clientes/aig.png';
import axxa from '../../resources/clientes/axxa.png';
import banorte from '../../resources/clientes/banorte.jpg';
import consulmed from '../../resources/clientes/consulmed.jpg';
import das from '../../resources/clientes/das.jpg';
import gea from '../../resources/clientes/gea.jpg';
import general from '../../resources/clientes/general.jpg';
import hdi from '../../resources/clientes/hdi.png';
import ike from '../../resources/clientes/ike.png';
import inbursa from '../../resources/clientes/inbursa.jpg';
import intermedic from '../../resources/clientes/intermedic.jpg';
import mapfre from '../../resources/clientes/mapfre.jpg';
import mediaccess from '../../resources/clientes/mediaccess.jpg';
import pronatura from '../../resources/clientes/pronatura.png';
import qualitas from '../../resources/clientes/qualitas.jpg';
import zurich from '../../resources/clientes/zurich.png';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  root: {
    position: 'relative',
    maxWidth: 600,
    margin: 'auto',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
    transition: 'transform 0.3s ease',
  },
  slideshowContainer: {
    position: 'relative', // Cambiar a relativa
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideshowButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
  },
  prevButton: {
    left: 0, // Mover a la izquierda
  },
  nextButton: {
    right: 0, // Mover a la derecha
  },
}));

const images = [
  aba, afirme, axxa, aig, banorte, consulmed, das, gea, general, hdi, ike, inbursa, intermedic, mapfre, mediaccess, pronatura, qualitas, zurich
];

function Galeria() {
  const classes = useStyles();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const matches691 = useMediaQuery('(min-width:691px)');

  return (
    <div className={classes.root}>
      <div className={classes.slideshowContainer}>
        <IconButton className={`${classes.slideshowButton} ${classes.prevButton}`} onClick={prevSlide}>
          <NavigateBeforeIcon />
        </IconButton>
        {
          matches691?  <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className={classes.image} style={{height:"300px", width:"auto"}}
        />
        :  <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className={classes.image} style={{height:"150px", width:"auto"}}
      />
        }
        <IconButton className={`${classes.slideshowButton} ${classes.nextButton}`} onClick={nextSlide}>
          <NavigateNextIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Galeria;