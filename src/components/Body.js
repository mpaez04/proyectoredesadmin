import React from 'react';
import './Body.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

function Body(props){
return(
      <div className="Body">
        <p>{props.practica}</p>
        {
          <h1>LA MEJOR MANERA DE VIAJAR EN TREN</h1>
        }
        {
          <h4>En esta pagina tendras la seguridad de tener tu asiento asegurado gracias a la opcion de seleccion de asiento a tu preferencia, teniendo asi un viaje mas agradable</h4>
        }
        {
          <h3> Gracias por viajar con TKTOURT</h3>
        }
      </div>
    )
}

export default Body;

Body.propTypes={
  practica:PropTypes.string.isRequired,
  temas:PropTypes.array,
}