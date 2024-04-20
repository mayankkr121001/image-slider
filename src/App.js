import React from 'react';
import img1 from "./assets/img1.jpg"
import img2 from "./assets/img2.jpg"
import img3 from "./assets/img3.jpg"
import img4 from "./assets/img4.jpg"
import ImageSlider from './ImageSlider';

const IMAGES = [img1, img2, img3, img4];


const App = () => {
    return (
            <ImageSlider imageUrls={IMAGES} />
    )
}

export default App;