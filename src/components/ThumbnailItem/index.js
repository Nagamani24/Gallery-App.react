// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, displayImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const thumbNailClass = isActive ? 'img' : 'active-thumb-nail'

  const clickOnThumbNail = () => {
    displayImage(id)
  }

  return (
    <li>
      <button onClick={clickOnThumbNail} type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbNailClass}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
