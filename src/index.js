import React from 'react';
import { render } from 'react-dom';

const Hello = ({ name }) => {
  return <h1>hola {name}!</h1>;
};

render(<Hello name="mundo" />, document.getElementById('app'));
