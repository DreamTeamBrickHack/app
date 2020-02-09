import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '72vw',
    height: '95vh',
  };

export class MapContainer extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        stores: [
                {latitude: 30.5928, longitude: 114.3055}]
      }
    }
  
    displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.latitude,
         lng: store.longitude
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }
  
    render() {
      return (
          <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            id={"mappyBoi"}
            initialCenter={{ lat: 30.5928, lng: 114.3055}}
          >
            {this.displayMarkers()}
          </Map>
      );
    }
  }

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCcd1fjx-MMYOMB8PmIN793o8SO_-t7ZGo'
})(MapContainer);