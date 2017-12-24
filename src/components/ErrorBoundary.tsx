import { Component } from 'react'
import Raven from 'raven-js'

class ErrorBoundary extends Component {
  state = {
    error: null,
  }
  setError = error => {
    this.setState(state => this.setState({ ...state, error }))
  }
  componentDidCatch(error, errorInfo) {
    this.setError(error)
    // Raven.captureException(error, { extra: errorInfo })
  }
  render() {
    return this.state.error === null
      ? this.props.children
      : this.props.errorView()
  }
}

export default ErrorBoundary
