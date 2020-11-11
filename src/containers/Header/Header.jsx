import React from 'react';
//materialui
import {AppBar,Toolbar, Typography, makeStyles,IconButton, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

//styles
const useStyle = makeStyles(theme => ({
	offset: theme.mixins.toolbar,
	  marginBottom: "1rem", // margen opcional,
	  menuButton: {
			marginRight: theme.spacing(2),
			[theme.breakpoints.up('sm')]: {
				display: 'none',
			}
		},
	  title: {
		flexGrow: 1	 
	  },
	  appBar: {
		[theme.breakpoints.up('sm')]: {
            width: `calc(100% - 220px)`,
            marginLeft: 240,
        }
	}
  }));

const Header = (props) => {
	//estilos
	const classes = useStyle();

	return (
		<AppBar className={classes.appBar}>
			<Toolbar>
				<IconButton 
				 color="inherit" 
				 aria-label="menu" 
				 className={classes.menuButton}
				 onClick={() => props.openAction()}>
					<MenuIcon/>
				</IconButton>
				<Typography variant="h6" className={classes.title}>
				Name
				</Typography>
				<Button variant="text" color="inherit">
					Login
				</Button>
			</Toolbar>
		</AppBar>

	)
}

export default Header










