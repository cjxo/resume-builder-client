//import { Outlet } from "react-router-dom";
import { useState } from "react";

import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import ResumeInput from "./components/ResumeInput";
import ResumeDisplay from "./components/ResumeDisplay";

const App = () => {
  // we should probably do useContext/Providers here! 
  const [general, setGeneral] = useState({
    fullName: "Christian Joseph",
    occupation: "Software Engineer",
    telephone: "123-456-789",
    email: "nice-email@legit.com",
    location: "1232 Legit St., Somewhere City",
    linkedin: "https://www.linkedin.com/",
  });
  const [skills, setSkills] = useState([
    { id: 1, name: "HTML", level: 3, },
    { id: 2, name: "CSS", level: 3, },
  ]);

  const [languages, setLanguages] = useState([
    { id: 1, name: "Japanese", level: 2, },
    { id: 2, name: "English", level: 4, },
  ]);

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

  const [description, setDescription] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

  return (
    <>
      <TopBar />
      <main className="main-content">
        <ResumeInput
          general={general}
          setGeneral={setGeneral}
          skills={skills}
          setSkills={setSkills}
          languages={languages}
          setLanguages={setLanguages}
          schools={schools}
          setSchools={setSchools}
          works={works}
          setWorks={setWorks}
          description={description}
          setDescription={setDescription}
        />
        <ResumeDisplay
          general={general}
          skills={skills}
          languages={languages}
          schools={schools}
          works={works}
          description={description}
        />
      </main>
      <BottomBar />
    </>
  );
};

export default App;
