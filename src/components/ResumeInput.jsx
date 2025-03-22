import { useState, useRef } from "react";

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
        <ul className={styles.experienceList}>
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
                <p className={styles.duration}>{school.from + " - " + school.to}</p>
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

const WorkInterface = () => {
  const [works, setWorks] = useState([
    {
      id: 1,
      name: "Some Company Co.",
      from: 2020,
      to: 2023,
      position: "Product Design Manager",
      achievements: [
        "Working with the wider development team",
        "Manage website design, content, and SEO Marketing, Branding and Logo Design",
      ],
    },
  ]);
  const [addingExperience, setAddingExperience] = useState(false);
  
  const inputRef = useRef();
  const [addingAchievement, setAddingAchievement] = useState(false);
  const [achievementList, setAchievementList] = useState(["Working with the wider development team"]);
  
  const handleAddAchievement = (e) => {
    setAddingAchievement(false);
    
    const target = inputRef.current;
    if (target.value) {
      setAchievementList([...achievementList, target.value]);
    }
  };
  
  const handleCancel = () => {
    setAddingExperience(false);
    setAchievementList([]);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    
    setAddingExperience(false);
    setAchievementList([]);
  };
  
  if (addingExperience) {
    return (
      <form onSubmit={handleSubmit}>
        <div className={styles.formField}>
          <label htmlFor="company-name">Company Name:</label>
          <input type="text" id="company-name" name="company-name" required />
        </div>
        
        <div className={styles.schoolYear}>
          <div className={styles.formField}>
            <label htmlFor="work-from">From:</label>
            <input type="number" min="0" max="9999" id="work-from" name="work-from" required />
          </div>
        
          <div className={styles.formField}>
            <label htmlFor="work-to">To:</label>
            <input type="number" min="0" max="9999" id="work-to" name="work-to" required />
          </div>
        </div>
        
        <div className={styles.formField}>
          <label htmlFor="position">Position:</label>
          <input type="text" id="position" name="position" required />
        </div>
        
        <div className={styles.formField}>
          <label htmlFor="work-to">Achievements:</label>
          <ul>
            {achievementList.map(achievement => (
              <li key={achievement}>
                {achievement}
              </li>
            ))}
          </ul>
          
          {addingAchievement ? (
            <div className={styles.achievementInput}>
              <input
                type="text"
                id="achievement"
                name="achievement"
                ref={inputRef}
                onBlur={() => setAddingAchievement(false)}
                required
                autoFocus
              />
              <ButtonImage
                alt="confirm"
                className={styles.addBtn}
                src="./svgrepo/check-read-svgrepo-com.svg"
                type="button"
                onMouseDown={handleAddAchievement}
              />
            </div>
          ) : (
            <ButtonImage
              alt="add entry"
              src="./svgrepo/add-svgrepo-com.svg"
              className={styles.addBtn}
              type="button"
              onClick={() => setAddingAchievement(true)}
            />
          )}
        </div>
        
        <div className={styles.cancelok}>
          <Button0
            onClick={handleCancel}
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
        <ul className={styles.experienceList}>
          {works.map(work => (
            <li key={work.id}>
              <ButtonImage
                alt="delete entry"
                src="./svgrepo/trash-bin-minimalistic-svgrepo-com.svg"
                className={styles.deleteBtn}
                onClick={() => setSchools(works.filter(s => s.id !== work.id))}
              />
              <div className={styles.info}>
                <h3>{work.name}</h3>
                <p className={styles.duration}>{work.from + " - " + work.to}</p>
                <p className={styles.position}>{work.position}</p>
                <ul className={styles.achievements}>
                  {work.achievements.map(achievement => (
                    <li key={achievement}>
                      {achievement}
                    </li>
                  ))}
                </ul>
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
        ) : (selected === 3) ? (
          <WorkInterface />
        ) : null}
      </div>
    </div>
  );
};

export default SkillsInput;
