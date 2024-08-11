import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import { gs } from './assets/styles/global';

// Assets
const WelcomeImage = require('./assets/images/welcome-image.jpeg');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={WelcomeImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" color={gs.buttonColors.navy} />
        <Button label="Use this photo"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 2 / 3,
    alignItems: 'center',
  },
});
