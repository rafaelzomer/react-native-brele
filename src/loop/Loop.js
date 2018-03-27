import React from 'react';
import { View } from 'react-native';

export default class Loop extends React.Component {
  state = {}
  _renderValues = (data) => {
    this.setState({
      data
    });
  }
  componentDidMount() {
    const {data} = this.props;
    this._renderValues(data);
  }
  componentWillReceiveProps(nextProps) {
    const {data} = this.props;
    if (data !== nextProps.data) {
      this._renderValues(nextProps.data);
    }
  }
  render() {
    const {children, style, scroll, render, ...rest} = this.props;
    const {data} = this.state;
    return (
      <View
        {...rest}
        style={{
          flex: 1,
          ...style
        }}>
        {data ? Object.keys(data).map((key) => {
          const item = data[key];
          if (!item) {
            return null;
          }
          return render(item, key);
        }) : null}
      </View>
    );
  }
}
