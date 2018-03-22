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
                    <input type="text" id="filterInput" placeholder="Search for names.."/>
                </MenuItem>
                <MenuItem>
                    <ul id="filter" data-bind="foreach: filterList">
                        <li className="result" data-bind="text: title, click: $parent.resultClickHandler"></li>
                    </ul>
                </MenuItem>
            </Drawer>
        )
    }
}