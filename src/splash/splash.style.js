import Theme from '../theme/Theme';

export default () => {
  return {
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Theme.get('secondaryColor')
    },
    image: {
      width: Theme.getWidth(50),
    }
  }
}
