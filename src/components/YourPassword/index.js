import './index.css'

const YourPassword = props => {
  const {passwordItem, deletedItem, showPassword} = props
  const {website, username, password, randomBg, id} = passwordItem
  const onDelete = () => {
    deletedItem(id)
  }
  return (
    <li className="list-container">
      <div>
        <p className={`bg-surname ${randomBg}`}>{website[0]}</p>
      </div>
      <div>
        <p className="website">{website}</p>
        <p className="website">{username}</p>
        {showPassword ? (
          <p className="website">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars-image"
          />
        )}
      </div>
      <div>
        <button
          type="button"
          className="button2"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            className="delete-image"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default YourPassword
