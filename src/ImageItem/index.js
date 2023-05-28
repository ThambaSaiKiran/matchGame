import './index.css'

const ImageItem = props => {
  const {item, changeFunc} = props
  const {imageUrl, thumbnailUrl} = item
  const changeFu = () => {
    changeFunc(imageUrl)
  }
  return (
    <li>
      <button type="button" onClick={changeFu}>
        <img src={thumbnailUrl} alt="thumbnail" className="imageItem" />
      </button>
    </li>
  )
}

export default ImageItem
