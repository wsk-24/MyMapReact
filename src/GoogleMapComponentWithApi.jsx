import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "1000px",
  height: "600px",
};



const center = { lat: 13.4050542, lng: 101.0392197 }; // Default center

const GoogleMapComponentWithApi = () => {
  const API_KEY = "AI-..."; // Replace with your actual API Key
  const [markers, setMarkers] = useState([]); // State for markers

  // Fetch markers from API
  useEffect(() => {
    fetch("http://localhost:5000/api/markers") // Replace with your API URL
      .then((response) => response.json())
      .then((data) => setMarkers(data))
      .catch((error) => console.error("Error fetching markers:", error));
  }, []);

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        {markers.map((marker) => (
          <Marker key={marker.id} position={{ lat: marker.lat, lng: marker.lng }} title={marker.title} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponentWithApi;
