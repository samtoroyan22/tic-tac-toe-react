import styles from "./Game.module.css";

const Square = ({ value, onClick }) => {
  return (
    <button className={styles.cell} onClick={onClick}>
      <img src={value} alt="" />
    </button>
  );
};

export default Square;
