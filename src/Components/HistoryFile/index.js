import {Component} from 'react'

import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const deletingItem = () => {
    deleteItem(id)
  }

  return (
    <li>
      <div className="list-item">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button onClick={deletingItem}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="button-type"
            data-testid="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
