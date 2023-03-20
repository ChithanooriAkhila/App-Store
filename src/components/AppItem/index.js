// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  //   const {appId, appName, imageUrl, category} = appDetails
  const {appName, imageUrl} = appDetails
  return (
    <li className="app-item-container">
      <img src={imageUrl} alt={appName} className="app-item-img" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
