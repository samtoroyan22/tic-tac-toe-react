import styles from "./Game.module.css";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";

const Header = ({ isXNextStep, isWinner, isDraw }) => {
  if (isDraw) {
    return <h1 className={styles.header}>It's a Draw!</h1>;
  }

  const playerIcon = isXNextStep ? cross : circle;

  const renderMove = () => (
    <span className={styles.player}>
      <img src={playerIcon} width={30} height={30} alt="" />
    </span>
  );

  const renderWinner = () => (
    <span className={styles.player}>
      <img src={isWinner} width={30} height={30} alt="" />
    </span>
  );

  return (
    <h1 className={styles.header}>
      {isWinner ? <>Winner: {renderWinner()}</> : <>Move: {renderMove()}</>}
    </h1>
  );
};

export default Header;
