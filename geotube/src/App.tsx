import React from 'react';
import Navbar from './components/Navbar';
import MapBoxFC from './components/MapBox';
import LocationUtils from './services/Geolocation';
import './App.scss';

const geolocator = LocationUtils.instance;

function App(): JSX.Element {

  geolocator.getCurrentLocation();

  return (
    <>
      <Navbar/>
      <MapBoxFC/>
    </>
  );
}

export default App;
