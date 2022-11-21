import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "./components/Login";
import FacilityRegistration from "./components/FacilityRegistration";
import Register from "./components/Register";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        drug
      </Routes>
      <Routes>
        <Route path="/facility" element={<FacilityRegistration />} />
      </Routes>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
