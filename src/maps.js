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
        stores: []
      }
    }

      callAPI  = async () => {
        const res =  await fetch('http://localhost:9000/api/disaster');
        let data = await res.json();
        console.log(data)
        let coordinates = [];
        data.data.map(disaster => {
          const lon = disaster.fields.country[0].location.lon
          const lat = disaster.fields.country[0].location.lat
          coordinates.push({latitude: lat, longitude: lon})
        })
        this.setState({...this.state, stores: coordinates});
        console.log(coordinates);
      }
      
      componentWillMount() {
        this.callAPI()         
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
            zoom={4}
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