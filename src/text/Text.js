import React from 'react';
import { Text as LibText } from 'react-native';
import Theme from '../theme/Theme';

export default class Text extends React.Component {
  render() {
    let {type, children, muted, style} = this.props;
    if (typeof type == 'undefined')
    {
      type = '';
    }
    let fontWeight = (type == 'title') ? 'bold' : 'normal';
    return (
      <LibText
        style={[{
          fontSize: Theme.get('fontSize'+(type.replace(/\b\w/g, l => l.toUpperCase()))),
          color: muted ? Theme.get('textGrayColor') : Theme.get('textColor'),
          fontWeight
        }, style]}>
        {children}
      </LibText>
    );
  }
}
