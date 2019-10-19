import React from "react";
import { Slide } from "react-slideshow-image";
import styles from "../styles/Slider.module.css";

const slideImages = [
  "https://images.readwrite.com/wp-content/uploads/2018/04/coding-825x500.jpg",
  "images/slide_3.jpg",
  "images/slide_4.jpg"
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const Slideshow = () => {
  return (
    <div className={styles.slideContainer}>
      <Slide {...properties}>
        <div className={styles.slide}>
          <div
            className={styles.img}
            style={{ backgroundImage: `url(${slideImages[0]})` }}
          >
            <span>Slide 1</span>
          </div>
        </div>
        <div className={styles.slide}>
          <div
            className={styles.img}
            style={{ backgroundImage: `url(${slideImages[1]})` }}
          >
            <span>Slide 2</span>
          </div>
        </div>
        <div className={styles.slide}>
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
