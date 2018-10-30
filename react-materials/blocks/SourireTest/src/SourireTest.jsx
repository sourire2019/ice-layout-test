import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SourireTest extends Component {
  static displayName = 'SourireTest';

  static propTypes = {
    value: PropTypes.string
  };

  static defaultProps = {
    value: 'string data'
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        sourire-test
      </div>
    );
  }
}

const styles = {

}
