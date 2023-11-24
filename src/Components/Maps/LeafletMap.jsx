import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LeafletMap = () => {
  return (
    <MapContainer
      center={[-26.3037, -48.8484]} /* Coordenadas de Joinville */
      zoom={13}
      style={{ width: '100%', height: '400px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution={'&copy; <a href="https://www.openstreetmap.org/copyright">'+
        'OpenStreetMap</a> contributors'}
      />
      <Marker position={[-26.3037, -48.8484]}> {/* Marcador em Joinville */}
        <Popup>
          Joinville, SC, Brasil
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
