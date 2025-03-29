import styles from "../styles/component.module.css";
import ButtonImage from "./ButtonImage";
import { Button0 } from "./Button.jsx";
import PropTypes from "prop-types";

const GenericEntryContainer = ({ onNewRequest, entryList, onEntryDelete }) => {
  return (
    <div className={styles.generic}>
      <ul className={styles.genericEntryList}>
        {entryList.map((entry) => (
          <li key={entry.id}>
            <ButtonImage
              alt="delete entry"
              src="./svgrepo/trash-bin-minimalistic-svgrepo-com.svg"
              className={styles.deleteBtn}
              onClick={() => onEntryDelete(entry.id)}
            />
            {entry.jsx}
          </li>
        ))}
      </ul>
      
      <Button0 className={styles.btnAddNew} onClick={onNewRequest}>New</Button0>
    </div>
  );
};

export default GenericEntryContainer;

GenericEntryContainer.propTypes = {
  onNewRequest: PropTypes.func.isRequired,
  entryList: PropTypes.shape({
    id: PropTypes.number.isRequired,
    jsx: PropTypes.node.isRequired,
  }).isRequired,
  onEntryDelete: PropTypes.func.isRequired,
};
