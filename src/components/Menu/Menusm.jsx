import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import GoogleFontLoader from 'react-google-font-loader';
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../resources/logoAPHTI.png";
import { useMediaQuery } from '@material-ui/core';


const NavBarsm = (props) => {  

  const matches394 = useMediaQuery('(min-width:403px)');
  const {setPage} = props;

  return (
    <>
      <GoogleFontLoader fonts={[{ font: 'Yanone Kaffeesatz', weights: [400, 700] }, { font: 'Bebas Neue', weights: [300,400] }]}/>
      
      <div style={{ backgroundColor: 'red', color: '#ffffff', padding: '2px 0', textAlign: 'right', marginBottom: -40, display: 'flex', justifyContent: 'flex-end' }}>
        {
            matches394 ? <>
            <Typography variant="subtitle1" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: "25px", marginRight:"20px" }}>
            Disponible las 24 horas
        </Typography>
        <FaWhatsapp size={35} />
        <Typography variant="subtitle1" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: "25px", marginLeft:"5px", marginRight:"20px" }}>
            24 6145 1024
        </Typography></> : <>
        <FaWhatsapp size={35} />
        <Typography variant="subtitle1" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: "25px", marginLeft:"5px", marginRight:"20px" }}>
            24 6145 1024
        </Typography></>
        }
</div>

      <AppBar position="sticky" style={{ backgroundColor: '#ffffff', color: '#000000', marginTop: 40 }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between', flexDirection:"column" }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
          {
            matches394 ? <>
            <img src={logo} alt="Logo" style={{ width: 60, marginRight: 10 }} />
            <Typography variant="h6" style={{ marginRight: 20, fontFamily: 'Yanone Kaffeesatz, sans-serif', fontSize:"46px", 
            color:"red", fontWeight: 'bold'}}>
              AMBULANCIAS APHTI
            </Typography></> : <>
            <Typography variant="h6" style={{ marginRight: 20, fontFamily: 'Yanone Kaffeesatz, sans-serif', fontSize:"46px", 
            color:"red", fontWeight: 'bold'}}>
              APHTI
            </Typography></>
}
        
          </div>

          <div style={{ display: 'flex', alignItems: 'center', flexDirection:"row", flexWrap:"wrap" }}>
            <Button onClick={() => {props.setPage("Inicio");window.scrollTo(0, 0);}}>
            <Typography variant="h6" style={{  fontFamily: 'Yanone Kaffeesatz, sans-serif', fontSize:"23px" }}>
              INICIO
            </Typography>
            </Button>
            <Button onClick={() => {props.setPage("Servicios");window.scrollTo(0, 0);}}>
            <Typography variant="h6" style={{  fontFamily: 'Yanone Kaffeesatz, sans-serif', fontSize:"23px" }}>
              SERVICIOS
            </Typography>
            </Button>
            <Button onClick={() => {props.setPage("Nosotros");window.scrollTo(0, 0);}}>
            <Typography variant="h6" style={{  fontFamily: 'Yanone Kaffeesatz, sans-serif', fontSize:"23px" }}>
              NOSOTROS
            </Typography>
            </Button>
            <Button onClick={() => {props.setPage("Contacto");window.scrollTo(0, 0);}}>
            <Typography variant="h6" style={{ fontFamily: 'Yanone Kaffeesatz, sans-serif', fontSize:"23px" }}>
              CONTACTO
            </Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBarsm;
