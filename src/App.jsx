import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import CandidateLogin from "./CandidateLogin";
import HrLogin from "./HrLogin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HrLogin />}></Route>
          <Route path="/candidate-login" element={<CandidateLogin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
