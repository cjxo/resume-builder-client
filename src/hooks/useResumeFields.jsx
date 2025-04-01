import { createContext, useContext, useState, } from "react";

const ResumeFieldContext = createContext({
  general: {
    fullName: "",
    occupation: "",
    telephone: "",
    email: "",
    location: "",
    linkedin: "",
  },
  setGeneral: () => {},

  //skill shape:
  // {
  //   id: Nonnegative Integer,
  //   name: String,
  //   level: Nonnegative Integer
  // }
  skills: [],
  setSkills: () => {},

  // language shape:
  // {
  //   id: Nonnegative Integer,
  //   name: String,
  //   level: Nonnegative Integer
  // } 
  languages: [],
  setLanguages: () => {},

  // school shape:
  // {
  //   id: Nonnegative Integer,
  //   name: String,
  //   from: Nonnegative Integer,
  //   to: Nonnegative Integer,
  // } 
  schools: [],
  setSchools: () => {},

  // work shape:
  // {
  //   id: Nonnegative Integer,
  //   name: String,
  //   from: Nonnegative Integer,
  //   to: Nonnegative Integer,
  //   position: String,
  //   achievements: Array Of { id: Nonnegative Integer, name: string }
  // } 
  works: [],
  setWorks: () => {},

  description: "",
  setDescription: () => {},
});

const ResumeFieldProvider = ({ children }) => {
  const [general, setGeneral] = useState({
    fullName: "Your Full Name",
    occupation: "Software Engineer",
    telephone: "123-456-789",
    email: "your-email@email.com",
    location: "1232 Legit St., Somewhere City",
    linkedin: "https://www.linkedin.com/",
  });
  const [skills, setSkills] = useState([
    { id: 1, name: "HTML", level: 3, },
    { id: 2, name: "CSS", level: 3, },
    { id: 3, name: "JavaScript", level: 3, },
    { id: 4, name: "HLSL", level: 4, },
  ]);

  const [languages, setLanguages] = useState([
    { id: 1, name: "Japanese", level: 2, },
    { id: 2, name: "English", level: 4, },
  ]);

  const [schools, setSchools] = useState([
    {
      id: 1,
      name: "Your School0 Here",
      from: 2010,
      to: 2018,
    },
    {
      id: 2,
      name: "Your School1 Here",
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
        {
          id: 1,
          name: "Working with the wider development team",
        },
        {
          id: 2,
          name: "Manage website design, content, and SEO Marketing, Branding and Logo Design",
        },
      ],
    },
  ]);

  const [description, setDescription] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

  const passDownThis = {
    general, setGeneral,
    skills, setSkills,
    languages, setLanguages,
    schools, setSchools,
    works, setWorks,
    description, setDescription,
  };
  return (
    <ResumeFieldContext.Provider value={passDownThis}>
      {children}
    </ResumeFieldContext.Provider>
  );
};

const useResumeFields = () => useContext(ResumeFieldContext);

export default useResumeFields;
export { ResumeFieldContext, ResumeFieldProvider };
