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
	const [schools, setSchools] = useState([
		{
			id: 1,
			name: "Some Epic School",
			from: 2010,
			to: 2018
		},
		{
			id: 2,
			name: "Wellspring Christian Family Schools",
			from: 2019,
			to: 2022,
		},
	]);

	const [addingExperience, setAddingExperience] = useState(false);
	
	const handleSubmit = (e) => {
	  e.preventDefault();
	  const fd = new FormData(e.target);
	  const schoolName = fd.get("school-name");
	  const syFrom = fd.get("sy-from");
	  const syTo = fd.get("sy-to");
	  setSchools([
	    ...schools,
	    { id: schools.length + 1, name: schoolName, from: syFrom, to: syTo }
	  ]);
	  
	  setAddingExperience(false);
	};
  
	if (addingExperience) {
	  return (
	    <form onSubmit={handleSubmit}>
	      <div className={styles.formField}>
	        <label htmlFor="school-name">School Name</label>
	        <input type="text" id="school-name" name="school-name" required />
	      </div>
	      
	      <div className={styles.schoolYear}>
	        <div className={styles.formField}>
	          <label htmlFor="sy-from">From</label>
	          <input type="number" min="0" max="9999" id="sy-from" name="sy-from" required />
	        </div>
	        
	        <div className={styles.formField}>
	          <label htmlFor="sy-to">To</label>
	          <input type="number" min="0" max="9999" id="sy-to" name="sy-to" required />
	        </div>
	      </div>
	      
	      <div className={styles.cancelok}>
  	      <Button0
  	        onClick={() => setAddingExperience(false)}
  	        className={styles.cancel}
  	        type="button"
  	      >
  	        Cancel
  	      </Button0>
  	      <Button0
  	        className={styles.ok}
  	      >
  	        Ok
  	      </Button0>
	      </div>
	    </form>
	  );
	} else {
  	return (
  		<div className={styles.experiences}>
  			<ul>
  				{schools.map(school => (
  					<li key={school.id}>
  						<ButtonImage
  							alt="delete entry"
  							src="./svgrepo/trash-bin-minimalistic-svgrepo-com.svg"
  							className={styles.deleteBtn}
  							onClick={() => setSchools(schools.filter(s => s.id !== school.id))}
  						/>
  						<div className={styles.info}>
  							<h3>{school.name}</h3>
  							<p>{school.from + " - " + school.to}</p>
  						</div>
  					</li>
  				))}
  			</ul>
  
  			<Button0
  				className={styles.btnAddNewExp}
  				onClick={() => setAddingExperience(true)}
  			>
  				New
  			</Button0>
  		</div>
  	);
	}
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