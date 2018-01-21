import React, { Component } from 'react';

import './style.less';

export default class Dashboard extends Component {
  state = {
    greeting: '',
    ready: false,
  }

  sayHello = () => new Promise((resolve) => {
    const greeting = 'Good evening,     Boss.';

    greeting.split('').forEach((g, index) => {
      setTimeout(() => {
        this.setState({
          greeting: this.state.greeting + g,
        });
        if (index === greeting.split('').length - 1) {
          setTimeout(resolve, 500);
        }
      }, 100 * index);
    });
  })


  componentDidMount() {
    setTimeout(async () => {
      await this.sayHello();
      this.setState({
        ready: true,
      });
    }, 2000);
  }

  render() {
    const dashboardClassName = `
      ${this.state.ready && 'ready'}
    `;
    return (
      <div id="dashboard" className={dashboardClassName}>
        <div id="dashboard_image" className="fadeIn animated" />

        <div id="dashboard_content">
          <span className="help-text">{ this.state.greeting }</span>
        </div>
        <div id="dashboard_children">
          { this.props.children }
        </div>
      </div>
    );
  }
}
