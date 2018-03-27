import React from 'react';
import { View } from 'react-native';

export default class DemoScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, padding: 20}}>
        {this.props.children}
      </View>
    );
  }
}
