import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, appName} = appDetails

  return (
    <li className="app-list">
      <img src={imageUrl} alt="img icon" className="image-app" />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
