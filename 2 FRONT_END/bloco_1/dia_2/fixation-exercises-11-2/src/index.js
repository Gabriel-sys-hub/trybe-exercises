import React from 'react';
import ReactDOM from 'react-dom';
// import Image from './App'
import App from './App'
import './pokemon.css'


ReactDOM.render(
  <React.StrictMode>
    <App /> 
    {/* <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cuteeeeee'/>
    <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cuteeeeee'/> */}
  </React.StrictMode>,
  document.getElementById('root')
);
