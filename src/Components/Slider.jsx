import React from "react";
import { Avatar } from "antd";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
const Slider = ({ feedback }) => {
  return (
    <motion.div
      className="slider-card"
      initial={{ x: -150, opacity: 0, scale: 0.5 }}
      whileInView={{ x: 0, opacity: 1, scale: 0.8 }}
      viewport={{ once: false, amount: 1 }}
      transition={{ type: "spring", bounce: 0.2 }}
    >
      <Carousel
        width={"100%"}
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        autoPlay={true}
        swipeable={true}
        showThumbs={false}
      >
        {feedback?.map((f) => (
          <div key={f._id}>
            <img src={f.avtar} className="av" />
            <h5>{f.name}</h5>
            <h6>
              {f.comment?.substring(150, [0])}
              {/* //substring(151,[0]) */}
            </h6>
          </div>
        ))}
      </Carousel>
    </motion.div>
  );
};

export default Slider;
