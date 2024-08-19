import { StyleSheet, Image, View,Text } from 'react-native';


export default function ImageViewer({ selectedImage, pictureText }) {
    const PlaceholderImage = require('../assets/images/no-photo.jpg');
    const imageSource = selectedImage  ? { uri: selectedImage } : PlaceholderImage;
    pictureText=pictureText;
  return (
    <View style={styles.thumbnail}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.texto}>{pictureText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 100,
    borderRadius: 18,
  },
  thumbnail:{
    margin: 10,

  },
  texto:{
    color: "white",
  }
});
