import React from 'react';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import { connect } from 'react-redux';
import { changeSignal } from './redux/actionCreators';

class TrafficSignal extends React.Component {

  renderSignal = (signalColor) => {
    if (signalColor === 'red') {
      return redSignal;
    }
    if (signalColor === 'green') {
      return greenSignal;
    }
    if (signalColor === 'yellow') {
      return yellowSignal;
    }
    return null;
  };

  render() {

    const { signalColor, changeSignal } = this.props;

    return (
      <div>
        <div className="button-container">
          <button onClick={() => changeSignal('red')} type="button">Red</button>
          <button onClick={() => changeSignal('yellow')} type="button">Yellow</button>
          <button onClick={() => changeSignal('green')} type="button">Green</button>
        </div>
        <img className="signal" src={this.renderSignal(signalColor)} alt="" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  signalColor: state.signal.color,
});

const mapDispatchToProps = (dispatch) => ({
  changeSignal: (payload) => dispatch(changeSignal(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);