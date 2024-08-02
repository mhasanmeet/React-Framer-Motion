
import { motion } from 'framer-motion'

export default function Gestures() {
  return (
    <div style={{
        // display: "flex",
        // height: "50rem",
        // justifyContent: "center",
        // alignItems: "center"
        padding: "2rem"
    }} >
        <motion.button 
            className='btn'
            style={{
                padding: "1rem 3rem",
                fontFamily: "sans-serif",
                fontSize: "16px",
                border: "none",
                backgroundColor: "maroon",
                color: "white",
                cursor: "pointer"
            }}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.5, rotate: "2.5deg"}}
            transition={{
              duration: 0.125,
              ease: "easeInOut"
            }}
        >
                Click Me
        </motion.button>
    </div>
  )
}