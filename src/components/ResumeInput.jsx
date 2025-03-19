import styles from "../styles/component.module.css";

const SkillsInput = () => {
	return (
		<div className={styles.skillsInput}>
			<ul>
				<li>
					<button>General Information</button>
				</li>

				<li>
					<button>Education</button>
				</li>

				<li>
					<button>Work</button>
				</li>

				<li>
					<button>Description</button>
				</li>

				<li>
					<button>Skills</button>
				</li>

				<li>
					<button>Languages</button>
				</li>
			</ul>
		</div>
	);
};

export default SkillsInput;