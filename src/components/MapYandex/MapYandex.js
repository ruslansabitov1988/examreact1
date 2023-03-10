import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const MapYandex = ()=>{

    const defaultState = {
        center: [51.189892, 71.457918],
        zoom: 8,
      };
    
      return (
        <YMaps>
          <Map defaultState={defaultState}>
            <Placemark geometry={[51.189892, 71.457918]} />
          </Map>
        </YMaps>
      );
}

export default MapYandex


