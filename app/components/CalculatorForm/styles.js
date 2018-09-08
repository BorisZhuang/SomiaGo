import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 0,
    paddingHorizontal: 10
  },
  groupContainer: {
    flexDirection: 'column',
    width: '100%',
    borderRadius: BORDER_RADIUS,
    backgroundColor: '#b0b0b0',
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  labelContainer: {
    height: INPUT_HEIGHT,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '50%',
    backgroundColor: '#FFFFFF',
    marginTop: 1,
    marginLeft: 1,
    //backgroundColor: '#b0b0b0',
  },
  labelText: {
    fontWeight: '500',
    fontSize: 15,
    paddingHorizontal: 4,
    color: '#b0b0b0',
  },
  border: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    width: '50%',
    backgroundColor: '#FFFFFF',
    marginTop: 1,
    marginRight: 1,
  },
  input: {
    height: INPUT_HEIGHT,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 8,
    color: '#000000',
  },
  plusMinusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '25%',
  },
  icon: {
    fontSize: 45,
    color: '#FFFFFF',
  }
})
