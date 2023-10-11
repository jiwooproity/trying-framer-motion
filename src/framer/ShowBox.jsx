import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ShowBox = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onClick = (type) => {
    setIsVisible(type === "show");
  };

  return (
    <div className="showbox-wrapper">
      <div className="button-area">
        <button onClick={() => onClick("show")}>Show</button>
        <button onClick={() => onClick("hide")}>Hide</button>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="box-style"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.2 }}
          >
            d=(´▽｀)=b
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShowBox;
