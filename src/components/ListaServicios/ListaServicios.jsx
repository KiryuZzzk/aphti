import React, { useState } from 'react';
import {Box, Typography, CardContent, Card, Popover} from '@material-ui/core';
import { LiaAmbulanceSolid } from "react-icons/lia";
import { GiFirstAidKit } from "react-icons/gi";
import { MdEmojiTransportation } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHelmetSafety } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";
import { MdFireTruck } from "react-icons/md";
import { FaHospitalUser } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";



function ListaServicios() {
  // Datos de ejemplo para las cards
  const cardsData = [
    { id: 1,icon: "ambulancia" , title: 'Servicio de urgencias', description: 'Respondemos rápidamente a tus emergencias médicas. Con unidades especializadas y personal experto, brindamos atención urgente y eficaz cuando más lo necesitas.' },
    { id: 2,icon: 'traslados', title: 'Traslados programados', description: 'Nos especializamos en traslados programados tanto a nivel nacional como foráneo, así como traslados básicos o de terapia intensiva. Con nosotros, puedes estar seguro de llegar a tu destino de manera confiable y sin preocupaciones, sea cual sea la distancia.' },
    { id: 3,icon: 'terapia', title: 'Terapia intensiva', description: 'Proporcionamos servicios de transporte de terapia intensiva con equipos médicos especializados y atención dedicada. Tu bienestar es nuestra prioridad, y nos aseguramos de brindarte el nivel más alto de cuidado durante todo el trayecto.' },
    { id: 4,icon: 'aseguradora', title: 'Aseguradoras', description: 'Trabajamos con diferentes aseguradoras para tu mayor beneficio.' },
    { id: 5,icon: 'equipo', title: 'Renta de equipo', description: 'Ofrecemos servicios de alquiler de equipo médico esencial, como tanques de oxígeno y camillas, para cubrir tus necesidades de manera rápida y confiable. Confía en nosotros para proporcionarte el equipo necesario para cualquier situación médica que puedas enfrentar.' },
    { id: 6,icon: 'capacitacion', title: 'Capacitación industrial', description: 'Nos enorgullece ofrecer programas de capacitación industrial registrados ante S.T.P.S, adaptados a tus necesidades. Nuestros expertos brindan cursos especializados diseñados para mejorar la seguridad, eficiencia y conocimientos de tu equipo en el entorno laboral.' },
    { id: 7,icon: 'eventos', title: 'Eventos privados', description: 'Nos especializamos en brindar servicios médicos completos para eventos privados. Desde pequeñas reuniones hasta grandes celebraciones, nuestro equipo está capacitado para atender todas tus necesidades médicas, asegurando la seguridad y el bienestar de tus invitados en todo momento.' },
    { id: 8,icon: 'rescate', title: 'Rescate', description: 'Estamos preparados para intervenir en situaciones de rescate con rapidez y eficacia. Nuestro equipo altamente capacitado y equipado con tecnología de vanguardia está listo para responder a emergencias y situaciones críticas, garantizando la seguridad y el bienestar de todos los involucrados.' },
    {id:9, icon:'conocer', title:'Centro Evaluador', description:'Nos enorgullece informar que poseemos registro ante el CONOCER como Centro Evaluador (CE0025-OC061-18) en el estándar de competencia EC0307.1 Atención Prehospitalaria Nivel Básico. Este reconocimiento refleja nuestro compromiso con la excelencia y la capacitación continua de nuestro equipo. Estamos dedicados a garantizar que nuestros servicios de atención prehospitalaria cumplan con los más altos estándares de calidad, proporcionando así la mejor atención posible a nuestra comunidad.'}
  ];

  
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOpenPopover = (event, card) => {
    setSelectedCard(card);
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', maxWidth: "80%", margin: "30px auto" }}>
      {cardsData.map((card) => (
        <Card key={card.id} style={{ width: '200px', margin: '10px', cursor: 'pointer' }} onClick={(event) => handleOpenPopover(event, card)}>
          <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {card.icon === 'ambulancia' && <LiaAmbulanceSolid size={64} color="red" />}
            {card.icon === 'traslados' && <MdEmojiTransportation size={64} color="blue"/>}
            {card.icon === 'terapia' && <GiFirstAidKit size={64} color="red" />}
            {card.icon === 'aseguradora' && <MdHealthAndSafety size={64} color="blue" />}
            {card.icon === 'equipo' && <FaHospitalUser size={64} color="red" />}
            {card.icon === 'capacitacion' && <FaHelmetSafety size={64} color="blue"/>}
            {card.icon === 'eventos' && <BsCalendarDate size={64} color="red"/>}
            {card.icon === 'rescate' && <MdFireTruck size={64} color="blue" />}
            {card.icon === 'conocer' && <PiStudentFill size={64} color="red" />}
            <Typography variant="h6" component="div" align="center" style={{ marginTop: '10px', fontFamily: 'Yanone Kaffeesatz, sans-serif', fontSize: "25px" }}>
              {card.title}
            </Typography>
          </CardContent>
        </Card>
      ))}
      {/* Popover */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}

        PaperProps={{
            style: {
              maxWidth: '400px', // Establece el ancho máximo aquí
              backgroundColor: 'rgba(49, 49, 49,0.8)',
              color: 'white', // Color del texto blanco
              padding:"10px"
            },
          }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h4" component="div" align="center"  style={{marginBottom:"10px", fontFamily: 'Yanone Kaffeesatz, sans-serif'}}>
            {selectedCard?.title}
          </Typography>
          <Typography variant="body1" component="div" align="center">
            {selectedCard?.description}
          </Typography>
        </Box>
      </Popover>
    </div>
  );
}

export default ListaServicios;