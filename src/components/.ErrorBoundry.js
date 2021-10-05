import React from 'react';

class ErrorBoundry extends Components {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }
  render() {
    if (this.state.hasError) {
      return <h1>An error has been encountered</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundry;
