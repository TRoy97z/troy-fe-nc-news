import React from "react";
import { Slide } from "react-slideshow-image";
import styles from "../styles/Slider.module.css";

const slideImages = [
  "https://images.readwrite.com/wp-content/uploads/2018/04/coding-825x500.jpg",
  "https://www.wallpaperup.com/uploads/wallpapers/2015/11/08/831551/470f80c7a28a39a9d797be2feca068ef-700.jpg",
  "https://static01.nyt.com/images/2017/09/25/dining/bonebrothchickenstock/bonebrothchickenstock-articleLarge.jpg"
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
  // onChange: (oldIndex, newIndex) => {
  //   console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  // }
};

const Slideshow = () => {
  return (
    <div className={styles.slideContainer}>
      <Slide {...properties}>
        <div className={styles.slide}>
          <div
            className={styles.img}
            style={{ backgroundImage: `url(${slideImages[0]})` }}
          ></div>
        </div>
        <div className={styles.slide}>
          <div
            className={styles.img}
            style={{ backgroundImage: `url(${slideImages[1]})` }}
          ></div>
        </div>
        <div className={styles.slide}>
          <div
            className={styles.img}
            style={{ backgroundImage: `url(${slideImages[2]})` }}
          ></div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
