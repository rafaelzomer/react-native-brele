import React from 'react';
import { StyleSheet, Modal as ModalLib, View } from 'react-native';
import Text from '../text/Text';
import Screen from '../screen/Screen';

function ModalClass() {

  function on(event, callback) {
    this.onList[event] = callback
  }

  const publicFunctions = [
    'open',
    'close',
    'loading'
  ];

  const ret = {};
  ret.onList = {};
  ret.on = on;
  for(var i = 0; i < publicFunctions.length; i++) {
    const key = publicFunctions[i];
    ret[key] = function(config) {
      var func = this.onList[key];
      if (typeof func === 'function') {
        func(config);
      }
    }
  }

  return ret;
}

const Modal = new ModalClass();

class ModalInit extends React.Component {
  state = {
    modals: []
  }
  openTimeoutModals = []
  modalSize = 0
  timeoutSize = 0
  handleRequestClose = () => {

  }
  openModal = ({title, message, timeout}) => {
    const {modals} = this.state;
    this.modalSize++;
    modals.push({
      id: this.modalSize,
      render: (
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {title ? <Text style={styles.modalTitle} type="subtitle">{title}</Text> : null}
            {message ? <Text style={styles.modalMessage}>{message}</Text> : null}
          </View>
        </View>
      )
    });
    this.setState({modals});
    if (timeout) {
      this.openTimeoutModals[this.timeoutSize++] = setTimeout(() => {

      }, timeout);
    }
    return this.modalSize;
  }
  closeModal = (modalID) => {
    const {modals} = this.state;
    for(var i = 0; i < modals.length; i++) {
      if (modalID == modals[i].id) {
        modals.splice(i, 1);
        this.setState({modals});
        return i;
      }
    }
  }
  constructor() {
    super();
    Modal.on('loading', (startLoading) => {
      if (typeof startLoading === 'undefined') {
        startLoading = true;
      }
      if (startLoading) {
        if (this.loadingID) {
          return;
        }
        this.loadingID = this.openModal({
          message: 'Carregando...',
        });
      } else {
        Modal.close(this.loadingID);
        this.loadingID = null;
      }
      return this.loadingID;
    });

    Modal.on('open', this.openModal);
    Modal.on('close', this.closeModal);
  }
  componentWillUnmount() {
    for(var i = 0; i < this.timeoutSize; i++) {
      clearTimeout(this.openTimeoutModals[i])
    }
  }
  render() {
    const {children} = this.props;
    const {modals} = this.state;
    return (
      <Screen {...this.props}>
        {modals.map((modal, key) => (
          <ModalLib key={key}
            transparent={true}
            onRequestClose={this.handleRequestClose}
            animationType="fade">
            <View style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0, 0.5)'
            }}>
              {modal.render}
            </View>
          </ModalLib>
        ))}
        {children}
      </Screen>
    );
  }
}
export default Modal;
export {ModalInit};


const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    height: 'auto',
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  modalTitle: {
    marginBottom: 10
  },
  modalMessage: {
  }
});
