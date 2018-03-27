import Theme from '../theme/Theme';

export default () => {
  return {
    checkboxContainer: {
      flexDirection: 'row',
      backgroundColor: 'transparent',
      alignItems: 'center',
    },
    checkbox: {
      width: 20,
      height: 20,
      backgroundColor: 'transparent'
    },
    label: {
      paddingHorizontal: 5,
      flex: 1
    }
  }
}
