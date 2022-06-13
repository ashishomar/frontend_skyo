import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import "./slider.css"
import { useState, useEffect } from 'react'
import { sliderItems } from "../data"



const Slider = () =>
{

    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) =>
    {
        if (direction === "left")
        {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else
        {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }


    // setInterval(() =>
    // {
    //     setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    // }, 4000)


    return (
        <div className="slideContainer">
            <div className="Arrow left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </div>
            <div className="slideWrapper" style={{ transform: 'translateX(' + slideIndex * -100 + 'vw)' }}>

                {sliderItems.map((item) => (

                    <div className="Slide" style={{ backgroundColor: item.bg }}>
                        <div className="ImgContainer">
                            <img src={item.img} alt="" className="Image" />
                        </div>
                        <div className="InfoContainer">
                            <h1 className="slideTitle">{item.title}</h1>
                            <p className="slideDesc">{item.desc}</p>
                            <button className="slideButton">SHOP NOW</button>
                        </div>
                    </div>
                ))}

                {/* <div className="Slide" style={{ backgroundColor: "#fcf1ed", }}>
                    <div className="ImgContainer">
                        <img src="https://previews.123rf.com/images/suti/suti1207/suti120700016/14322788-sexy-shopping-girl-isolated-on-white-background.jpg" alt="" className="Image" />
                    </div>
                    <div className="InfoContainer">
                        <h1 className="slideTitle">NEW ARRIVALS</h1>
                        <p className="slideDesc">DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>
                        <button className="slideButton">SHOP NOW</button>
                    </div>
                </div>

                */}


            </div>
            <div className="Arrow right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </div>
        </div >
    )
}

export default Slider