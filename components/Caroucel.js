  
import React, { useState } from "react";
import cla from  "./Caroucel.module.css";
import { images } from "./CaroucelData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Caroucel() {
    const [currImg, setCurrImg] = useState(0);

    return (
      <div className={cla.carousel}>
         
        <div
          className= {cla.carouselInner}
          style={{ backgroundImage: `url(${images[currImg].img})` }}
        >
          
          <div
            className={cla.left}
            onClick={() => {
              currImg > 0 && setCurrImg(currImg - 1);
            }}
          >
            <ArrowBackIosIcon style={{ fontSize: 30 }} />
          </div>
         
          <div
            className={cla.right}
            onClick={() => {
              currImg < images.length - 1 && setCurrImg(currImg + 1);
            }}
          >
            <ArrowForwardIosIcon style={{ fontSize: 30 }} />
          </div>
        </div>
      </div>
    );
}

export default Caroucel
