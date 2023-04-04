import {Component} from 'react'

import {v4} from 'uuid'

import Passwords from '../Passwords'

import './index.css'

class PasswordManager extends Component {
  state = {
    userInfo: [],
    website: '',
    userName: '',
    password: '',
  }

  getWebSite = event => {
    this.setState({website: event.target.value})
  }

  getUserName = event => {
    this.setState({userName: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {userInfo, website, userName, password} = this.state

    const newUser = {
      id: v4(),
      website,
      userName,
      password,
    }

    // console.log(password)

    this.setState({
      userInfo: [...userInfo, newUser],
      website: '',
      userName: '',
      password: '',
    })
  }

  onDelete = id => {
    const {userInfo} = this.state

    const updatedUserInfo = userInfo.filter(each => each.id !== id)

    this.setState({userInfo: [...updatedUserInfo]})
  }

  render() {
    const {userInfo, website, userName, password, searchInput} = this.state

    return (
      <div className="appContainer">
        <div className="mangerContainer">
          <img
            className="appLogo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
          <div className="inputContainer">
            <form onSubmit={this.submitForm} className="formContainer">
              <h1 className="formHeading">Add New Password</h1>
              <div className="websiteContainer">
                <div className="websiteImage">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="website"
                  />
                </div>
                <input
                  onChange={this.getWebSite}
                  value={website}
                  type="text"
                  className="websiteInput"
                  placeholder="Enter Website"
                />
              </div>

              <div className="websiteContainer">
                <div className="websiteImage">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="website"
                  />
                </div>
                <input
                  value={userName}
                  onChange={this.getUserName}
                  type="text"
                  className="websiteInput"
                  placeholder="Enter Username"
                />
              </div>

              <div className="websiteContainer">
                <div className="websiteImage">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="website"
                  />
                </div>
                <input
                  value={password}
                  onChange={this.getPassword}
                  type="password"
                  className="websiteInput"
                  placeholder="Enter Password"
                />
              </div>

              <button type="submit" className="button">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="mangerImage"
            />
          </div>

          <Passwords
            searchValue={searchInput}
            getSearch={this.searchResults}
            deleteFunc={this.onDelete}
            info={userInfo}
          />
        </div>
      </div>
    )
  }
}

export default PasswordManager
