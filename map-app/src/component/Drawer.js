import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class MapDrawer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Drawer open={this.props.drawerIsOpen} docked={false}
                onRequestChange={() => this.props.toggleDrawer()}>
                <MenuItem>
                    <input type="text" id="filterInput" placeholder="Search for names.."
                        value={this.props.query}
                        onChange={(e) => this.props.filterMarker(e.target.value)} 
                    />
                </MenuItem>
                {
                    this.props.places.map((place) => {
                        if(place.visible() === true) {
                            return (
                                <MenuItem key={place.title} 
                                    onClick={() => {
                                        this.props.toggleDrawer();
                                        place.showInfo();
                                }}>
                                    <p>{place.title}</p>
                                </MenuItem>
                            )
                        } 
                    })
                }
            </Drawer>
        )
    }
}