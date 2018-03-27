import React from 'react';
import { View, Modal, TouchableOpacity, FlatList, Keyboard } from 'react-native';
import Input from '../input/Input';
import Text from '../text/Text';
import Button from '../button/Button';
import Styles from './select.style';
// import Icon from 'react-native-vector-icons/Feather';

export default class Select extends React.Component {
  state = {
    value: null,
    renderValue: null,
    showResults: false,
    options: []
  }
  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }
  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  componentDidMount() {
    const { options } = this.props;
    // this.setState({
    //   options
    // });
  }
  componentWillReceiveProps(nextProps) {
    const { options } = this.props;
    // if(options && options !== nextProps.options) {
      this.setState({
        options: nextProps.options
      });
    // }
  }
  _keyboardDidShow = () => {
    this._setResultModalPosition();
  }
  _keyboardDidHide = () => {
    this._setResultModalPosition();
  }
  _handleResultClick = (item) => {
    const {onChange} = this.props;
    this.setState({
      showResults: false,
      renderValue: this._renderResult(item)
    });
    onChange && onChange(item);
  }
  _setResultModalPosition(showResults) {
    var _this = this;
    if (typeof showResults === 'undefined') {
      showResults = this.state.showResults;
    }
    if (showResults) {
      this.refs.selectView.measure( (fx, fy, width, height, px, py) => {
        console.warn('fy', fy);
        console.warn('py', py);
        _this.setState({
          specs: {
            // marginTop: py,
            marginLeft: px,
            width: width
          },
          showResults: true
        });
      });
    }
  }
  _handleOpen = () => {
    const showResults = true;
    this.setState({
      showResults
    });
    this._setResultModalPosition(showResults);
  }
  _closeResults = () => {
    this.setState({
      showResults: false
    });
  }
  _renderResult(data) {
    const {renderResult} = this.props;
    if (renderResult) {
      return renderResult(data);
    } else {
      return data;
    }
  }
  _renderView(data) {
    const styles = new Styles();
    const {renderView} = this.props;
    if (renderView) {
      return renderView(data);
    } else {
      return <Text style={styles.result} key={data}>{data}</Text>;
    }
  }
  render() {
    const styles = new Styles();
    const {
      children,
      style,
      ...rest
    } = this.props;
    const {
      renderValue,
      showResults,
      options,
      specs
    } = this.state;
    return (
      <View style={[styles.outerContainer,style]}
        ref="selectView">
        <Button style={styles.container}
            onPress={this._handleOpen}>
          <View style={styles.selectedResult}>
            {renderValue ?
              <Text style={styles.text}>
                {renderValue}
              </Text>
              :
              <Text style={[styles.text, styles.selectText]}>
                Clique para selecionar
              </Text>
            }
            <View style={styles.iconContainer}>
              {/* <Icon name="chevron-down" style={styles.icon} size={18}/> */}
            </View>
          </View>
        </Button>
        <Modal
          animationType="none"
          transparent={true}
          visible={showResults}
          onRequestClose={() => {alert("Modal ehas been closed.")}}
          >
          <TouchableOpacity activeOpacity={1}
            style={styles.resultsModal}
            onPress={this._closeResults}>
            <View style={[styles.resultsContainer, specs]}>
              <View style={styles.results}>
                <FlatList
                  keyExtractor={item => this._renderResult(item)}
                  data={options}
                  renderItem={({item}) => {
                    const renderedResultView = this._renderResult(item);
                    return (
                      <TouchableOpacity style={{flex: 1}}
                        onPress={() => this._handleResultClick(item)}>
                        {this._renderView(renderedResultView)}
                      </TouchableOpacity>
                    )
                  }}/>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}
