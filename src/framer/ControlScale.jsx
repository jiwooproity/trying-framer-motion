import { motion } from "framer-motion";

const ControlScale = () => {
  const motionScaleOptions = {
    animate: { scale: [1, 1.5, 1.1] },
    transition: { duration: 3, times: [0, 0.2, 1] },
  };

  return (
    <div className="control-scale-container">
      <motion.div className="control-scale-box" {...motionScaleOptions}>
        <motion.span className="control-scale-box-text" {...motionScaleOptions}>
          Control Scale
        </motion.span>
      </motion.div>
    </div>
  );
};

export default ControlScale;
