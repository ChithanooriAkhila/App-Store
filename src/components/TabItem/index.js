// Write your code here
const TabItem = props => {
  const {tabDetails, tabClicked} = props
  const {tabId, displayText} = tabDetails
  const activeTab = () => {
    tabClicked(tabId)
  }
  return (
    <li>
      <button type="button" onClick={activeTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
