import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";

const Marker = ({ pm }) => {
  return (
    <div
      style={{
        backgroundColor: pm > 2.5 ? "red" : "yellow",
        width: "10px",
        height: "10px",
        borderRadius: "10px",
      }}
    >
      .
    </div>
  );
};

export default function SimpleMap() {
  const [sensors, setSensors] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8888/api/sensors")
      .then((res) => setSensors(res.data));
  }, []);
  console.log(sensors);
  const defaultProps = {
    center: {
      lat: sensors.length !== 0 ? sensors[0].long : 10.6035 ,
      lng: sensors.length !== 0 ? sensors[0].long : 2.5578,
    },
    zoom: 9.5,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "70vh", width: "70%", marginTop: '10px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {sensors.map((sensor) => (
          <Marker key={sensor.id} lat={sensor.long} lng={sensor.lang} pm={sensor.pm} />
        ))}
      </GoogleMapReact>
    </div>
  );
}
