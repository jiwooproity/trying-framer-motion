import { motion } from "framer-motion";

const MoveBox = () => {
  const boxVariants = {
    hover: { scale: 1.2, rotate: 90 },
    tap: { borderRadius: "50%", scale: 0.8, rotate: -90 },
  };

  return (
    <div className="move-container">
      <motion.div
        className="move-box"
        variants={boxVariants}
        whileHover="hover"
        whileTap="tap"
        drag
      />
    </div>
  );
};

export default MoveBox;
