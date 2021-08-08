import L from 'leaflet';
import location from "./icon-location.svg";
import "./Icon.css";

const iconPerson = new L.Icon({
    iconUrl: location,
    iconRetinaUrl: location,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export default iconPerson;