import React, { useState } from 'react';
import './Body.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';
import swal from 'sweetalert';

function Body(props){
  const alerta=()=>{
    swal("Gracias por ayudar en la compra");
  }
  const[framework, setFramework] = useState();
  const cambio=e=>{
    setFramework(e.target.value);
  }
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
        {
          <h5>Seleccione que boleto comprara el cliente</h5>
        }
        {
          <FormGroup className='formGroupRadios'>
          <FormGroup>
            <Input
              id="radio1"
              type="radio"
              value="1"
              checked={framework == 1 ? true: false}
              onChange={cambio}
            />
            <Label for="radio1">
              1._Niño  
            </Label>
          </FormGroup>
          <FormGroup>
            <Input
              id="radio2"
              type="radio"
              value="2"
              checked={framework == 2 ? true: false}
              onChange={cambio}
            />
            <Label for="radio2">
              2._Adulto
            </Label>
          </FormGroup>
          <FormGroup>
            <Input
              id="radio3"
              type="radio"
              value="3"
              checked={framework == 3 ? true: false}
              onChange={cambio}
            />
            <Label for="radio3">
              3._Tercera Edad
            </Label>
          </FormGroup>
          <FormGroup>
            <Input
              id="radio4"
              type="radio"
              value="4"
              checked={framework == 4 ? true: false}
              onChange={cambio}
            />
            <Label for="radio4">
              4._Discapacitado
            </Label>
          </FormGroup>
        </FormGroup>
        }
        {
          <p> Selecciono comprar boleto de la opcion <b>{framework}</b></p>  
        }
        {
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>alerta()}> Comprar</button>
        }
      </div>
    )
}

export default Body;

Body.propTypes={
  practica:PropTypes.string.isRequired,
  temas:PropTypes.array,
}