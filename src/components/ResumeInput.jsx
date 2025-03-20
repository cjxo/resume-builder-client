import { useState } from "react";

import ButtonImage from "./ButtonImage";
import { Button0 } from "./Button.jsx";
import styles from "../styles/component.module.css";

const GeneralInterface = () => {
	return (
		<form>
			<div className={styles.formField}>
				<label htmlFor="full-name">Full Name</label>
				<input type="text" id="full-name" name="full-name" />
			</div>

			<div className={styles.formField}>
				<label htmlFor="occupation">Occupation</label>
				<input type="text" id="occupation" name="occupation" />
			</div>

			<div className={styles.formField}>
				<label htmlFor="telephone">Telephone</label>
				<input type="tel" id="telephone" name="telephone" />
			</div>

			<div className={styles.formField}>
				<label htmlFor="email">Email</label>
				<input type="email" id="email" name="email" />
			</div>

			<div className={styles.formField}>
				<label htmlFor="location">Location</label>
				<input type="text" id="location" name="location" />
			</div>
			
			<div className={styles.formField}>
				<label htmlFor="linkedin">LinkedIn</label>
				<input type="text" id="linkedin" name="linkedin" />
			</div>
		</form>
	);
};

const EducationInterface = () => {
	return (
		<div className={styles.experiences}>
			<ul>
				<li>
					<ButtonImage
						alt="delete entry"
						src="./svgrepo/trash-bin-minimalistic-svgrepo-com.svg"
						className={styles.deleteBtn}
					/>
					<div className={styles.info}>
						<h3>Some Epic School</h3>
						<p>2010 - 2018</p>
					</div>
				</li>

				<li>
					<ButtonImage
						alt="delete entry"
						src="./svgrepo/trash-bin-minimalistic-svgrepo-com.svg"
						className={styles.deleteBtn}
					/>
					<div className={styles.info}>
						<h3>Some Epic School</h3>
						<p>2010 - 2018</p>
					</div>
				</li>
			</ul>

			<Button0 className={styles.btnAddNewExp}>New</Button0>
		</div>
	);
};

const SkillsInput = () => {
	const fields = [
		{
			id: 1,
			name: "General",
		},
		{
			id: 2,
			name: "Education",
		},
		{
			id: 3,
			name: "Work",
		},
		{
			id: 4,
			name: "Description",
		},
		{
			id: 5,
			name: "Skills",
		},
		{
			id: 6,
			name: "Languages",
		},
	];
	
	const [selected, setSelected] = useState(1);

	return (
		<div className={styles.resumeInput}>
			<ul className={styles.inputList}>
				{fields.map(({ id, name }) => (
					<li key={id}>
						<Button0
							className={(selected === id) ? styles.selected : ""}
							type="button"
							onClick={() => setSelected(id)}
						>
							{name}
						</Button0>
					</li>
				))}
			</ul>
			<div className={styles.fieldDisplay}>
				<h2>{fields[selected - 1].name}</h2>
				
				{(selected === 1) ? (
					<GeneralInterface />
				) : (selected === 2) ? (
					<EducationInterface />
				) : null}
			</div>
		</div>
	);
};

export default SkillsInput;