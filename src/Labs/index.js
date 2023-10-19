import { Route, Routes, Link, useLocation, Navigate } from "react-router-dom";
import Assignment3 from "./a3";
import Nav from "../Nav";
function Labs() {
  const { pathname } = useLocation();
  // const { pathname } = location;
  return (
    <div className="container">
      <Nav />
      <h1>Labs</h1>
      <Routes>
        {/* <Route path="/" element={<Assignment3 />} /> */}
        <Route path="/" element={<Navigate to="a3" />} />
        <Route path="a3/*" element={<Assignment3 />} />
      </Routes>
      {/* <Assignment3 />
      <Assignment4 />
      <Assignment5 /> */}
    </div>
  );
}

export default Labs;
