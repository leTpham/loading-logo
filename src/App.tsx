import "./styles.css";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      className="box"
      drag
      dragConstraints={{
        top: -50,
      left: -50,
      right: 50,
      bottom: 50,
      }}

      whileHover={{scale: 1.2}}
      whileTap={{scale:0.8}}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,


      }}
    />
  );
}

export default App;
