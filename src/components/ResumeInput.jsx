import { useState, useRef } from "react";

import ButtonImage from "./ButtonImage";
import { Button0 } from "./Button.jsx";
import styles from "../styles/component.module.css";
import ResumeForm, { ResumeInputField, ResumeCancelOk } from "./ResumeForm";
import GenericEntryContainer from "./GenericEntryContainer";
import LevelCircles from "./LevelCircles";
import useResumeFields from "../hooks/useResumeFields";

const GeneralInterface = () => {
  const { general, setGeneral } = useResumeFields();

  return (
    <ResumeForm>
      <ResumeInputField
        value={general.fullName}
        onChange={(e) => setGeneral({ ...general, fullName: e.target.value })}
        label="Full Name:"
        name="full-name"
      />
      <ResumeInputField
        value={general.occupation}
        onChange={(e) => setGeneral({ ...general, occupation: e.target.value })}
        label="Occupation:"
        name="occupation"
      />
      <ResumeInputField
        value={general.telephone}
        onChange={(e) => setGeneral({ ...general, telephone: e.target.value })}
        type="tel"
        label="Telephone:"
        name="telephone"
      />
      <ResumeInputField
        value={general.email}
        onChange={(e) => setGeneral({ ...general, email: e.target.value })}
        type="email"
        label="email"
        name="email"
      />
      <ResumeInputField
        value={general.location}
        onChange={(e) => setGeneral({ ...general, location: e.target.value })}
        label="location"
        name="location"
      />
      <ResumeInputField
        value={general.linkedin}
        onChange={(e) => setGeneral({ ...general, linkedin: e.target.value })}
        label="linkedin"
        name="linkedin"
      />
    </ResumeForm>
  );
};

const EducationInterface = () => {
  const { schools, setSchools } = useResumeFields();
  const [addingExperience, setAddingExperience] = useState(false);

  const [editId, setEditId] = useState(null);
  const [schoolName, setSchoolName] = useState("");
  const [fromTo, setFromTo] = useState({});
 
  const handleEntryEdit = (id) => {
    const school = schools.find(school => school.id === id);
    if (school) {
      setEditId(id);
      setAddingExperience(true);
      setSchoolName(school.name);
      setFromTo({ from: school.from, to: school.to });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    const schoolName = fd.get("school-name");
    const syFrom = fd.get("sy-from");
    const syTo = fd.get("sy-to");

    if (editId) {
      const newSchools = [...schools];
      const school = newSchools.find(school => school.id === editId);
      school.name = schoolName;
      school.from = syFrom;
      school.to = syTo;
      setSchools(newSchools);
    } else {
      setSchools([
        ...schools,
        { id: schools.length + 1, name: schoolName, from: syFrom, to: syTo }
      ]);
    }
    
    setAddingExperience(false);
    setEditId(null);
    setSchoolName("");
    setFromTo({});
  };
  
  if (addingExperience) {
    return (
      <ResumeForm onSubmit={handleSubmit}>
        <ResumeInputField defaultValue={schoolName} label="School Name:" name="school-name" />
        <div className={styles.experienceYear}>
          <ResumeInputField type="number" defaultValue={fromTo.from} label="From:" name="sy-from" min="0" max="9999" required />
          <ResumeInputField type="number" defaultValue={fromTo.to} label="To:" name="sy-to" min="0" max="9999" required />
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
        onEntryEdit={(id) => handleEntryEdit(id)}
      /> 
    );
  }
};

const WorkInterface = () => { 
  const { works, setWorks } = useResumeFields();

  console.log(works);
  const [editId, setEditId] = useState(null);
  const [addingExperience, setAddingExperience] = useState(false);
  const inputRef = useRef();

  const [companyName, setCompanyName] = useState("");
  const [fromTo, setFromTo] = useState({});
  const [position, setPosition] = useState("");
  const [addingAchievement, setAddingAchievement] = useState(false);
  const [achievementList, setAchievementList] = useState([]);
  
  const handleAddAchievement = (e) => {
    setAddingAchievement(false);
    
    const target = inputRef.current;
    if (target.value) {
      setAchievementList((list) => [...list, { id: list.length + 1, name: target.value }]);
    }
  };
  
  const handleCancel = () => {
    setEditId(null);
    setAddingExperience(false);
    setAchievementList([]);
    setCompanyName("");
    setFromTo({});
    setPosition("");
  };

  const handleEntryEdit = (id) => {
    const work = works.find(work => work.id === id);
    if (work) {
      setAchievementList([...work.achievements]);
      setCompanyName(work.name);
      setFromTo({ from: work.from, to: work.to });
      setPosition(work.position);
      setAddingExperience(true);
      setEditId(id);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    const companyName = fd.get("company-name");
    const workFrom = fd.get("work-from");
    const workTo = fd.get("work-to");
    const position = fd.get("position");
    if (editId) {
      const newWorks = [...works];
      const work = newWorks.find(work => work.id === editId);
      work.name = companyName;
      work.from = workFrom;
      work.to = workTo;
      work.position = position;
      work.achievements = [...achievementList];
      setWorks(newWorks);
    } else {
      setWorks([
        ...works,
        {
          id: works.length + 1,
          name: companyName,
          from: workFrom,
          to: workTo,
          position,
          achievements: [...achievementList],
        }
      ]);
    }
    
    handleCancel();
  };
  
  if (addingExperience) {
    return (
      <ResumeForm onSubmit={handleSubmit}>
        <ResumeInputField label="Company Name:" defaultValue={companyName} name="company-name" required />  
        <div className={styles.experienceYear}>
          <ResumeInputField type="number" defaultValue={fromTo.from} min="0" max="9999" label="From:" name="work-from" required />
          <ResumeInputField type="number" min="0" defaultValue={fromTo.to} max="9999" label="To:" name="work-to" required />
        </div>
        <ResumeInputField label="Position:" defaultValue={position} name="position" required />
        
        <div className={styles.resumeInputField}>
          <label htmlFor="work-to">Achievements:</label>
          <ul>
            {achievementList.map(achievement => (
              <li key={achievement.id}>
                <ButtonImage
                  alt="delete entry"
                  src="./svgrepo/trash-bin-minimalistic-svgrepo-com.svg"
                  onClick={() => setAchievementList(achievementList.filter(a => a.id !== achievement.id))}
                  type="button"
                />
                <p>{achievement.name}</p>
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
                    <li key={achievement.id}>
                      {achievement.name}
                    </li>
                  ))}
                </ul>
              </div>
            ),
          }
        ))}
        onEntryDelete={(id) => setWorks(works.filter(w => w.id !== id))}
        onEntryEdit={(id) => handleEntryEdit(id)}
      />
    );
  }
};
 
const DescriptionInterface = () => {
  const { description, setDescription } = useResumeFields();
  const handleChange = (e) => {
    setDescription(e.target.value);
  };
  return (
    <ResumeForm>
      <textarea rows="10" value={description} onChange={handleChange}></textarea>
    </ResumeForm>
  );
};
 
const SkillsInterface = ({ entryList, setEntryList }) => {
  const [addingEntry, setAddingEntry] = useState(false);
  
  const [editId, setEditId] = useState(null);
  const [skillName, setSkillName] = useState("");
  const [skillLevelSelect, setSkillLevelSelect] = useState("Beginner"); 

  const handleEntryEdit = (id) => {
    const entry = entryList.find(entry => entry.id === id);
    if (entry) {
      setEditId(id);
      setSkillName(entry.name);
      console.log(entry);
      setAddingEntry(true);
      let skillLevel = "Beginner";
      switch (entry.level) {
        case 2: {
          skillLevel = "Amateur";
        } break;

        case 3: {
          skillLevel = "Competent";
        } break;

        case 4: {
          skillLevel = "Proficient";
        } break;

        case 5: {
          skillLevel = "Expert";
        } break;
      }
      setSkillLevelSelect(skillLevel);
    }
  };

  const handleCancel = () => {
    setEditId(null);
    setSkillName("");
    setSkillLevelSelect("Beginner");
    setAddingEntry(false);
  };
  
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
    
    if (editId) {
      const newEntryList = [...entryList];
      const entry = newEntryList.find(entry => entry.id === editId);
      entry.name = skillName;
      entry.level = level;
      setEntryList(newEntryList);
    } else {
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
    } 

    handleCancel();
  };
 
  if (addingEntry) {
    return (
      <ResumeForm onSubmit={handleSubmit}>
        <ResumeInputField defaultValue={skillName} label="Skill Name:" name="skill-name" />
        
        <div className={styles.resumeInputField}>
          <label htmlFor="skill-level-select">Choose a Skill Level:</label>
          <select defaultValue={skillLevelSelect} id="skill-level-select" name="skill-level-select" required>
            <option value="Beginner">Beginner</option>
            <option value="Amateur">Amateur</option>
            <option value="Competent">Competent</option>
            <option value="Proficient">Proficient</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
        <ResumeCancelOk onCancel={handleCancel} />
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
                
                <LevelCircles level={entry.level} />
              </div>
            ),
          }
        ))}
        onEntryDelete={(id) => setEntryList(entryList.filter(e => e.id !== id))}
        onEntryEdit={(id) => handleEntryEdit(id)}
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
      img: "./svgrepo/book-svgrepo-com.svg",
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

  const { skills, setSkills } = useResumeFields();
  const { languages, setLanguages } = useResumeFields();

  return (
    <section className={styles.resumeInput}>
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
    </section>
  );
};

export default SkillsInput;
