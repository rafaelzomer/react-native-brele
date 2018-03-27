import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Styles from './listItem.style';

export default class ListItem extends React.Component {
  render() {
    const styles = new Styles();
    const {children, style, info, additional, icon, ...rest} = this.props;
    if (children) {
      return <View style={[styles.container, style]}>{children}</View>
    }
    return (
      <TouchableOpacity {...rest} style={[styles.container, style]}>
        <View style={{flex: 9}}>
          {info}
        </View>
        {additional ?
          <View style={{flex: 3}}>
            {additional}
          </View>
          : null
        }
        {icon ?
          <View style={{flex: 2, alignItems: 'center'}}>
            {icon}
          </View>
          : null
        }
      </TouchableOpacity>
    );
  }
}
