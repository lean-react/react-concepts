import React from 'react';

// Class Component
export class WelcomeCC extends React.Component {
  render() {
    return <h3>Hallo {this.props.name}</h3>
  }
}
