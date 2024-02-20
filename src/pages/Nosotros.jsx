
import { Typography } from "@material-ui/core"
import NosotrosInfo from "../components/NosotrosInfo/NosotrosInfo"

const Nosotros = (props) => {



  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' , maxWidth:"60%",
   lineHeight:"35px", margin:"auto", marginTop:"50px", marginBottom:"50px", flexDirection:"column"}}>
    <Typography style={{fontFamily: 'Yanone Kaffeesatz, sans-serif', fontSize: "45px",
borderBottom:"5px solid red", marginBottom:"10px" }}>NOSOTROS</Typography>
  <Typography variant="p" align="center" style={{textAlign: 'center', fontFamily: 'Roboto, sans-serif',fontSize:"20px", fontWeight:"100"}}>
  A.P.H.T.I AMBULANCIAS fue la primera empresa privada en el estado de Tlaxcala prestadora de servicios médicos de urgencia y traslados con 24 años de experiencia.
Durante este tiempo hemos adquirido mejor
equipo, unidades y se ha ido capacitando a los
paramédicos en diferentes áreas para brindarle un
mejor servicio logrando así satisfacer sus
necesidades. <br/>
Somos más que un equipo médico; somos tu apoyo en momentos críticos.  
    </Typography>
    <Typography variant="p" style={{ fontFamily: 'Roboto, sans-serif',fontSize:"20px", fontWeight:"100", marginTop:"20px"}}>
            &#8226; Nuestro equipo consiste en equipo profesional, tanto paramédicos como médicos a bordo de las unidades.
            <br />
            &#8226; Nos respaldan 24 años de experiencia ofreciendo la mejor calidad.
            <br />
            &#8226; Contamos con toda la documentación y permisos que otorga la COEPRIST quien es la institución que rige a estos servicios a nivel nacional.
          </Typography>
    </div>
    <NosotrosInfo/>
    </>
  )
}

export default Nosotros