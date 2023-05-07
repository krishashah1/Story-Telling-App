import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

import Feed from '../Screens/feed';
import CreateStory from '../Screens/createStory';

const Tab = createBottomTabNavigator();

export default class BottomTab extends React.Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size}) => {
            let iconName;

            if (route.name === 'F') {
              iconName = 'phone-iphone';
              return (
                <MaterialIcons name={iconName} color={color} size={size} />
              );
            } else if (route.name === 'CS') {
              iconName = 'book';
              return <Entypo name={iconName} color={color} size={size} />;
            }
          },
        
        })}
        tabBarOptions = {{activeTintColor: "tomato", inactiveTintColor: "gray"}}
        >
        <Tab.Screen name="F" component={Feed} />
        <Tab.Screen name="CS" component={CreateStory} />
      </Tab.Navigator>
    );
  }
}
