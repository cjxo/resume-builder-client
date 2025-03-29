import { useState, useRef } from "react";

import ButtonImage from "./ButtonImage";
import { Button0 } from "./Button.jsx";
import styles from "../styles/component.module.css";
import ResumeForm, { ResumeInputField, ResumeCancelOk } from "./ResumeForm";
import GenericEntryContainer from "./GenericEntryContainer";

const GeneralInterface = () => {
  return (
    <ResumeForm>
      <ResumeInputField label="Full Name:" name="full-name" />
      <ResumeInputField label="Occupation:" name="occupation" />
      <ResumeInputField type="tel" label="Telephone:" name="telephone" />
      <ResumeInputField type="email" label="email" name="email" />
      <ResumeInputField label="location" name="location" />
      <ResumeInputField label="linkedin" name="linkedin" />
    </ResumeForm>
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
      <ResumeForm onSubmit={handleSubmit}>
        <ResumeInputField label="School Name:" name="school-name" />
        <div className={styles.experienceYear}>
          <ResumeInputField type="number" label="From:" name="sy-from" min="0" max="9999" required />
          <ResumeInputField type="number" label="To:" name="sy-to" min="0" max="9999" required />
        </div>
        
        <ResumeCancelOk onCancel={() => setAddingExperience(false)} />
      </ResumeForm>
    );
  } else {
    return (
      <GenericEntryContainer
        onNewRequest={() => setAddingExperience(true)}
        entryList={schools.map(school => ({
            id: school.id,
            jsx: (
              <div className={styles.info}>
                <h3>{school.name}</h3>
                <p className={styles.duration}>{school.from + " - " + school.to}</p>
              </div>
            ),
          }
        ))}
        onEntryDelete={(id) => setSchools(schools.filter(s => s.id !== id))}
      /> 
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
  const [achievementList, setAchievementList] = useState([]);
  
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
    const companyName = fd.get("company-name");
    const workFrom = fd.get("work-from");
    const workTo = fd.get("work-to");
    const position = fd.get("work-position");
    
    setWorks([...works,
    {
      id: works.length + 1,
      name: companyName,
      from: workFrom,
      to: workTo,
      position,
      achievements: [...achievementList],
    }]);
    
    setAddingExperience(false);
    setAchievementList([]);
  };
  
  if (addingExperience) {
    return (
      <ResumeForm onSubmit={handleSubmit}>
        <ResumeInputField label="Company Name:" name="company-name" required />  
        <div className={styles.experienceYear}>
          <ResumeInputField type="number" min="0" max="9999" label="From:" name="work-from" required />
          <ResumeInputField type="number" min="0" max="9999" label="To:" name="work-to" required />
        </div>
        <ResumeInputField label="Position:" name="position" required />
        
        <div className={styles.resumeInputField}>
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
        
        <ResumeCancelOk onCancel={handleCancel} />
      </ResumeForm>
    );
  } else {
    return (
      <GenericEntryContainer
        onNewRequest={() => setAddingExperience(true)}
        entryList={works.map(work => ({
            id: work.id,
            jsx: (
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
            ),
          }
        ))}
        onEntryDelete={(id) => setWorks(works.filter(w => w.id !== id))}
      />
    );
  }
};
 
const DescriptionInterface = () => {
  return (
    <ResumeForm>
      <textarea rows="10"></textarea>
    </ResumeForm>
  );
};
 
const SkillsInterface = ({ entryList, setEntryList }) => {
  const [addingEntry, setAddingEntry] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    
    const skillName = fd.get("skill-name");
    const skillLevel = fd.get("skill-level-select");
    
    let level = 1;
    if (skillLevel === "Amateur") {
      level = 2;
    } else if (skillLevel === "Competent") {
      level = 3;
    } else if (skillLevel === "Proficient") {
      level = 4;
    } else if (skillLevel === "Expert") {
      level = 5;
    }
    
    setEntryList(
      [
        ...entryList,
        {
          id: entryList.length + 1,
          name: skillName,
          level: level, 
        }
      ]
    );
    
    setAddingEntry(false);
  };
  
  const generateCircles = (level) => {
    const result = [];
    for (let i = 0; i < 5; ++i) {
      result.push(
        <div className={`${styles.levelCircle} ${(i < level) && styles.enabled}`}></div>
      );
    }
    
    return result;
  };

  if (addingEntry) {
    return (
      <ResumeForm onSubmit={handleSubmit}>
        <ResumeInputField label="Skill Name:" name="skill-name" />
        
        <div className={styles.resumeInputField}>
          <label htmlFor="skill-level-select">Choose a Skill Level:</label>
          <select id="skill-level-select" name="skill-level-select" required>
            <option value="Beginner">Beginner</option>
            <option value="Amateur">Amateur</option>
            <option value="Competent">Competent</option>
            <option value="Proficient">Proficient</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
        <ResumeCancelOk onCancel={() => setAddingEntry(false)} />
      </ResumeForm>
    );
  } else {
    return (
      <GenericEntryContainer
        onNewRequest={() => setAddingEntry(true)}
        entryList={entryList.map(entry => ({
            id: entry.id,
            jsx: (
              <div className={styles.skillsWrap}> 
                <p>{entry.name}</p>
                
                <div className={styles.levelCircles}>
                  {generateCircles(entry.level)}
                </div>
              </div>
            ),
          }
        ))}
        onEntryDelete={(id) => setEntryList(entryList.filter(e => e.id !== id))}
      />
    );
  }
};

const SkillsInput = () => {
  const fields = [
    {
      id: 1,
      name: "General",
      img: "./svgrepo/document-general-letter-4-svgrepo-com.svg",
    },
    {
      id: 2,
      name: "Education",
      img: "./svgrepo/book-svgrepo-com.svg"
    },
    {
      id: 3,
      name: "Work",
      img: "./svgrepo/work-case-filled-svgrepo-com.svg",
    },
    {
      id: 4,
      name: "Description",
      img: "./svgrepo/info-alt-svgrepo-com.svg",
    },
    {
      id: 5,
      name: "Skills",
      img: "./svgrepo/brain-14-svgrepo-com.svg",
    },
    {
      id: 6,
      name: "Languages",
      img: "./svgrepo/language-square-svgrepo-com.svg",
    },
  ];
  
  const [selected, setSelected] = useState(1);
  
  const [skills, setSkills] = useState([
    { id: 1, name: "HTML", level: 3, },
    { id: 2, name: "CSS", level: 3, },
  ]);

  const [languages, setLanguages] = useState([
    { id: 1, name: "Japanese", level: 2, },
    { id: 2, name: "English", level: 4, },
  ]);
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
        <div className={styles.header}>
          <img
            src={fields[selected - 1].img}
            alt={`${fields[selected - 1].name}`}
          />
          <h2>{fields[selected - 1].name}</h2>
        </div>
        {(selected === 1) ? (
          <GeneralInterface />
        ) : (selected === 2) ? (
          <EducationInterface />
        ) : (selected === 3) ? (
          <WorkInterface />
        ) : (selected === 4) ? (
          <DescriptionInterface />
        ) : (selected === 5) ? (
          <SkillsInterface entryList={skills} setEntryList={setSkills} />
        ) : (selected === 6) ? (
          <SkillsInterface entryList={languages} setEntryList={setLanguages} />
        ) : (
          null
        )}
      </div>
    </div>
  );
};

export default SkillsInput;
