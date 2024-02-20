import React from 'react';

const Maps = () => {

    return (
        <div style={{ width: '80%', height: '450px', position: 'relative', margin:"auto" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17898.07564470734!2d-98.1382086461654!3d19.42938296062485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d021d4cdfe9c77%3A0x2a9117f7a92e8a98!2sAPHTI%20Ambulancias!5e0!3m2!1ses-419!2smx!4v1708394495969!5m2!1ses-419!2smx"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Google"
          ></iframe>
        </div>
      );
    };
export default Maps;