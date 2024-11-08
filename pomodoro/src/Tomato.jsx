import tomato from "./assets/tomato.png";
import { motion } from "framer-motion";

const Tomato = () => {
  return (
    <motion.img
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="tomato"
      src={tomato}
      alt="tomato"
    />
  );
};

export default Tomato;