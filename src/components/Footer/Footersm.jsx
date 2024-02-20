import React from 'react';
import { Typography} from '@material-ui/core';
import GoogleFontLoader from 'react-google-font-loader';
import { FaWhatsapp } from "react-icons/fa";

const Footersm = () => {  
  return (
    <>
      <GoogleFontLoader fonts={[{ font: 'Yanone Kaffeesatz', weights: [400, 700] }, { font: 'Bebas Neue', weights: [300,400] }]}/>
      
      <div style={{ backgroundColor: 'red', color: '#ffffff', padding: '2px 0', textAlign: 'right', marginBottom: -40, display: 'flex', justifyContent: 'flex-end' }}>
        <FaWhatsapp size={35} />
        <Typography variant="subtitle1" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: "25px", marginLeft:"5px", marginRight:"20px" }}>
            24 6145 1024
        </Typography>
</div>

    </>
  );
};

export default Footersm;
