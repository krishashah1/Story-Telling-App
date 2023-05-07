import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { FlatList } from 'react-native-gesture-handler';

import Story_card from './story_card';
var story = require('./temp_stories.json');

var mycustomFonts = {
  'Bubblegum-Sans': require('../Fonts/BubblegumSans-Regular.ttf'),
};

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFontLoaded: false,
    };
  }

  async loadFont() {
    await Font.loadAsync(mycustomFonts);
    this.setState({
      isFontLoaded: true,
    });
  }
  componentDidMount() {
    this.loadFont();
  }
  myKeyExtractor = (index) => index.toString();
  myrenderItem = ({ item: krisha }) => {
    return <Story_card mystory={krisha} />;
  };

  render() {
    if (!this.state.isFontLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require('../assets/profile_img.png')}
                style={styles.iconImage}
              />
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Storytelling App </Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <FlatList
              data={story}
              keyExtractor={this.myKeyExtractor}
              renderItem={this.myrenderItem}
            />
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#15193c' },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: { flex: 0.07, flexDirection: 'row' },
  appIcon: { flex: 0.3, justifyContent: 'center', alignItems: 'center' },
  iconImage: { width: '100%', height: '100%', resizeMode: 'contain' },
  appTitleTextContainer: { flex: 0.7, justifyContent: 'center' },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  cardContainer: { flex: 0.85 },
});
