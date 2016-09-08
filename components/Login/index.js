import React, { Component, PropTypes } from 'react'

export default class Login extends Component {
  render() {
    const { errorMessage } = this.props

    const checkboxStyles = {
      position: 'absolute',
      top: '-20%',
      left: '-20%',
      display: 'block',
      width: '140%',
      height: '140%',
      margin: '0px',
      padding: '0px',
      border: '0px',
      opacity: 0,
      background: 'rgb(255, 255, 255)'
    }

    const iCheckStyle = {
      position: 'relative'
    }

    const iCheckHelperStyle = {
      position: 'absolute',
      top: '-20%',
      left: '-20%',
      display: 'block',
      width: '140%',
      height: '140%',
      margin: '0px',
      padding: '0px',
      border: '0px',
      opacity: 0,
      background: 'rgb(255, 255, 255)'
    }

    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="javascript:void(0);">
            <b>Agriculture</b>Admin
          </a>
        </div>
        <div className="login-box-body">
          {errorMessage &&
            <p className="login-box-msg">
              { errorMessage }
            </p>
          }
          {!errorMessage &&
            <p className="login-box-msg">
              Sign in to start your session
            </p>
          }
          <div className="form-group has-feedback">
            <input type='text' ref='username' className='form-control' placeholder='Username' />
            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div className="form-group has-feedback">
            <input type='password' ref='password' className='form-control' placeholder='Password' />
            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div className="row">
            <div className="col-xs-8">
              <div className="checkbox icheck">
                <label>
                  <div className="icheckbox_square-blue" aria-checked="false" aria-disabled="false" style={ iCheckStyle }>
                    <input type="checkbox" style={ checkboxStyles } />
                    <ins className="iCheck-helper" style={iCheckHelperStyle}></ins>
                  </div> Remember Me
                </label>
              </div>
            </div>
            <div className="col-xs-4">
              <button className="btn btn-primary btn-block btn-flat" onClick={(event) => this.handleClick(event)}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  handleClick(evt) {
    const username = this.refs.username
    const password = this.refs.password
    const creds = { username: username.value.trim(), password: password.value.trim() }
    console.log(creds)
    this.props.onLoginClick(creds)
  }
}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}