import {StyleSheet, View } from 'react-native';
import ImageComponent from './src/image-component/image-component';
import TitleComponent from './src/title-component/title-component';


export default function App() {
  return (
    <View style={styles.container}>
      <TitleComponent/>
      <ImageComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
