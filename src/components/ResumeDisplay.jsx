import styles from "../styles/component.module.css";
import LevelCircles from "./LevelCircles";

const GeneralDisplay = () => {
  return (
    <div className={styles.generalDisplay}>
      <div>
        <h2 className={styles.name}>Christian Joseph</h2>
        <h2 className={styles.occupation}>Software Engineer</h2>
      </div>
      
      <ul>
        <li>
          <img
            src="./svgrepo/phone-svgrepo-com.svg"
            alt="Telephone Number"
          />
          <p>123-456-789</p>
        </li>
   
        <li>
          <img
            src="./svgrepo/email-svgrepo-com.svg"
            alt="Email"
          />
          <p>nice-email@legit.com</p>
        </li>

        <li>
          <img
            src="./svgrepo/location-svgrepo-com.svg"
            alt="Location"
          />
          <p>1232 Legit St., Somewhere City</p>
        </li>
        
        <li>
          <img
            src="./svgrepo/linkedin-svgrepo-com.svg"
            alt="LinkedIn"
          />
          <p>https://www.linkedin.com/</p>
        </li>
      </ul>
    </div>
  );
};

const EducationDisplay = () => {
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
        <li>
          <h3>Some Epic School</h3>
          <p>2010 - 2018</p>
        </li>
        <li>
          <h3>Wellspring Christian Family Schools</h3>
          <p>2019 - 2022</p>
        </li>
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
  return (
    <div className={styles.profileDisplay}>
      <h2>Profile</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
};

const WorkDisplay = () => {
  return (
    <div className={styles.workDisplay}>
      <h2>Work</h2>
      <ul className={styles.workList}>
        <li>
          <div className={styles.year}>
            <p>2020</p>
            <p>-</p>
            <p>2023</p>
          </div>
        
          <div className={styles.verticalBar}>
          </div>

          <div className={styles.desc}>
            <h3 className={styles.workName}>Epic Company Co.</h3>
            <p className={styles.workPos}>Product Design Manager</p>
            
            <ul className={styles.achievementList}>
              <li>Working with the wider development team</li>
              <li>Manage website design, content, and SEO Marketing, Branding and Logo Design</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

const ResumeDisplay = () => {
  const skills = [
    { id: 1, name: "HTML", level: 3, },
    { id: 2, name: "CSS", level: 3, },
  ];

  const languages = [
    { id: 1, name: "Japanese", level: 2, },
    { id: 2, name: "English", level: 4, },
  ];

  return (
    <section className={styles.resumeDisplay}>
      <div className={styles.leftSide}>
        <GeneralDisplay />
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
