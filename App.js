import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"

import DrawerTab from './Navigation/drawer';
import "./pollyfills";

export default class StoryTelling extends React.Component{
  render(){
    return(
        <NavigationContainer>
        <DrawerTab/>
        </NavigationContainer>
    )
  }
}