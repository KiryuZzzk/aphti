import Maps from "../components/Maps/Maps";
import ContactCard from "../components/ContactCard/ContactCard";
import { Box } from "@material-ui/core";

const Contact = (props) => {

  
  const {setPage} = props;



 /* Añadir el FORMS vinculado con el correo */
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <Box display="flex" justifyContent="center" sx={{ minWidth: 275 }}>
        <ContactCard/>
      </Box>
      <Maps/>
    </div>
  )
}

export default Contact