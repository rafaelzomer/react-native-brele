import Theme from '../theme/Theme';

export default () => {
  return {
    container: {
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center'
    },
    avatar: {
      width:100,
      height:100,
      borderRadius: 100
    },
    informations: {
      padding: 20,
      flexDirection: 'column'
    }
  }
}
