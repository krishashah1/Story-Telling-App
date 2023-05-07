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

var mycustomFonts = {
  'Bubblegum-Sans': require('../Fonts/BubblegumSans-Regular.ttf'),
};
export default class Home extends React.Component {
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

  render() {
    if (!this.state.isFontLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Welcome To Storytelling App</Text>
          </View>
          <View style={styles.cardContainer}>
            <Image
              source={require('../assets/story_image_1.png')}
              style={styles.storyImage}></Image>
          </View>
          <View style={styles.textContainer}>
            Note: Use the navigation to read stories.
          </View>

          <View style={{ flex: 0.08 }} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
    textAlign: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  storyImage: {
    width: '90%',
    height: RFValue(250),
    alignSelf: 'center',
  },
  textContainer: {
    paddingTop: RFValue(20),
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
    textAlign: 'center',
  },
});
