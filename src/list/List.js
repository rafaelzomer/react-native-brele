import React from 'react';
import { ScrollView, View } from 'react-native';
import Styles from './list.style';

export default class List extends React.Component {
  render() {
    const styles = new Styles();
    const {children, style, ...rest} = this.props;
    return (
      <View style={[styles.container, style]}>
        {children}
      </View>
    );
  }
}
