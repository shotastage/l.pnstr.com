import React, { Component } from 'react';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


class MapBox extends Component {

    //
    map: any;
    
    //
    container: any;
        
    componentDidMount() {
        this.map = new mapboxgl.Map({
            accessToken: "pk.eyJ1Ijoic2hvdGFzdGFnZSIsImEiOiJja2p4MnlvMmQwb3M0Mm5tcmlyZXcwZ2oyIn0.CnvFtxPckF5aB7eDH3JU1A",
            container: this.container,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [139.767, 35.681],
            zoom: 13,
        });

        this.map.addControl(new mapboxgl.NavigationControl());
    }

    render() {
        return <div className={'map'} ref={(e) => (this.container = e)} style={{ width: '100vw', height: '100vh'}} />;
    }
}

export default MapBox;
