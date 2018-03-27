import Theme from '../theme/Theme';

export default ({flat}) => {
  return {
    touch: {
      width: '100%',
      maxWidth: '100%',
      paddingHorizontal: 10,
      paddingVertical: 10,
      // height:40,
      overflow:'hidden',
      borderColor: 'transparent',
      backgroundColor: flat ? 'transparent' : Theme.get('primaryColor'),
      borderRadius: 0
    },
    text: {
      fontSize: 20,
      textAlign: 'center',
      color: flat ? Theme.get('primaryColor') : Theme.get('primaryContrastColor')
    }
  }
}
