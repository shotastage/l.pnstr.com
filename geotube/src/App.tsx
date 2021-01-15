import React from 'react';
import Navbar from './components/Navbar';
import MapBox from './components/MapBox';
import './App.scss';

function App(): JSX.Element {
  return (
    <>
      <Navbar/>
      <MapBox/>
    </>
  );
}

export default App;
