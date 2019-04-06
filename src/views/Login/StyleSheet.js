/* write */
import { StyleSheet } from 'react-native';
import { ThemeColorText } from 'src/style/GeneralStyleSheet';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  background: {
    width: '100%',
    height: '100%',
  },
  topContainer: {
    top: '12%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '40%',
  },
  name: {
    color: ThemeColorText,
    fontSize: 28,
  },
  bottomContainer: {
    top: '15%',
    margin: '2%',
    justifyContent: 'space-between',
  },
});

export default Styles;
