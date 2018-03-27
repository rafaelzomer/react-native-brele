import React from 'react';
import { View, Image } from 'react-native';
import Styles from './splash.style';

export default class Splash extends React.Component {
  render() {
    const {img} = this.props; 
    const styles = new Styles();
    return (
      <View style={styles.container}>
        <Image source={img}
          style={styles.image}
          resizeMode="contain"/>
      </View>
    );
  }
}
