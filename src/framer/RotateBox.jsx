import { motion, useMotionValue, useTransform } from "framer-motion";

const RotateBox = () => {
  const rotate = useMotionValue(0); // 변수이름 달라도 됨, 애니메이션 상태 구독
  const scale = useTransform(rotate, [0, 270], [0.5, 0.5]); // 변수이름 달라도 된다.
  const blockVariants = {
    initial: {
      rotate: 0,
    }, // 처음 컴포넌트 나타날 때 상태
    target: {
      rotate: 270,
    }, // 애니메이션 끝날 때 상태
  };

  return (
    <div className="framer-container">
      <motion.div
        style={{
          background: "linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)",
          height: "100px",
          width: "100px",
          borderRadius: "10px",
          rotate, // rotate: rotate 와 동일
          scale, // scale : scale 과 동일
        }}
        variants={blockVariants}
        initial="initial"
        animate="target"
        transition={{
          ease: "easeInOut",
          duration: 4,
        }}
      />
    </div>
  );
};

export default RotateBox;
