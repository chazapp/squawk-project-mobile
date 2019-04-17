import { StyleSheet } from 'react-native';

const SourceListStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '5%',
  },
  infoContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  host: {
    fontSize: 20,
  },
  link: {
    fontSize: 18,
  },
});

export default SourceListStyle;
