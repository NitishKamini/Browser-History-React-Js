import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

class BrowserHistory extends Component {
  state = {searchInput: '', initialHistoryList1: this.props}

  onSearchInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistoryItem = (id, broswerList) => {
    const newList = broswerList.filter(eachItem => eachItem.id !== id)
    const newObject = {historyDetailsList: newList}
    this.setState({initialHistoryList1: newObject})
  }

  render() {
    const {searchInput, initialHistoryList1} = this.state
    const filteredList = initialHistoryList1.historyDetailsList.filter(
      eachHistory =>
        eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="header-section">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="history-logo"
            />
          </div>
          <div className="search-box">
            <div className="icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="icon-search"
              />
            </div>
            <div>
              <input
                type="search"
                className="input-search"
                placeholder="search history"
                onChange={this.onSearchInputChange}
                value={searchInput}
              />
            </div>
          </div>
        </div>
        <div className="bottom-section">
          {filteredList.length === 0 ? (
            <p className="no-history">There is no history to show</p>
          ) : (
            ''
          )}
          <ul>
            {filteredList.map(eachHistory => (
              <HistoryItem
                historyList={eachHistory}
                key={eachHistory.id}
                deleteFunction={this.deleteHistoryItem}
                browserList={initialHistoryList1.historyDetailsList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
