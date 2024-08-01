import React from 'react'
import { motion } from "framer-motion"

export default function BasicMotion() {
  return (
    <div className="box-container">
        <motion.div 
            className="box"
            initial={{
                rotate: "0deg"
                // x: "0px"
            }}
            animate={{
                rotate: "180deg"
                // x: "1000px"
            }}
            transition={{
                duration: 3,
                // type: "spring"
                ease: "backInOut"
            }}
            style={{
                margin: "10rem",
                width: "15rem",
                height: "15rem",
                backgroundColor: "red",
            }}
        />
    </div>
  )
}
