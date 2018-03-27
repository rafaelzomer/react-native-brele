import React from 'react';
import { AsyncStorage, View } from 'react-native';
import Splash from '../splash/Splash';

const STORAGE_KEY = 'goal_storage';
class Storage {
  async init() {
    this._data = {};
    await this._loadData();
  }
  async _loadData() {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    if (typeof data !== 'undefined') {
      this._data = JSON.parse(data) || {};
    }
  }
  async _saveData() {
    const data = JSON.stringify(this._data);
    if (typeof data !== 'undefined') {
      await AsyncStorage.setItem(STORAGE_KEY, data);
    }
  }
  getItem(key) {
    return this._data[key];
  }
  setItem(key, value) {
    return new Promise(async (resolve, reject) => {
      if (value === null) {
        value = '';
      }
      this._data[key] = value;
      await this._saveData();
      resolve();
    });
  }
}
const storage = new Storage();

class StorageInit extends React.Component {
  state = {
    storageLoaded: false
  }
  constructor() {
    super();
    this.load();
  }
  async load() {
    await storage.init();
    this.setState({
      storageLoaded: true
    });
  }
  render() {
    const {storageLoaded} = this.state;
    const {children} = this.props;
    return (
      <View style={{flex: 1}}
        {...this.props}>
        {storageLoaded ? children : <Splash/>}
      </View>
    );
  }
}

export default storage;
export {STORAGE_KEY, StorageInit};
