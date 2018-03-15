import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default function MapDrawer({drawerIsOpen, toggleDrawer}) {
    return (
        <Drawer open={drawerIsOpen} docked={false}
            onRequestChange={() => toggleDrawer()}>
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