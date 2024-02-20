import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@material-ui/core';
import { AiFillMedicineBox } from "react-icons/ai";
import { FaHeartbeat } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import GoogleFontLoader from 'react-google-font-loader';
import { useMediaQuery } from '@material-ui/core';

function MainInfo() {

  const matches808 = useMediaQuery('(min-width:808px)');

  return ( <>
  <GoogleFontLoader fonts={[{ font: 'Yanone Kaffeesatz', weights: [400, 700] }, { font: 'Bebas Neue', weights: [100,400,700] }]}/>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' , maxWidth:"60%",
   lineHeight:"35px", margin:"auto", marginTop:"50px", marginBottom:"50px"}}>
  <Typography variant="p" align="center" style={{textAlign: 'center', fontFamily: 'Roboto, sans-serif',fontSize:"20px", fontWeight:"100"}}>
    En APHTI Ambulancias, estamos comprometidos con tu bienestar. 
    Como líderes en servicios de emergencia médica, ofrecemos soluciones de transporte seguro y atención experta para cada necesidad. 
    Tu salud y seguridad son nuestra prioridad número uno.
    </Typography>
    </div>

    {
      matches808? <div style={{ display: 'flex', justifyContent: 'center', backgroundColor:"#D9D9D9", width:"70%", padding:"10px", margin:"60px auto" }}> 
      <Card style={{ flexBasis: '30%', marginRight: '10px' ,border:"2px solid red", maxWidth:"30%", margin:"10px"}}>
        <CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' , }}>
            <Typography variant="h5" component="div" style={{margin:"auto", fontFamily: 'Bebas Neue, sans-serif',fontSize:"35px"}}>TRASLADO SEGURO</Typography>
            <div></div> {/* Esto es solo para alinear el icono superior con el texto */}
          </div>
          <Typography variant="body2" component="p">Traslados que te ofrecen comodidad y atención especializada de principio a fin. 
          Tu bienestar es nuestra prioridad siempre.</Typography>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
            <IconButton >
            <FaHeartbeat size={120} color={"red"}/>
            </IconButton>
          </div>
        </CardContent>
      </Card>

      <Card style={{ flexBasis: '30%', marginRight: '10px' ,border:"2px solid red", maxWidth:"30%", margin:"10px"}}>
        <CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" component="div"  style={{margin:"auto", fontFamily: 'Bebas Neue, sans-serif',fontSize:"35px", }}>EQUIPO PROFESIONAL</Typography>
            <div></div> {/* Esto es solo para alinear el icono superior con el texto */}
          </div>
          <Typography variant="body2" component="p">Contamos con un equipo profesional altamente capacitado y comprometido (paramédicos y médicos), brindándote la atención experta que mereces.</Typography>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
            <IconButton>
              <AiFillMedicineBox size={120} color={"red"}/>
            </IconButton>
          </div>
        </CardContent>
      </Card>

      <Card style={{ flexBasis: '30%' ,border:"2px solid red", maxWidth:"30%", margin:"10px"}}>
        <CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" component="div" align="center" style={{margin:"auto", fontFamily: 'Bebas Neue, sans-serif',fontSize:"35px"}}>PUNTUALIDAD Y EFICACIA</Typography>
            <div></div> {/* Esto es solo para alinear el icono superior con el texto */}
          </div>
          <Typography variant="body2" component="p">Puntualidad y eficacia son nuestros pilares, asegurando que cada traslado se realice con la rapidez y precisión que necesitas.</Typography>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
            <IconButton>
              <FaMapLocationDot size={120} color={"red"}/>
            </IconButton>
          </div>
        </CardContent>
      </Card>
    </div>

    : <div style={{ display: 'flex', justifyContent: 'center', backgroundColor:"#D9D9D9", width:"70%", padding:"10px", margin:"60px auto", flexDirection:"column" }}>
        <Card style={{ flexBasis: '30%', marginRight: '10px' ,border:"2px solid red", maxWidth:"80%", margin:"10px auto"}}>
        <CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' , }}>
            <Typography variant="h5" component="div" style={{margin:"auto", fontFamily: 'Bebas Neue, sans-serif',fontSize:"35px"}}>TRASLADO SEGURO</Typography>
            <div></div> {/* Esto es solo para alinear el icono superior con el texto */}
          </div>
          <Typography variant="body2" component="p">Traslados que te ofrecen comodidad y atención especializada de principio a fin. 
          Tu bienestar es nuestra prioridad siempre.</Typography>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
            <IconButton >
            <FaHeartbeat size={120} color={"red"}/>
            </IconButton>
          </div>
        </CardContent>
      </Card>

      <Card style={{ flexBasis: '30%', marginRight: '10px' ,border:"2px solid red", maxWidth:"80%", margin:"10px auto"}}>
        <CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" component="div"  style={{margin:"auto", fontFamily: 'Bebas Neue, sans-serif',fontSize:"35px", }}>EQUIPO PROFESIONAL</Typography>
            <div></div> {/* Esto es solo para alinear el icono superior con el texto */}
          </div>
          <Typography variant="body2" component="p">Contamos con un equipo profesional altamente capacitado y comprometido (paramédicos y médicos), brindándote la atención experta que mereces.</Typography>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
            <IconButton>
              <AiFillMedicineBox size={120} color={"red"}/>
            </IconButton>
          </div>
        </CardContent>
      </Card>

      <Card style={{ flexBasis: '30%' ,border:"2px solid red", maxWidth:"80%", margin:"10px auto"}}>
        <CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" component="div" align="center" style={{margin:"auto", fontFamily: 'Bebas Neue, sans-serif',fontSize:"35px"}}>PUNTUALIDAD Y EFICACIA</Typography>
            <div></div> {/* Esto es solo para alinear el icono superior con el texto */}
          </div>
          <Typography variant="body2" component="p">Puntualidad y eficacia son nuestros pilares, asegurando que cada traslado se realice con la rapidez y precisión que necesitas.</Typography>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
            <IconButton>
              <FaMapLocationDot size={120} color={"red"}/>
            </IconButton>
          </div>
        </CardContent>
      </Card>
    </div>
    }
      
    

    </>
  );
}

export default MainInfo;
