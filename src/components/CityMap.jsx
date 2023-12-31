import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import getCoordinates from "../commun/getcoordinates";

const CityMap = ({ cityName }) => {
  const API_KEY = "5b20e67cf85a0c3bc8d73c6eacde70ff";
  const mapRef = useRef(null);

  useEffect(() => {
    const initializeMap = async () => {
      try {
        const { lat, lon } = await getCoordinates(cityName, API_KEY);

        if (!lat || !lon) {
          throw new Error("Corrdinates not available for this city");
        }

        if (!mapRef.current) {
          // Leaflet map initialization
          const map = L.map("map").setView([lat, lon], 13);

          // Add a base map layer (you can choose a different tile provider)
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
          }).addTo(map);

          // Save the map instance to the ref
          mapRef.current = map;

          // Add a marker at the city's location
          L.marker([lat, lon]).addTo(map);
          console.log("the map is loaded");
        } else {
          // Update map center and marker location
          mapRef.current.setView([lat, lon], 13);
          mapRef.current.eachLayer((layer) => {
            if (layer instanceof L.Marker) {
              layer.setLatLng([lat, lon]);
            }
          });
          console.log("the map is updated");
        }
      } catch (err) {
        console.log(err);
      }
    };

    initializeMap();
  }, [cityName]);

  return <div id="map" className="h-[300px] w-1/2 mx-6 my-20 rounded-lg"></div>;
};

CityMap.propTypes = {
  cityName: PropTypes.string.isRequired,
};
export default CityMap;
