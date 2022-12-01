import './index.css'

const HistoryItem = props => {
  const {historyList, deleteFunction, browserList} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyList

  const deleteItem = () => {
    deleteFunction(id, browserList)
  }

  return (
    <li className="history-item">
      <div className="content-container">
        <div className="time-container">
          <p className="time">{timeAccessed}</p>
        </div>
        <div className="website">
          <img src={logoUrl} className="logo-image" alt="domain logo" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
      </div>
      <div className="delete-icon-container">
        <button type="button" className="button" onClick={deleteItem}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
