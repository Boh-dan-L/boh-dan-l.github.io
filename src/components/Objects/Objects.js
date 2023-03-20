import "./objects.scss";
import React from 'react'
import Card from "./Card";
import { properties } from "../../constants/data";
import { Title } from '../Text/Title';
import { motion, } from "framer-motion";

function Objects() {

  return (
    <motion.div
    id="objects" className="objects">
      <motion.div  className='objects__title'>
        <Title  objects='НАШІ ОБʼЄКТИ'/>
      </motion.div>
      <motion.div  className="properties">
        {properties.map((item) => (
            <Card data={item} key={item.id} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Objects;
