//import { Outlet } from "react-router-dom";
import { useState } from "react";

import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import ResumeInput from "./components/ResumeInput";
import ResumeDisplay from "./components/ResumeDisplay";
import { ResumeFieldProvider } from "./hooks/useResumeFields";

const App = () => {
  return (
    <>
      <TopBar />
      <main className="main-content">
        <ResumeFieldProvider>
          <ResumeInput />
          <ResumeDisplay />
        </ResumeFieldProvider>
      </main>
      <BottomBar />
    </>
  );
};

export default App;
