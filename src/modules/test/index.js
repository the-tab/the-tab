import React, { Component } from 'react';

export default class TestModule extends Component {
  static manifest = require('./manifest.json');

  render() {
    console.log('TEST MODULE RENDERED!');
    return (
      <div>MODULE RENDERED</div>
    );
  }
}
