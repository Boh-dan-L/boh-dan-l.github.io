import React from "react";
import "./Listing.scss";
import { motion } from "framer-motion";

const Listing = ({ data, open }) => {
  const { imageUrl,address, } =
    data;

    const animate = {
      hidden:{
          y: 100,
          opacity: 0,
      },
      visible: custom => ({
          y: 0,
          opacity: 1,
          transition: {delay: custom * 0.1 }
      }),
  };

  return (
    <motion.div viewport={{amout: 0.1, once: true,}} variants={animate} initial='hidden' whileInView='visible' className="listing" onClick={open} whileHover={{ scale: 1.1 }}>
      <div className="listing__content">
        <div className="listing__image-container">
          <img
            className="listing__image"
            alt="real estate mansion"
            src={imageUrl}
          />
        </div>
        <div className="listing__details">
          <div className="listing__row">
            <span className="listing__price">{address}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Listing;
