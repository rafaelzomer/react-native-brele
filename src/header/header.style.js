import Theme from '../theme/Theme';

export default () => {
  return {
    container: {
      paddingLeft: 20,
      flexDirection: 'row',
      height: 60,
      alignItems: 'center',
      backgroundColor: Theme.get('secondaryColor')
    },
    statusBarStart: {
      height: 24,
      backgroundColor: Theme.get('secondaryColor')      
    },
    text: {
      color: Theme.get('secondaryContrastColor')
    }
  }
}
