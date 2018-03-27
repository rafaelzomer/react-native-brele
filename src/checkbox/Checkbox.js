import React from 'react';
import { View } from 'react-native';
import Text from '../text/Text';
import Button from '../button/Button';
import Styles from './checkbox.style';
// import Icon from 'react-native-vector-icons/Feather';
import Theme from '../theme/Theme';
// import { Ionicons as Icon } from '@expo/vector-icons';

export default class Checkbox extends React.Component {
  state = {
    status: 'unchecked'
  }
  setValue = (value) => {
    let status;
    if (value === true) {
      status = 'checked';
    } else {
      status = 'unchecked';
    }
    this.setState({
      status
    });
  }
  getValue = (status) => {
    switch (status) {
      case 'checked':
        return true;
      case 'unchecked':
        return true;
      default:
        return status;
    }
  }
  componentDidMount() {
    const {value} = this.props;
    this.setValue(value);
  }
  componentWillReceiveProps(nextProps) {
    const {value} = this.props;
    const val = nextProps.value;
    if (val !== value) {
      this.setValue(val);
    }
  }
  handlePress = () => {
    const {onChange} = this.props;
    let {status} = this.state;
    if (status == 'checked') {
      status = 'unchecked';
    } else {
      status = 'checked';
    }
    this.setState({
      status: status
    });
    onChange && onChange(this.getValue(status));
  }
  render() {
    const {status} = this.state;
    const {style, children} = this.props;
    const styles = new Styles();
    return (
      <Button style={[styles.checkboxContainer, style]}
          onPress={this.handlePress}>
        {/* <View style={styles.checkbox}>
          {status == 'checked' ? <Icon name="check-square" color={Theme.get('primaryColor')} size={20}/> : null}
          {status == 'unchecked' ? <Icon name="square" color={Theme.get('primaryColor')} size={20}/> : null}
        </View> */}
        <Text style={styles.label} type="label">{children}</Text>
      </Button>
    );
  }
}
