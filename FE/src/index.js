import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD
=======
import { ChakraProvider } from '@chakra-ui/react';
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
  </React.StrictMode>
=======
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81
);
