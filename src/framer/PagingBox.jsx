import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const PagingBox = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [path, setPath] = useState("first");

  const domObject = {
    first: <span>first</span>,
    second: <span>second</span>,
  };

  const onRenderKey = (e) => {
    const { name } = e.target;
    setPath(name);
    setIsVisible(
      () => {
        return false;
      },
      setTimeout(() => {
        setIsVisible(true);
      }, 500)
    );
  };

  return (
    <div className="paging-container">
      <div className="paging-wrapper">
        <div className="paging-buttons-area">
          {Object.keys(domObject).map((key) => (
            <button name={key} onClick={onRenderKey}>
              {key}
            </button>
          ))}
        </div>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="paging-box"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.2 }}
            >
              {domObject[path]}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PagingBox;
