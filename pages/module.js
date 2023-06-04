import React, { useState } from 'react';
import { sayHello } from 'hejsannpm';


function ButtonFunction() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
  sayHello();
    setMessage('kolla i konsolen');
  };

  return (
    <div>
      <button onClick={handleClick}>Tryck på mig</button>
      <p>{message}</p>
    </div>
  );
}

export default ButtonFunction;

