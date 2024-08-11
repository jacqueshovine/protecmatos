import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View, Text} from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import { gs } from './assets/styles/global';
import Title from './components/Title';

// Assets
const WelcomeImage = require('./assets/images/welcome-image.jpeg');

export default function App() {
  return (
    <View style={styles.container}>
      <Title label="Liste" level='2' />
      <FlatList 
        data={
          [{key: 'a'}, {key: 'b'}]} 
        renderItem={({item}) => <Text style={styles.listItem}>{item.key} </Text>} 
      />
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" color={gs.buttonColors.navy} icon='picture-o' />
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
    padding: 64,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  listItem: {
    color: 'white',
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
