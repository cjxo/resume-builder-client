import PropTypes from "prop-types";
import styles from "../styles/component.module.css";
import { Button0 } from "./Button.jsx";

const ResumeForm = ({ children, ...rest }) => {
  return (
    <form className={styles.resumeForm} {...rest}>
      {children}
    </form>
  );
};

const ResumeInputField = ({ type="text", label, name, ...rest }) => {
  return (
    <div className={styles.resumeInputField}>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} {...rest} />
    </div>
  );
};

const ResumeCancelOk = ({ onCancel }) => {
  return (
    <div className={styles.cancelok}>
      <Button0 onClick={onCancel} className={styles.cancel} type="button">Cancel</Button0>
      <Button0 className={styles.ok}>Ok</Button0>
    </div>
  );
};

export { ResumeInputField, ResumeCancelOk };
export default ResumeForm;

ResumeInputField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

ResumeCancelOk.propTypes = {
  onCancel: PropTypes.func.isRequired,
};
