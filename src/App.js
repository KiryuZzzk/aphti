import NavBar from './components/Menu/Menu';
import NavBarsm from './components/Menu/Menusm';
import Footer from './components/Footer/Footer';
import Footersm from './components/Footer/Footersm';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import { useState } from 'react';
import { useMediaQuery } from '@material-ui/core';



function App() {
  const [page, setPage] = useState("Inicio");
  const matches1120 = useMediaQuery('(min-width:1120px)');

  return <div>
    {
    matches1120 ? <NavBar setPage={setPage} page={page}/> : <NavBarsm setPage={setPage} page={page} />
    }
    {
      (page === "Inicio") && <Inicio setPage={setPage} page={page}/>
    }
        {
      (page === "Servicios") && <Servicios setPage={setPage} page={page}/>
    }
        {
      (page === "Nosotros") && <Nosotros setPage={setPage} page={page}/>
    }
        {
      (page === "Contacto") && <Contacto setPage={setPage} page={page}/>
    }

    {
    matches1120 ? <Footer/>: <Footersm/>
    }


</div>
}

export default App;
