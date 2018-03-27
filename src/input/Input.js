import React from 'react';
import { TextInput as LibTextInput } from 'react-native';
import Theme from '../theme/Theme';
import Styles from './input.style';

export default class Input extends React.Component {
  render() {
    const styles = new Styles();
    const {style} = this.props;
    return (
      <LibTextInput
        {...this.props}
        underlineColorAndroid={Theme.get('primaryColor')}
        selectionColor={Theme.get('primaryColor')}
        style={[styles.container, style]}
      />
    );
  }
}
