import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer'

import Home from '../Screens/home';
import BottomTab from './bottomTab';

const Drawer = createDrawerNavigator();

export default class DrawerTab extends React.Component{
  render(){
    return(
        <Drawer.Navigator>
        <Drawer.Screen name = "H" component = {Home}/>
        <Drawer.Screen name = "BT" component= {BottomTab}/>
        </Drawer.Navigator>
    )
  }
}