import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaFacebookSquare } from 'react-icons/fa';
import { IoLogoWhatsapp } from "react-icons/io";
import { useMediaQuery } from '@material-ui/core';

const ContactCard = () => {
    const matches680 = useMediaQuery('(min-width:680px)');

  return ( <>
    {matches680?
          <Card style={{ width: '60%', margin:"20px auto", borderRadius:"5%" }}>
          <CardContent>
             <Typography style={{fontFamily: 'Yanone Kaffeesatz, sans-serif', fontSize: "30px",
              borderBottom:"5px solid red", backgroundColor:"white", marginBottom:"10px", textAlign:"center", padding:"0" }}>CONTACTO</Typography>
<Grid container spacing={2} alignItems="center">
          <Grid item>
            <MdEmail color="red" size={40} />
          </Grid>
          <Grid item>
            <Typography variant="body1" style={{fontSize:"20px"}}>Correo electrónico: APHTI76@gmail.com</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <MdPhone color="red" size={40}/>
          </Grid>
          <Grid item>
            <Typography variant="body1" style={{fontSize:"20px"}}> Teléfono (oficina): 24 1417 6189</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
          <IoLogoWhatsapp color="green" size={40}/>
          </Grid>
          <Grid item>
            <Typography variant="body1" style={{fontSize:"20px"}}>Celular: 24 6145 1024</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
          <FaFacebookSquare aria-label="Facebook.com" color="#3b5998" size={40} onClick={() => window.open('https://www.facebook.com/profile.php?id=100057444039574')} style={{cursor:"pointer"}}/>
          </Grid>
          <Grid item>
            <Typography variant="body1" style={{fontSize:"20px", cursor:"pointer"}} onClick={() => window.open('https://www.facebook.com/profile.php?id=100057444039574')}>Ambulancias APHTI</Typography>
          </Grid>
        </Grid>
          </CardContent>
        </Card>
        :
        <Card style={{ width: '80%', margin:"20px auto", borderRadius:"5%" }}>
        <CardContent>
           <Typography style={{fontFamily: 'Yanone Kaffeesatz, sans-serif', fontSize: "30px",
            borderBottom:"5px solid red", backgroundColor:"white", marginBottom:"10px", textAlign:"center", padding:"0" }}>CONTACTO</Typography>
<Grid container spacing={2} alignItems="center">
        <Grid item>
          <MdEmail color="red" size={40} />
        </Grid>
        <Grid item>
          <Typography variant="body1" style={{fontSize:"20px"}}>Correo electrónico: APHTI76@gmail.com</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <MdPhone color="red" size={40}/>
        </Grid>
        <Grid item>
          <Typography variant="body1" style={{fontSize:"20px"}}> Teléfono (oficina): 24 1417 6189</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
        <IoLogoWhatsapp color="green" size={40}/>
        </Grid>
        <Grid item>
          <Typography variant="body1" style={{fontSize:"20px"}}>Celular: 24 6145 1024</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
        <FaFacebookSquare aria-label="Facebook.com" color="#3b5998" size={40} onClick={() => window.open('https://www.facebook.com/profile.php?id=100057444039574')} style={{cursor:"pointer"}}/>
        </Grid>
        <Grid item>
          <Typography variant="body1" style={{fontSize:"20px", cursor:"pointer"}} onClick={() => window.open('https://www.facebook.com/profile.php?id=100057444039574')}>Ambulancias APHTI</Typography>
        </Grid>
      </Grid>
        </CardContent>
      </Card>
    }
        </>
  );
};

export default ContactCard;