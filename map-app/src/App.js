import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './component/Map.js'
import MapDrawer from './component/Drawer.js'
import Head from './component/Head.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerIsOpen: false,
    }
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
          <MapDrawer drawerIsOpen={this.state.drawerIsOpen} toggleDrawer={this.toggleDrawer}/>
          <Map/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
