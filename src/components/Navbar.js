import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav>
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
    </nav>
  );
};

export default Navbar;
