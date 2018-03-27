import Theme from '../theme/Theme';
import StylesInput from '../input/input.style';

export default () => {
  const stylesInput = new StylesInput();
  const height = stylesInput.container.height-25;
  // -25;
  return {
    outerContainer: {
      zIndex: 2
    },
    container: {
      borderBottomColor: Theme.get('primaryColor'),
      borderBottomWidth: 1,
      height: height,
      paddingHorizontal: 0,
      paddingVertical: 0,
      backgroundColor: 'transparent'
    },
    result: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderBottomColor: Theme.get('grayColor'),
      borderBottomWidth: 1
    },
    selectedResult: {
      flex: 1,
      flexDirection: 'row',
    },
    resultsContainer: {
      height: 200,
      // paddingTop: height
    },
    resultsModal: {
      flex: 1
    },
    results: {
      flex: 1,
      backgroundColor: Theme.get('lightColor'),
      borderColor: Theme.get('grayColor'),
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      borderWidth: 1,
      width: '100%'
    },
    text: {
      flex: 1
    },
    selectText: {
      color: Theme.get('textGrayColor')
    },
    iconContainer: {
      paddingTop: 10,
      alignItems: 'center',
      width: 40
    }
  }
}
