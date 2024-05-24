import { useEffect, useState } from 'react'
import './styles.css'

const ImageSlider = () => {
  const imageArr = [
    'https://cdn.pixabay.com/photo/2013/12/11/03/13/puzzle-226743_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/29/12/13/fence-1869401_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/07/27/15/56/link-1545625_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/11/07/07/49/web-2925929_1280.jpg'
  ]

  const [isActive, setIsActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      slideRight()
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const slideLeft = () => {
    // setIsActive(isActive > 0 ? isActive-- : imageArr.length)
    setIsActive(active => (active-1) < 0 ? imageArr.length - 1 : active-1)
  }

  const slideRight = () => {
    // setIsActive(isActive < imageArr.length ? isActive++ : 0)
    setIsActive(active => (active+1)%imageArr.length)
  }

  return (
    <div className='imageSlider'>
      <button className='slideButton' onClick={slideLeft}>⬅️</button>
      {/* {imageArr.map((itemLink, index) => (
        <img key={index} src={itemLink} alt='image' className='image' />
      ))} */}
      <img src={imageArr[isActive]} alt='display' className='image'/>
      <button className='slideButton' onClick={slideRight}>➡️</button>
    </div>
  )
}

export default ImageSlider