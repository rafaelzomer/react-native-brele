import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Text from '../text/Text';
import Styles from './button.style';

export default class Button extends React.Component {
  render() {
    const {children, flat, style, width, ...rest} = this.props;
    const styles = new Styles({flat});
    const childrenIsString = typeof children == 'string';
    return (
      <View style={{
        width: (style && style.width) || '100%'
      }}>
        <TouchableOpacity {...rest}
          style={[styles.touch, style]}
          >
          {childrenIsString ?
            <Text style={styles.text}>
              {children}
            </Text>
          : children}
        </TouchableOpacity>
      </View>
    );
  }
}
