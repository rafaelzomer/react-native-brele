import React from 'react'
import { View } from 'react-native'
import { Route } from 'react-router-native'
import Text from '../text/Text';
import HeaderBar from '../header/HeaderBar';
import Loop from '../loop/Loop';
import Styles from './start.style';
import ListItem from '../list/ListItem';
import List from '../list/List';

export default class Start extends React.Component {
  state = {
    goals: []
  }
  componentDidMount() {
    // this.refGoals = firebase.database().ref('goals');
    // this.refGoals.on('value', (res) => {
    //   var goals = res.val();
    //   if (!goals) {
    //     return;
    //   }
    //   this.setState({
    //     goals
    //   });
    // });
  }
  componentWillUnmount() {
    // if (this.refGoals) {
    //   this.refGoals.off('value');
    // }
  }
  viewGoalInfo = (goal) => {
    alert('ops: '+goal.description);
  }
  render() {
    const styles = new Styles();
    const { goals } = this.state;
    return (
      <View style={{flex: 1}}>
        <HeaderBar title="Seus objetivos"/>
        <List style={styles.list}>
          <Loop
            data={goals}
            render={(goal, key) => (
              <ListItem key={key}
                onPress={() => this.viewGoalInfo(goal)}
                info={<Text>{goal.description}</Text>}
                additional={<Text style={{color: '#be4bdb'}}>delicius!</Text>}
                icon={<Text style={{color: '#fcc419'}}>{goal.coins||0}c</Text>}/>
            )}
          />
        </List>
      </View>
    );
  }
}
