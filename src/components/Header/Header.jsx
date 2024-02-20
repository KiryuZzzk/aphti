import React from 'react';
import ambulancia from '../../resources/ambulancias/ambulancia.jpg'
import { Typography, Button } from '@material-ui/core';
import GoogleFontLoader from 'react-google-font-loader';
import { useMediaQuery } from '@material-ui/core';


const Header = () => {
  const matches437 = useMediaQuery('(min-width:437px)');
  return ( <>
  <GoogleFontLoader fonts={[{ font: 'Yanone Kaffeesatz', weights: [400, 700] }, { font: 'Bebas Neue', weights: [100,400,700] }]}/>
    <div
      style={{
        backgroundImage: `url("${ambulancia}")`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 38%',
        position: 'relative',
        height: '500px', // Ajusta la altura según tus necesidades
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(255, 0, 0, 0.9) 10%, rgba(255, 0, 0, 0) 80%)',
        }}
      ></div>

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
        
        }}
      >

        {matches437?  <>     <Typography variant="h6" style={{ fontFamily: 'Yanone Kaffeesatz, sans-serif', fontSize:"90px",  
            color:"white", fontWeight: 'bold',marginTop: 'auto'}}>
              AMBULANCIAS APHTI
        </Typography>
        <Typography variant="h6" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize:"35px",  
            color:"white",marginBottom: 'auto', fontWeight: 100}}>
              Atención Prehospitalaria Técnica Integral
        </Typography> </> 
        : <>
        <Typography variant="h6" style={{ fontFamily: 'Yanone Kaffeesatz, sans-serif', fontSize:"50px",  
        color:"white", fontWeight: 'bold',marginTop: 'auto'}}>
          AMBULANCIAS APHTI
    </Typography>
    <Typography variant="h6" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize:"20px",  
        color:"white",marginBottom: 'auto', fontWeight: 100}}>
          Atención Prehospitalaria Técnica Integral
    </Typography>
    </> 
         }

        <Button variant="contained" style={{ fontFamily: 'Bebas Neue, sans-serif', borderRadius:"15px", fontSize:"20px",
      backgroundColor:"red", color:"white", marginBottom:"30px", fontWeight: 100}}>
          Contáctanos
        </Button>
      </div>
    
    </div>

    </>
  );
};

export default Header;
