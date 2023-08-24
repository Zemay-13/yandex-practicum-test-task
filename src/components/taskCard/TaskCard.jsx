import { HiOutlineX } from "react-icons/hi";

import styles from "./TaskCard.module.scss";

const TaskCard = ({ onClose, children }) => {
  return (
    <div className={styles.card}>
      <HiOutlineX className={styles.card__close} onClick={onClose} />
      {children}
    </div>
  );
};

export default TaskCard;
