const TabItem = props => {
  const {item, tabChangeFunc} = props
  const {tabId, displayText} = item
  const changeFunc = () => {
    tabChangeFunc(tabId)
  }
  return (
    <li onClick={changeFunc}>
      <button type="button" className="tb">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
