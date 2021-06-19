import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, clickTabItem} = props
  const {tabId, displayText} = tabDetails
  const tabButtonClassName = isActive ? `tab-button active` : `tab-button`

  const onClickToSelectTab = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tab-list">
      <button
        type="button"
        className={tabButtonClassName}
        onClick={onClickToSelectTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
