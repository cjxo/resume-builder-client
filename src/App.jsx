//import { Outlet } from "react-router-dom";

import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import ResumeInput from "./components/ResumeInput";
import ResumeDisplay from "./components/ResumeDisplay";

const App = () => {
  return (
    <>
      <TopBar />
      <main className="main-content">
        <ResumeInput />
				<ResumeDisplay />
      </main>
      <BottomBar />
    </>
  );
};

export default App;