import React from 'react'
import { View, Image } from 'react-native';
import Screen from 'react-native-brele/screen';
import Button from 'react-native-brele/button';
import Theme from 'react-native-brele/theme';
import ButtonExample from './ButtonExample';
import List, {ListItem} from 'react-native-brele/list';
import Loop from 'react-native-brele/loop';
import Text from 'react-native-brele/text';
import Header from 'react-native-brele/header';
import logo from '../assets/icon.png';
import { Ionicons as Icon } from '@expo/vector-icons';

export default class Menu extends React.Component {
  state = {
    menu: [
      {
        title: 'Button',
        component: ButtonExample
      }, 
      {
        title: 'Input',
        component: ButtonExample
      }
    ]
  }
  chooseMenuOption(menuItem) {
    this.setState({
      currentMenuOption: menuItem
    });
  }
  onBack() {
    this.setState({
      currentMenuOption: null
    }); 
  }
  render() {
    const {menu, currentMenuOption} = this.state;
    return (
      <Screen>
        <Header
          leftButton={
            <Button transparent onPress={() => this.onBack()}>
              <Icon name="ios-add" color={Theme.get('primaryColor')} size={20}/>
            </Button>  
          } 
          title="React Native Brele Demo"/>
        {
          currentMenuOption ?
          <currentMenuOption.component/>
          :
          <List style={{flex: 1}}>
            <Loop
              data={menu}
              render={(menuItem) => (
                <ListItem onPress={item => {this.chooseMenuOption(menuItem)}}
                  key={menuItem.title}
                  info={<Text>{menuItem.title}</Text>}/>
              )}
            />
          </List>
        }
      </Screen>
    );
  }
}
