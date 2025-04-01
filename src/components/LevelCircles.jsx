import PropTypes from "prop-types";
import styles from "../styles/component.module.css";
const LevelCircles = ({ level }) => {
  const generateCircles = (level) => {
    const result = [];
    for (let i = 0; i < 5; ++i) {
      result.push(
        <div key={(i+1)<<1} className={`${styles.levelCircle} ${(i < level) && styles.enabled}`}></div>
      );
    }
    
    return result;
  };

  return (
    <div className={styles.levelCircles}>
      {generateCircles(level)}
    </div>
  );
};

export default LevelCircles;

LevelCircles.propTypes = {
  level: PropTypes.number.isRequired,
};
