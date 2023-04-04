import './index.css'

const PasswordsList = props => {
  const {userInfo, checkedStatus, deleteFunction} = props

  const {website, userName, password, id} = userInfo

  const firstLetter = website.slice(0, 1).toUpperCase()

  const onClickDelete = () => {
    deleteFunction(id)
  }

  return (
    <li className="listContainer">
      <div className="mainContainer">
        <div className="firstLetter">
          <p>{firstLetter}</p>
        </div>
        <div className="detailsContainer">
          <p className="detail">{website}</p>
          <p className="detail">{userName}</p>
          {checkedStatus ? (
            <p className="detail">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="starImage"
            />
          )}
        </div>
      </div>
      <div>
        <button
          onClick={onClickDelete}
          data-testid="delete"
          type="button"
          className="deleteButton"
        >
          <img
            className="deleteImage"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordsList
