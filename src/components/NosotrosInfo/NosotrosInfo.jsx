import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import Galeria from '../Galeria/Galeria';

function NosotrosInfo() {



  return (
        <>
      <Card style={{ width: '60%', margin:"20px auto", borderRadius:"5%", }}>
        <CardContent>
           <Typography style={{fontFamily: 'Yanone Kaffeesatz, sans-serif', fontSize: "30px",
            borderBottom:"5px solid red", backgroundColor:"white", marginBottom:"10px", textAlign:"center", padding:"0" }}>DIRECTOR GENERAL</Typography>
          <Typography variant="body1" style={{textAlign:"center", marginBottom:"10px", fontSize:"20px", fontWeight:"100"}}>
          <strong>ISRAEL PEREZ BAUTISTA</strong> </Typography>
           <Typography style={{fontSize:"20px", fontWeight:"100"}}>Director General y fundador de APHTI AMBULANCIAS Y/O CENTRO CAPACITADOR DE TLAXCALA S.A.S DE C.V. </Typography>
          
        </CardContent>
      </Card>
      <Card style={{ width: '60%', margin:"20px auto", borderRadius:"5%", }}>
        <CardContent style={{}}> 
        <Typography style={{fontFamily: 'Yanone Kaffeesatz, sans-serif', fontSize: "30px",
borderBottom:"5px solid red", backgroundColor:"white", marginBottom:"10px", textAlign:"center", padding:"0" }}>NUESTROS CLIENTES</Typography>
        
        <Galeria/>

        </CardContent>
      </Card>
      <Card style={{ width: '60%', margin:"20px auto", borderRadius:"5%", }}>
        <CardContent style={{}}> 
        <Typography style={{fontFamily: 'Yanone Kaffeesatz, sans-serif', fontSize: "30px",
borderBottom:"5px solid red", backgroundColor:"white", marginBottom:"10px", textAlign:"center", padding:"0" }}>HOSPITALES</Typography>
          <Typography variant="body1" style={{backgroundColor:"white", padding:"10px", borderRadius:"1%", fontSize:"20px", fontWeight:"100"}}>
            &#8226; Hospital Cedros, Tlaxcala.
            <br /><br />
            &#8226; Clínica de Jesús.
            <br /><br />
            &#8226; Hospital San Francisco de Asís.
            <br /><br />
            &#8226; Hospital Ángeles, Apizaco.
            <br /><br />
            &#8226; Clinica Gastromedik.

          </Typography>
        </CardContent>
      </Card>
      </>
  );
}

export default NosotrosInfo;
