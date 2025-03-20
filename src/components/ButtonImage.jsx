import PropTypes from "prop-types";
import styles from "../styles/component.module.css";

const ButtonImage = ({ className, src, alt, ...rest }) => {
	return (
		<button
			className={`${styles.buttonImage} ${className}`}
			{...rest}
		>
			<img src={src} alt={alt} />
		</button>
	);
};

ButtonImage.propTypes = {
	className: PropTypes.string,
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

export default ButtonImage;