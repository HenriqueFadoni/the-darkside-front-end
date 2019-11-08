import React from 'react';

import logoPlanet from '../../../../assets/images/logo-planet.png';
import logoOrbit from '../../../../assets/images/logo-orbit.png';

const AnimatedLogo: React.FC = () => {
  return (
    <div className="login-page__form-logo--container">
      <div className="login-page__form-logo--planet">
        <img src={logoPlanet} />
      </div>
      <div className="login-page__form-logo--orbit">
        <img src={logoOrbit} />
      </div>
    </div>
  );
}

export default AnimatedLogo;
