import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: INPUT_HEIGHT,
  },
  topContainerBorder: {
    borderWidth: 1,
    borderLeftColor: '#E2E2E2',
    borderTopColor: '#E2E2E2',
    borderRightColor: '#E2E2E2',
    borderBottomColor: 'transparent',
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS
  },
  middleContainerBorder: {
    borderWidth: 1,
    borderLeftColor: '#E2E2E2',
    borderTopColor: '#E2E2E2',
    borderRightColor: '#E2E2E2',
    borderBottomColor: 'transparent',
  },
  bottomContainerBorder: {
    borderWidth: 1,
    borderLeftColor: '#E2E2E2',
    borderTopColor: '#E2E2E2',
    borderRightColor: '#E2E2E2',
    borderBottomColor: '#E2E2E2',
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS
  },
  containerBorder: {
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: BORDER_RADIUS,
  },
  labelContainer: {
    width: '30%',
    height: INPUT_HEIGHT,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: 1,
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
    borderRightColor: '#E2E2E2',
    borderBottomColor: 'transparent'
  },
  labelText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 8,
    color: '#b0b0b0',
  },
  inputContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  input: {
    height: INPUT_HEIGHT,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 8,
    color: 'black',
  },
  iconContainer: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderLeftColor: '#E2E2E2',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  icon: {
    fontSize: 35,
    paddingHorizontal: 8,
    color: 'black',
  },
  border: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '#E2E2E2',
  },
});
