import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


const MapBoxFC: React.FC = () => {
    let container: any;

    let map: any;

    useEffect(() => {
        map = new mapboxgl.Map({
            accessToken: "pk.eyJ1Ijoic2hvdGFzdGFnZSIsImEiOiJja2p4MnlvMmQwb3M0Mm5tcmlyZXcwZ2oyIn0.CnvFtxPckF5aB7eDH3JU1A",
            container: container,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [139.767, 35.681],
            zoom: 13,
        });

        map.addControl(new mapboxgl.NavigationControl());
    });

    return (
        <div className={'map'} ref={(e) => (container = e)} style={{ width: '100vw', height: '100vh'}} />
    );
}

export default MapBoxFC;
