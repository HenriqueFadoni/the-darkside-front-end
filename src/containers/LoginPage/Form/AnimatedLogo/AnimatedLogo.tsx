import React from 'react';

import logoPlanet from '../../../../assets/images/logo-planet.png';
import logoOrbit from '../../../../assets/images/logo-orbit.png';

const AnimatedLogo: React.FC = () => (
  <div className="interactive-logo--container">
    <div className="interactive-logo--planet">
      <img src={logoPlanet} alt="Darkside's Interactive Planet Logo"/>
    </div>
    <div className="interactive-logo--orbit">
      <img src={logoOrbit} alt="Darkside's Interactive Orbit Logo"/>
    </div>
  </div>
);

export default AnimatedLogo;
