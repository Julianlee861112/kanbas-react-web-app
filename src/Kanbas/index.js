import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import "./index.css";

function Kanbas() {
  return (
    <div className="d-flex w-100">
      <KanbasNavigation />
      <Routes>
        <Route path="/" element={<Navigate to="Dashboard" />} />
        <Route path="Account" element={<Account />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Courses/:courseId/*" element={<Courses />} />
      </Routes>
    </div>
  );
}
export default Kanbas;
