// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTabDetails, updateActiveTabId} = props
  const {displayText, tabId, isActive} = eachTabDetails
  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'
  return (
    <li className="tab-item">
      <button
        type="button"
        onClick={() => updateActiveTabId(tabId)}
        className={tabBtnClassName}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
