import React from 'react';
import { connect } from 'react-redux';
import marked from 'marked';

class Previewer extends React.Component {
  rawMarkup = (value) => {
      var rawMarkup = marked(value, {sanitize: true});
      return { __html: rawMarkup };
    };
  render() {
    return (
      <div id="previewer" dangerouslySetInnerHTML={this.rawMarkup(this.props.input)} ></div>
    );
  };
};

const mapStateToProps = (state) => {
  return {input: state}
};

const Container = connect(mapStateToProps, null)(Previewer);

export default Container