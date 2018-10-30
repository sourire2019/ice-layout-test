import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SourireT extends Component {
  static displayName = 'SourireT';

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
        sourire-t
      </div>
    );
  }
}

const styles = {

}
