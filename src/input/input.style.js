import Theme from '../theme/Theme';

export default () => {
  return {
    container: {
      height: 60,
      borderColor: Theme.get('textColor'),
      fontSize: Theme.get('fontSize'),
      color: Theme.get('textColor')
    }
  }
}
