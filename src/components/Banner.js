import React from 'react';
import './Banner.css';
import PropTypes from 'prop-types';

function Banner({texto}){
      
return(
      <div className="Banner">
            <h4>Administrador</h4>
      </div>
      
    )
}

export default Banner;


Banner.propTypes={
      texto:PropTypes.string.isRequired,
}
  