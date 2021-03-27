import React from "react";
import { motion } from "framer-motion";

const Blob = () => {
  return (
    <div className="svg-blob">
      <svg
        width="1377"
        height="390"
        viewBox="0 0 1377 390"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <motion.g
            animate={{
              scale: [1, 1.01, 1, 1.01, 1],
              rotate: [0, 10, 30, 10,  0],
              y: [0, -20, 0, -30, 0],
              // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              duration: 10,
              loop: Infinity,
              ease: "easeInOut",
            }}
          >
            <path
              d="M697.716 -626.017C753.887 -627.975 812.906 -565.67 881.164 -524.784C949.873 -484.177 1027.54 -465.443 1087.61 -417.617C1147.22 -369.512 1189.4 -293.048 1191.83 -215.32C1194.25 -137.592 1158.1 -58.7011 1106.04 0.456771C1054.71 59.7914 988.361 98.8359 921.988 124.693C855.896 151.006 789.666 162.943 720.174 170.604C650.854 177.53 577.82 180.46 509.579 157.798C441.167 135.87 377.377 89.0836 354.844 26.2757C331.579 -36.7089 349.119 -115.436 351.933 -190.738C354.015 -266.216 341.823 -338.547 369.224 -388.148C397.077 -438.027 464.806 -464.721 525.923 -511.229C587.04 -557.737 641.094 -623.781 697.716 -626.017Z"
              fill="#0099FF"
            />
          </motion.g>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="1200"
              height="1200"
              fill="white"
              transform="translate(0.0 -461.439) rotate(-31.6719)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Blob;
