import React from 'react';
import {MdLocationOn} from "@react-icons/all-files/md/MdLocationOn";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const containerStyle = {
  
  width: 'auto',
  height: '400px',
};

const center = {
  lat: 60.7749, // Latitude of your desired location
  lng: -122.4194, // Longitude of your desired location
};

const Mapcomponent = () => {
  return (
   
  <div>
    <div style={{marginLeft:"30px", marginRight:"30px",margin:"30px", border:"3px solid black"}}>
        <LoadScript googleMapsApiKey="">
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
    </div>
    <h3 style={{textAlign:"center",fontFamily:"sans-serif",paddingTop:"2px"}}><MdLocationOn/>Add:- Badrinath highway Shivpuri kthya (T.G.) Uttarakhand...</h3>
    </div>
    
  );
};

export default Mapcomponent;
