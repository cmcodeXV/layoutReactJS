import React, { useState } from 'react';
import Header from '../Header/Header';
//uiRouter
import { UIView } from '@uirouter/react';
//materialui
import SideBar from '../SideBar/index';
import {makeStyles, Hidden} from '@material-ui/core'

//styles
const styles = makeStyles(theme => ({
	root:{
		display: 'flex'
	},
	toolbar: theme.mixins.toolbar,
    content:{
        flexGrow: 1,
		backGroundColor: theme.palette.background.default,
		padding: theme.spacing(3)
	}
  
}))

const Layout = () => {
	
	//styles
	const classes = styles()

	const [open, setOpen] = useState (false)

    //function open sidebar
	const openAction = ()=> {
		setOpen(!open)

	}

	return (
	     <div className={classes.root}>
			 <Header openAction={openAction}/>
			 <Hidden xsDown>
			  <SideBar variant="permanent" open={true}/>
			 </Hidden>
			 <Hidden smUp>
			  <SideBar variant="temporary" open={open} onClose={openAction}/>
			 </Hidden>

			<div className={classes.content}>
				<div className={classes.toolbar}>
					<UIView />
				</div>
			</div>

		 </div>
	
			
	)
  }


export default Layout;