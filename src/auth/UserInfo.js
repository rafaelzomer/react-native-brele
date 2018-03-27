import React from 'react';
import { StatusBar, ScrollView, View, Image } from 'react-native';
import Styles from './auth.style';
import Text from '../text/Text';
import Theme from '../theme/Theme';
// import firebase from '../firebase/firebase';
import auth from '../auth/auth';

export default class UserInfo extends React.Component {
  state = {
    user: {}
  }
  componentDidMount() {
    const user = auth.user();
    // this.refUserConfig = firebase.database().ref('users/'+user.uid);
    // this.refUserConfig.on('value', (res) => {
    //   const user = res.val();
    //   this.setState({
    //     user
    //   });
    // });
  }
  componentWillUnmount() {
    // if (this.refUserConfig) {
    //   this.refUserConfig.off('value');
    // }
  }
  render() {
    const styles = new Styles();
    const {title, style, ...rest} = this.props;
    const {user} = this.state;
    return (
      <View style={[styles.container, style]}>
        <Image source={require('../../resources/images/user_avatar.png')}
          style={styles.avatar}/>
        <View style={styles.informations}>
          <Text type="title">{user.name}</Text>
          <Text type="subtitle">Pontos: {user.score}</Text>
        </View>
      </View>
    );
  }
}
