import React from 'react';
import cla from "./Carousel.module.css";
import { useState } from 'react';

export const CarouselItem = ({ children, width}) => {
    return (
        <div className={cla.carouselitem} style={{width: width}}>
            {children}
        </div>
    );
};

export default function Caousel({children}){
    const [activeIndex, setActiveIndex] = useState(0);
    const updateIndex = (newIndex) => {
        if(newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1;
        }
        setActiveIndex(newIndex);
    }
    return (
        <div className={cla.carousel}>
            <div className={cla.inner} 
            style={{ transform: `translateX(-${activeIndex * 100}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%"});
                })}
            </div>
            <div className={cla.indicators}>
                <button
                    onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}
                >
                    Prev
                </button>
                <button
                    onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
};
