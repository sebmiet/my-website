import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      animate={{
        opacity: [0, 1],
      }}
      transition={{
        delay: 0.5,
        duration: 1,
      }}
    >
      <div className="nav-list-wrap">
        <ul>
          <li>
            <div className="nav-element">
              <a href="www.onet.pl">start</a>
            </div>
          </li>
          <li>
            <div className="nav-element">
              <a href="www.onet.pl">portfolio</a>
            </div>
          </li>
          <li>
            <div className="nav-element">
              <a href="www.onet.pl">about</a>
            </div>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
