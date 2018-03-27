import React from 'react';
import { StatusBar, ScrollView, View } from 'react-native';
import Styles from './header.style';
import Text from '../text/Text';
import Theme from '../theme/Theme';

export default class HeaderBar extends React.Component {
  render() {
    const styles = new Styles();
    const {title, leftButton, style, ...rest} = this.props;
    return (
      <View>
        <View style={styles.statusBarStart}/>
        <View style={[styles.container, style]}>
          <StatusBar
            backgroundColor={Theme.get('secondaryColor')}
            barStyle="light-content"
          />
          <View style={
            leftButton ?
            {
              width: '15%',
              paddingRight: 15
            } : null
          }>
            {leftButton}
          </View>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    );
  }
}
