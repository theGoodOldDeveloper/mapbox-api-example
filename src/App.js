import React from "react";
import "./App.css";
import Nasa from "./components/Nasa";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Link to={"/nasa"}>Hello World</Link>
      <Routes>
        {/* <Route path="/nasa" element={<Nasa />} /> */}
        <Route path={"/nasa"} element={<Nasa />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;

/* 
function App() {
  return (
    <React.Fragment>
      <div className="App">
        <h1>Hello World</h1> 
        <>
          <Routes>
            <Route path="/nasa" element={<Nasa />} />
          </Routes>
        </>
      </div>
    </React.Fragment>
  );
}
*/
