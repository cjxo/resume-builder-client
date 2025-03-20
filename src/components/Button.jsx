import PropTypes from "prop-types";
import styles from "../styles/component.module.css";

const Button0 = ({ className, children, ...rest }) => {
	return (
		<button
			className={`${styles.button0} ${className}`}
			{...rest}
		>
			{children}
		</button>
	);
};

Button0.propTypes = {
	className: PropTypes.string,
};

export {
	Button0
};