import {useState} from 'react'
import { motion } from "framer-motion"

export default function BasicMotion() {
    const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="box-container" style={{padding: "2rem"}}>
        
        {/* onClick button remove box visibility */}
        <button onClick={() => setIsVisible(!isVisible)}>Remove The box</button>

        {isVisible && (
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
        )}
    </div>
  )
}