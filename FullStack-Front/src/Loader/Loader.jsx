import { FaSpinner } from "react-icons/fa";
import styles from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={styles.spinner}>
      <FaSpinner size={60} className={styles.spinning} />
    </div>
  );
};

export default Loader;
