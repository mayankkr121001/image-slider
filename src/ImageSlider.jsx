import React, { useState } from 'react'
import { ArrowBigLeft, ArrowBigRight , Circle, CircleDot} from "lucide-react";
import "./ImageSlider.css";

const ImageSlider = ({ imageUrls }) => {
    const [imageIndex, setImageIndex] = useState(0);

    function showNextImage() {
        setImageIndex((index) => {
            if (index === imageUrls.length - 1) return 0;
            return index + 1;

        })
    }
    function showPrevImage() {
        setImageIndex((index) => {
            if (index === 0) return imageUrls.length - 1;
            return index - 1;

        })
    }



    return (
        <div className='img-slider-container'>
            <div className='img-div'>
                {imageUrls.map((url, index) => (
                    <img key={url} src={url} className='img-slider-img' alt={`car${index}`} style={{translate: `${-100 * imageIndex}%`}}/>

                ))}
            </div>

            <button onClick={showPrevImage} className='img-slider-btn left'><ArrowBigLeft /></button>
            <button onClick={showNextImage} className='img-slider-btn right'><ArrowBigRight /></button> 

            <div className='dots-div'>
                {imageUrls.map((url, index) =>(
                    <button key={index} className='img-slider-dot-btn' onClick={() => setImageIndex(index)}>
                        {index === imageIndex ? <CircleDot/> : <Circle/>}
                        </button>
                ))}                
            </div>
        </div>
    )
}

export default ImageSlider