import React from "react";
import { motion } from "framer-motion";

const Wave = () => {
  return (
    <div className="svg-wave">
      <svg
        width="2070"
        height="276"
        viewBox="0 0 2070 276"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g
          animate={{
            scale: [1, 1.2, 1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            loop: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M0 92L69 99.6188C138 107.813 276 122.188 414 145.619C552 168.188 690 199.812 828 176.381C966 153.812 1104 76.1875 1242 76.6188C1380 76.1875 1518 153.812 1656 153.381C1794 153.812 1932 76.1875 2001 38.3812L2070 0V276H2001C1932 276 1794 276 1656 276C1518 276 1380 276 1242 276C1104 276 966 276 828 276C690 276 552 276 414 276C276 276 138 276 69 276H0V92Z"
            fill="#2D3748"
          />
        </motion.g>
      </svg>
    </div>
  );
};

export default Wave;
