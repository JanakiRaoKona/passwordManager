import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import YourPassword from '../YourPassword'
import './index.css'

class AddNewPassword extends Component {
  state = {
    passwordsList: [],
    website: '',
    username: '',
    password: '',
    searchInput: '',
    showPassword: false,
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  deletedItem = id => {
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(
        eachComment => eachComment.id !== id,
      ),
    }))
  }

  onSubmitPasswords = event => {
    const initialContainerBackgroundClassNames = [
      'amber',
      'blue',
      'orange',
      'emerald',
      'teal',
      'red',
      'light-blue',
    ]
    const randomBg =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    event.preventDefault()
    const {website, username, password} = this.state
    const newPassword = {
      id: uuidv4(),
      website,
      username,
      password,
      randomBg,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      website: '',
      username: '',
      password: '',
    }))
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {
      passwordsList,
      website,
      username,
      password,
      randomBg,
      searchInput,
      showPassword,
    } = this.state

    const filteredList = passwordsList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    let showHide
    if (passwordsList.length === 0 || filteredList.length === 0) {
      showHide = true
    } else {
      showHide = false
    }

    return (
      <div className="password-bg-container">
        <img
          className="app-logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="add-new-password-container">
          <img
            alt="password manager"
            className="password-image"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
          />
          <div>
            <h1 className="add-password-example">Add New Password</h1>
            <form className="form-container" onSubmit={this.onSubmitPasswords}>
              <div className="website-container">
                <img
                  className="website-image"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
                <input
                  value={website}
                  type="text"
                  className="input"
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsite}
                />
              </div>

              <div className="website-container">
                <img
                  className="website-image"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
                <input
                  type="text"
                  value={username}
                  className="input"
                  placeholder="Enter Username"
                  onChange={this.onChangeUsername}
                />
              </div>

              <div className="website-container">
                <img
                  className="website-image"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />

                <input
                  id="password"
                  type="password"
                  className="input"
                  placeholder="Enter Password"
                  value={password}
                  onChange={this.onChangePassword}
                />
              </div>
              <div className="button-container">
                <button type="submit" className="button">
                  Add
                </button>
              </div>
            </form>
            <div className="password-container">
              <div className="second-bg-container">
                <h1 className="your-password-name">Your Passwords</h1>
                <p className="count">{passwordsList.length}</p>
                <div className="website-container">
                  <img
                    className="website-image"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                  />
                  <input
                    className="search-input"
                    placeholder="Search"
                    type="search"
                    onChange={this.onChangeSearchInput}
                  />
                </div>
              </div>
              <hr />
              <div className="checkbox-container">
                <label htmlFor="showPassword" className="checkbox-label">
                  <input
                    id="showPassword"
                    type="checkbox"
                    onChange={this.toggleShowPassword}
                    className="checkbox-input"
                    checked={showPassword}
                  />
                  <span className="show-password-text">Show passwords</span>
                </label>
              </div>

              {showHide ? (
                <div className="no-pass-view">
                  <img
                    className="no-password-view"
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                  />

                  <p className="heading">No Passwords</p>
                </div>
              ) : (
                <ul className="ul-list">
                  {filteredList.map(eachItem => (
                    <YourPassword
                      passwordItem={eachItem}
                      key={eachItem.id}
                      randomBg={randomBg}
                      deletedItem={this.deletedItem}
                      showPassword={showPassword}
                    />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddNewPassword
