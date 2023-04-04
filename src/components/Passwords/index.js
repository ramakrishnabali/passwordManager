import {Component} from 'react'

import PasswordsList from '../PasswordsList'

import './index.css'

class Passwords extends Component {
  state = {checked: false, search: ''}

  changeStatus = () => {
    this.setState(prevStatus => ({
      checked: !prevStatus.checked,
    }))
  }

  changeSearch = event => {
    this.setState({search: event.target.value})
  }

  render() {
    const {info, deleteFunc} = this.props

    const {checked, search} = this.state

    const updatedResult = info.filter(eachSearch =>
      eachSearch.password.toLowerCase().includes(search.toLowerCase()),
    )

    const lengthOfInfo = updatedResult.length

    return (
      <div className="inputContainerBottom">
        <div className="countAndSearchContainer">
          <div className="countContainer">
            <h1 className="countHeading">Your Passwords</h1>
            <p className="count">{lengthOfInfo}</p>
          </div>
          <div className="searchContainer">
            <div className="searchIconContainer">
              <img
                className="searchIcon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
            </div>

            <input
              onChange={this.changeSearch}
              type="search"
              placeholder="Search"
              className="search"
              value={search}
            />
          </div>
        </div>
        <hr className="hr-line" />

        <div className="showPasswordsContainer">
          <input
            id="checkBox"
            onChange={this.changeStatus}
            type="checkbox"
            className="checkbox"
          />
          <label htmlFor="checkBox" className="showPasswords">
            Show Passwords
          </label>
        </div>

        {lengthOfInfo === 0 ? (
          <div className="emptyPasswords">
            <img
              className="noPasswordsImage"
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
            />
            <p className="showPasswords">No Passwords</p>
          </div>
        ) : (
          <ul className="ulContainer">
            {updatedResult.map(eachUser => (
              <PasswordsList
                deleteFunction={deleteFunc}
                checkedStatus={checked}
                userInfo={eachUser}
                key={eachUser.id}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Passwords
