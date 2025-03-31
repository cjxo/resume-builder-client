import styles from "../styles/component.module.css";
import LevelCircles from "./LevelCircles";
import useResumeFields from "../hooks/useResumeFields";

const GeneralDisplay = () => {
  const { general } = useResumeFields();
  return (
    <div className={styles.generalDisplay}>
      <div>
        <h2 className={styles.name}>{general.fullName}</h2>
        <h2 className={styles.occupation}>{general.occupation}</h2>
      </div>
      
      <ul>
        <li>
          <img
            src="./svgrepo/phone-svgrepo-com.svg"
            alt="Telephone Number"
          />
          <p>{general.telephone}</p>
        </li>
   
        <li>
          <img
            src="./svgrepo/email-svgrepo-com.svg"
            alt="Email"
          />
          <p>{general.email}</p>
        </li>

        <li>
          <img
            src="./svgrepo/location-svgrepo-com.svg"
            alt="Location"
          />
          <p>{general.location}</p>
        </li>
        
        <li>
          <img
            src="./svgrepo/linkedin-svgrepo-com.svg"
            alt="LinkedIn"
          />
          <p>{general.linkedin}</p>
        </li>
      </ul>
    </div>
  );
};

const EducationDisplay = () => {
  const { schools } = useResumeFields();
  return (
    <div className={styles.educationDisplay}>
      <div className={styles.displayHeader}>
        <img
          src="./svgrepo/book-svgrepo-com.svg"
          alt="Education"
        />
        <h2>Education</h2>
      </div>
      <ul>
        {schools.map(school => (
          <li key={school.id}>
            <h3>{school.name}</h3>
            <p>{school.from + " - " + school.to}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SkillsDisplay = ({ name, imgSrc, skills }) => {
  return (
    <div className={styles.skillsDisplay}>
      <div className={styles.displayHeader}>
        <img
          src={imgSrc}
          alt={name}
        />
        <h2>{name}</h2>
      </div>
      <ul>
        {skills.map(skill => (
          <li key={skill.id}>
            <p>{skill.name}</p>
            <LevelCircles level={skill.level} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProfileDisplay = () => {
  const { description } = useResumeFields();
  return (
    <div className={styles.profileDisplay}>
      <div className={styles.displayHeader}>
        <img
          src="./svgrepo/info-alt-svgrepo-com-black.svg"
          alt="Profile"
        />
        <h2>Profile</h2>
      </div>
      <p>
        {description}
      </p>
    </div>
  );
};
 
const WorkDisplay = () => {
  const { works } = useResumeFields();
  return (
    <div className={styles.workDisplay}>
      <div className={styles.displayHeader}>
        <img
          src="./svgrepo/work-case-filled-svgrepo-com-black.svg"
          alt="Work"
        />
        <h2>Work</h2>
      </div>
      <ul className={styles.workList}>
        {works.map(work => (
          <li key={work.id}>
            <div className={styles.year}>
              <p>{work.from}</p>
              <p>-</p>
              <p>{work.to}</p>
            </div>
            
            <div className={styles.verticalBar}>
            </div>
              
            <div className={styles.desc}>
              <h3 className={styles.workName}>{work.name}</h3>
              <p className={styles.workPos}>{work.position}</p>
              
              <ul className={styles.achievementList}>
                {work.achievements.map(achievement => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ResumeDisplay = () => {
  // TODO(cj): we need to decide the correct dimensions of the resume 
  
  const { skills, } = useResumeFields();
  const { languages, } = useResumeFields();
  return (
    <section className={styles.resumeDisplay}>
      <div className={styles.leftSide}>
        <GeneralDisplay  />
        <EducationDisplay />
        <SkillsDisplay
          name="Skills"
          skills={skills}
          imgSrc="./svgrepo/brain-14-svgrepo-com.svg"
        />
        <SkillsDisplay
          name="Languages"
          skills={languages}
          imgSrc="./svgrepo/language-square-svgrepo-com.svg"
        />
      </div>

      <div className={styles.rightSide}>
        <ProfileDisplay />
        <WorkDisplay />
      </div>
    </section>
  );
};

export default ResumeDisplay;
