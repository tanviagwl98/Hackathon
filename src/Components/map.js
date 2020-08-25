import React, { Component } from "react";
//import { Map, InfoWindow, GoogleApiWrapper,  Marker } from 'google-maps-react';
//import Img from './assets/images/loc.png';
import "./loc.css";
//import {auth} from "../firebase";


class Location extends Component {
  
  render() {
    return (
      <div className = "container">
      
      <div className="dd-wrapper">
          <select> Select Location
          <option selected value = "Select a Location" >Select a location</option>
          <option>Khatima</option>
          <option>Kotdwar</option>
        </select> 
      </div>
      </div>
        
      
    );
  }
}

export default Location;
