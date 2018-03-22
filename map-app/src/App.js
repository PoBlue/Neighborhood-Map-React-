import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './component/Map.js'
import MapDrawer from './component/Drawer.js'
import Head from './component/Head.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {placesData} from './Data.js';
import {Place} from './model/Place.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerIsOpen: false,
      map: null,
      infoWindow: null,
      places: [],
    }
  }

  initMap = (map, infoWindow) => {

    let places = [];

    placesData.map((data) => {
        const place = new Place(window, data, map, infoWindow, 'aes');        
        place.setMarker(); 
        places.push(place);
    });

    this.setState({map, infoWindow, places});
  }

  toggleDrawer = () => {
    this.setState((prevState) => {
      return {drawerIsOpen: !prevState.drawerIsOpen}
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Head toggleDrawer={this.toggleDrawer}/>
          <MapDrawer drawerIsOpen={this.state.drawerIsOpen} toggleDrawer={this.toggleDrawer}
            infoWindow={this.state.infoWindow} map={this.state.map}
          />
          <Map initMap={this.initMap}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
