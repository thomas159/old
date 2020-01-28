import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import 'sanitize.css'
import Main from './Components/Main'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Main />
      </Router>
    )
  }
}

export default hot(module)(App)
