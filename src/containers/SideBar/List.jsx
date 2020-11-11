import React from 'react';
import { UISref} from '@uirouter/react';
//materialui
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
//icons
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

const Lists = () => {
    return (
      <List component="nav">
          <UISref to="layout.home">
          <ListItem button>
              <ListItemIcon>
               <HomeIcon />	
              </ListItemIcon>
              <ListItemText primary="Home"/>
           </ListItem>
		  </UISref>
       
          <UISref to="layout.about">
          <ListItem button>
              <ListItemIcon>
               <InfoIcon />	
              </ListItemIcon>
              <ListItemText primary="About"/>
           </ListItem>
		  </UISref>
      </List>
    )
}

export default Lists
