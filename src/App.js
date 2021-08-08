import './App.css';
import arrow from "./icon-arrow.svg";
import { MapContainer, TileLayer, Marker, useMap} from 'react-leaflet';
import icon from "./Icon";
import React,{useState} from "react";
import env from "react-dotenv";
var https = require("https");

function App() {  
  const url="https://geo.ipify.org/api/v1?apiKey=";
  const key=env.API_KEY;
  const [[input,ip,loca,time,isp,lat,lng],setCurrent]=useState(["","","","","",0,0]);
  async function getSet(ipadd) {
    var add="";
    if(ipadd!=="")
        add="&ipAddress="+ipadd;
    https.get(url+key+add,function(response) {
      if(response.statusCode!==200)
          alert("Kindly check the IP Address or contact the developer")
      else{
      console.log(response);
        response.on("data",function(data) {
          var loc=JSON.parse(data);
          setCurrent(["",loc.ip,loc.location.city+", "+loc.location.country,"UTC"+loc.location.timezone,loc.isp,loc.location.lat,loc.location.lng]);
        })
      }
    });
  }
  
  if(ip==="")
      getSet("");
  
  function handleChange(e) {
      var value=e.target.value;
      setCurrent([value,ip,loca,time,isp,lat,lng])
  }
  
  function handleClick(e) {
      var ipadd=input;
      getSet(ipadd);
  }
  
  function MyComponent({center,zoom}) {
      const map=useMap()
      map.setView(center,zoom);
      return null;
  }
  
  return (
    <div className="App">
      <div className="header">
        <p className="Header">IP Address Tracker</p>
        <div className="inputgrp">
          <input type="text" className="input" placeholder="Search for any IP address or domain" aria-label="Search for any IP address or domain" aria-describedby="button-addon2" value={input} onChange={handleChange} />
          <button className="button" type="button" onClick={handleClick}><img src={arrow} alt="send" /></button>
        </div>
      </div>
      <div className="info">
        <div className="flex">
          <div className="data-container">
            <div className="data">            
              <span className="category"> IP ADDRESS </span><br />
              <span className="value">{ip}</span>
            </div>
          </div>
          <div className="data-container">
            <div className="data">            
              <span className="category">LOCATION</span> <br />
              <span className="value">{loca}</span>
            </div>
          </div>
          <div className="data-container">
            <div className="data">            
              <span className="category">TIMEZONE</span> <br />
              <span className="value">{time}</span>
            </div>
          </div>
          <div className="data-container data4">
            <div className="data">            
              <span className="category">ISP</span> <br />
              <span className="value">{isp}</span>
            </div>
          </div>
        </div>
      </div>
      <div id="mapid">
          <MapContainer center={[lat,lng]} zoom={13} scrollWheelZoom={false}>
            <MyComponent center={[lat,lng]} zoom={13} />
          <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[lat,lng]} icon={icon}>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
