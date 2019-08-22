import ReactDOM from 'react-dom';
import React from 'react';

function Hello(props) {
  return <h1>Hello at {props.now}</h1>;
}

ReactDOM.render(<Hello now={new Date().toISOString()} />, 
  document.getElementById('root')
);