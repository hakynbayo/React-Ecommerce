import React,{useState, useEffect} from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Ndata from "./Ndata"

const Cart = () => {
  const [slidesToShow, setSlidesToShow] = useState(5)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1)
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(2)
      } else if (window.innerWidth <= 1440) {
        setSlidesToShow(3)
      } else {
        setSlidesToShow(4)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <>
    <Slider {...settings}>
      {/* <div className='content grid product'> */}
      
        {Ndata.map((val, index) => {
          return (
            <div className='box' key={index}>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <h4>{val.name}</h4>
              <span>${val.price}</span>
            </div>
          )
        })}
        
      {/* </div> */}
      </Slider>
    </>
  )
}

export default Cart
