import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const listItems = ["💖 Heart", "🐱‍🏍 Super Man", "✨ Shiny"];

const First = () => {
  const [text, setText] = useState("💖 Heart");

  const onClick = (e) => {
    const { innerHTML } = e.target;
    setText(innerHTML);
  };

  return (
    <div className="practice-container">
      <div className="practice-wrapper">
        <div className="practice-menu-area">
          <ul className="practice-menu">
            {listItems.map((item) => (
              <li className="practice-menu-item" onClick={onClick}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="practice-text-area">
          <AnimatePresence mode="wait">
            <motion.div
              key={text ? text : ""}
              className="practice-text"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {text ? text : ""}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default First;
