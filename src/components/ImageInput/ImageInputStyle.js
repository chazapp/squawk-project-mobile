import { StyleSheet } from 'react-native';

const ImageInputStyle = StyleSheet.create({
  touchable: {
    marginTop: '5%',
    width: '40%',
    height: '80%',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    opacity: 0.85,
    borderRadius: 30,
    resizeMode: 'center',
    overflow: 'hidden',
  },
  text: {
    color: 'white',
  },
});

export default ImageInputStyle;
