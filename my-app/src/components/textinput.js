import React from 'react';
import { connect } from 'react-redux';
import {updatePreviewer} from '../actions'

class TextInput extends React.Component {

  handleChange = (event) => {
    this.props.update(event.target.value);
  };

  render() {
    return (
      <textarea id="text" value={this.props.input} onChange={this.handleChange}>
       
      </textarea>
    );
  };
};

const mapStateToProps = (state) => {
  return {input: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    update: (input) => {
      dispatch(updatePreviewer(input))
    }
  }
};
const Container = connect(mapStateToProps, mapDispatchToProps)(TextInput);

export default Container