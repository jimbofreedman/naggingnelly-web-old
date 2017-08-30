import React from 'react';
import config from '../../config';

function Footer() {
  return (
    <div>
      <a href={config.endpoint} >API</a>
    </div>
  );
}

export default Footer;
