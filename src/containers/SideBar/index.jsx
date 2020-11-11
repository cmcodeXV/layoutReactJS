import React from 'react';
//materialui
import {makeStyles,Drawer,Divider} from '@material-ui/core'
import List from './List'
import img from '../../assets/img/img.png'

//styles
const styles = makeStyles(theme => ({
    drawer:{
        width: 100,
        flexShrink: 0
    },
    drawerPaper:{
        width: 220
    }, 
    toolbar: theme.mixins.toolbar,
    logo:{
        width: 120,
        height: 60,
        marginLeft: 35  
    }
}))

const SideBar = (props) => {
    
    //styles
    const classes = styles()

    return (
      <Drawer 
       className={classes.drawer}
       classes={{ paper: classes.drawerPaper}}
       anchor="left"
       variant={props.variant}
       open={props.open}
       onClose={props.onClose ? props.onClose : null}
       > 
         <div className={classes.toolbar}>
         <img src={img} className={classes.logo} />
         </div>
         <Divider/>
         <List/>
      </Drawer>
    )
}

export default SideBar
