import React from 'react';
import { Text } from 'react-native';
import Menu from './Menu';
import Theme from 'react-native-brele/theme';
import {ModalInit} from 'react-native-brele/modal';
import {StorageInit} from 'react-native-brele/storage';

export default class App extends React.Component {
  componentWillMount() {
    Theme.init({
      primaryColor: '#845ef7',
      secondaryColor: '#6741d9'
    });
  }
  render() {
    return (
      <StorageInit>
        <ModalInit>
          <Menu/>
        </ModalInit>
      </StorageInit>
    );
  }
}
