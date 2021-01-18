import React from 'react';
import Navbar from './components/Navbar';
import MapBoxFC from './components/MapBox';
import './App.scss';

function App(): JSX.Element {
  return (
    <>
      <Navbar/>
      <MapBoxFC/>
    </>
  );
}

export default App;
