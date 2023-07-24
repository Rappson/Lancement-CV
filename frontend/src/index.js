import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import Homepage from './components/homepage/homepage';
import Header from './components/global-components/Header';
import Footer from './components/global-components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Homepage />
    <Footer />
  </React.StrictMode>
);
