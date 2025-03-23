import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 13.7563, // Bangkok latitude (change as needed)
  lng: 100.5018, // Bangkok longitude
};

const GoogleMapComponent = () => {
  const API_KEY = "AIzaSyAZFZJ-aWN73_ADHN0yZ2I6iQnEfFMamks"; // Replace with your actual API Key

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
