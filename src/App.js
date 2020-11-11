import React from 'react';
//uiRouter
import { UIRouter, pushStateLocationPlugin} from '@uirouter/react';
//components
import Home from './components/home/Home';
import About from './components/about/About';
import Layout from './containers/Layout/Layout';
//materialui
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './config/themeConfig'

//states de ruta
const states = [
  {
    name : 'layout',
    component : Layout
  },
  {
    name : 'layout.home',
    url  : '/',
    component : Home
  },{
    name : 'layout.about',
    url  : '/about',
    component : About
  }
]

const plugins = [
  pushStateLocationPlugin
];

const App = () => {
  return (
   	<ThemeProvider theme={theme}>
      <UIRouter plugins={plugins} states={states}>
        <Layout />
      </UIRouter>
    </ThemeProvider> 
  )
}

export default App;
