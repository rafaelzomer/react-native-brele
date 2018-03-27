import React from 'react';
import { ScrollView, View } from 'react-native';
import Theme from '../theme/Theme';

export default class Screen extends React.Component {
  render() {
    const {children, style, scroll, ...rest} = this.props;
    var Element = undefined;
    var specStyle = {};
    if (scroll) {
      Element = ScrollView;
      specStyle = {height: Theme.getHeight()};
      console.warn('specStyle', specStyle);
    } else {
      Element = View;
    }
    return (
      <Element
        {...rest}
        style={{
          flexGrow: 1,
          position: 'absolute', top: 0, bottom: 0, left: 0, right: 0,
          ...style
        }}>
        {children}
      </Element>
    );
  }
}
