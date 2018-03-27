import { Platform, PixelRatio, Dimensions } from 'react-native';


// const {
//   width: SCREEN_WIDTH,
//   height: SCREEN_HEIGHT,
// } = Dimensions.get('window');

// // based on iphone 5s's scale
// const scale = SCREEN_WIDTH / 320;

function normalize(size) {
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(size))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(size)) - 2
  }
}

const theme = {
  primaryColor: '#228be6',
  primaryContrastColor: '#fff',
  secondaryColor: '#1864ab',
  secondaryContrastColor: '#fff',
  lightColor: '#fff',
  grayColor: '#f1f3f5',
  textGrayColor: '#adb5bd',
  textColor: '#363636',
  fontSize: normalize(20),
  fontSizeTitle: normalize(25),
  fontSizeSubtitle: normalize(22),
  fontSizeLabel: normalize(18),
  fontSizeDetail: normalize(14),
}

export default {
  theme: theme,
  init: (config) => {
    const {height, width} = Dimensions.get('window');
    this.width = width;
    this.height = height;
    this.theme = {...theme, ...config};
  },
  get: (propName) => {
    return this.theme[propName];
  },
  getWidth: (value) => {
    return this.width * ((value||100)/100);
  },
  getHeight: (value) => {
    return this.height * ((value||100)/100);
  }
}
