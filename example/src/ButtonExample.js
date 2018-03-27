import React from 'react';
import { View } from 'react-native';
import Button from 'react-native-brele/button';
import DemoScreen from './DemoScreen';
import Styles from './app.style';

export default class ButtonExample extends React.Component {
  render() {
    const styles = new Styles();
    return (
      <DemoScreen>
        <View style={styles.viewer}>
          <Button>Normal Button</Button>
        </View>
        <View style={styles.viewer}>
          <Button>Normal Button</Button>
        </View>
      </DemoScreen>
    );
  }
}
