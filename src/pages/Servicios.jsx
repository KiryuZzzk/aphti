import ListaServicios from "../components/ListaServicios/ListaServicios"
import { Typography } from "@material-ui/core"


const Servicios = (props) => {



  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' , maxWidth:"60%",
   lineHeight:"35px", margin:"auto", marginTop:"50px", marginBottom:"50px", flexDirection:"column"}}>
    <Typography style={{fontFamily: 'Yanone Kaffeesatz, sans-serif', fontSize: "45px",
borderBottom:"5px solid red", marginBottom:"10px" }}>SERVICIOS</Typography>
  <Typography variant="p" align="center" style={{textAlign: 'center', fontFamily: 'Roboto, sans-serif',fontSize:"20px", fontWeight:"100"}}>
  Contamos con un equipo profesional y dedicado que se compromete a brindar servicios 
  de la más alta calidad en el cuidado médico y transporte. Desde traslados terrestres y 
  aéreos hasta atención de urgencias y capacitación industrial, estamos aquí para cubrir 
  todas tus necesidades médicas con experiencia y dedicación incomparables.
    </Typography>
    </div>
    <ListaServicios/>
    </>
  )
}

export default Servicios