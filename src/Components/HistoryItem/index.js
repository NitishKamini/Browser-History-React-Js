import './index.css'

const HistoryItem = props => {
  const {historyList, deleteFunction} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyList

  const deleteItem = () => {
    deleteFunction(id, historyList)
  }

  return (
    <li className="history-item">
      <div className="content-container">
        <div className="time-container">
          <p className="time">{timeAccessed}</p>
        </div>
        <div className="website">
          <img src={logoUrl} className="logo-image" alt="logo" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
      </div>
      <div className="delete-icon-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          onClick={deleteItem}
        />
      </div>
    </li>
  )
}

export default HistoryItem
