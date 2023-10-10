import { motion } from "framer-motion";

const OutInList = () => {
  const boxVariants = {
    out: {
      y: 600,
    },
    in: {
      y: 0,
      transition: {
        duration: 0.6,
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const iconVariants = {
    out: {
      x: 1000,
    },
    in: {
      x: 0,
    },
  };

  return (
    <motion.ul variants={boxVariants} initial="out" animate="in">
      <motion.li
        role="img"
        aria-labelledby="magic wand"
        variants={iconVariants}
      >
        🚀
      </motion.li>
      <motion.li role="img" aria-labelledby="sparkles" variants={iconVariants}>
        ✨
      </motion.li>
    </motion.ul>
  );
};

export default OutInList;
