import React from 'react'

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
        <p>{logoUrl} alt="domain logo"</p>
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button onClick={deletingItem}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="button-type"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
