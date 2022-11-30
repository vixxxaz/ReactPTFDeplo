import './index.scss'
import { useMap as LeafletMap, TileLayer, MapContainer, Marker, Popup } from 'react-leaflet'



const Maps = ({ center, zoom}) => {
  return (
    <div id='Map'>      
        <MapContainer center={center} zoom={zoom}>
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
                />
            <Marker position={center} >
              <Popup>
                Come for a cofee <br /> when you like
              </Popup>
            </Marker>   
        </MapContainer>        
    </div>
  )
}

export default Maps