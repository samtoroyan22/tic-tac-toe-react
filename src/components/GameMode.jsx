import styles from "./Game.module.css";

const GameMode = ({ mode, setMode }) => {
  return (
    <div className={styles.modes}>
      <button
        className={`${styles.modeButton} ${
          mode === "twoPlayers" ? styles.active : ""
        }`}
        onClick={() => setMode("twoPlayers")}
      >
        Two Players
      </button>
      <button
        className={`${styles.modeButton} ${
          mode === "vsAI" ? styles.active : ""
        }`}
        onClick={() => setMode("vsAI")}
      >
        Play with AI
      </button>
    </div>
  );
};

export default GameMode;
