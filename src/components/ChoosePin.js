import React from 'react';
import PinPasswordWrapper from '../components/PinPasswordWrapper'
import { updatePin } from '../actions/index';
import { connect } from "react-redux";


const mapDispatchToProps = dispatch => {
  return {
    updatePin: data => dispatch(updatePin(data)),
  };
};


class ChoosePin extends React.Component {
  handleChange = (value) => {
    this.props.updatePin(value);
  }

  render() {
    const renderMessage = () => {
      return <p className="mt-4 mb-4">The PIN is a 6-digit password requested to authorize actions in your wallet, such as generating new addresses and sending tokens</p>;
    }

    return (
      <PinPasswordWrapper ref="wrapper" message={renderMessage()} success={this.props.success} back={this.props.back} handleChange={this.handleChange} field='PIN' pattern='[0-9]{6}' inputMode='numeric' button='Next' />
    )
  }
}

export default connect(null, mapDispatchToProps)(ChoosePin);