import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../actions'

import Login from '../../components/Login'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'

import { AdminLTE } from '../../config'

class App extends Component {

  componentDidMount() {
    const { isAuthenticated } = this.props
    if (isAuthenticated) {
      $('body').attr('class', `hold-transition ${AdminLTE.theme}`)
    } else {
      $('body').attr('class', `hold-transition ${AdminLTE.loginTheme}`)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated) {
      $('body').attr('class', `hold-transition ${AdminLTE.theme}`)
    } else {
      $('body').attr('class', `hold-transition ${AdminLTE.loginTheme}`)
    }
  }

  render() {

    const { dispatch, isAuthenticated, errorMessage } = this.props

    return (
      <div>
      
      {!isAuthenticated &&
        <Login onLoginClick={ creds => dispatch(loginUser(creds)) } errorMessage={errorMessage} />
      }
      {isAuthenticated &&
        <div>
          <Header />
          <Sidebar />
          <div className="content-wrapper">
            {this.props.children}
          </div>
          <Footer />
        </div>
      }
      </div>
    )
  }
}

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
}

// These props come from the application's
// state when it is started
function mapStateToProps(state) {

  const { isAuthenticated, errorMessage } = state.auth

  return {
    dispatch: PropTypes.func.isRequired,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(App)