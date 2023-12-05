import Signin from "../users/signin";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../Nav";
import Account from "../users/account";
import UserTable from "../users/table";
import Signup from "../users/signup";
import ProjectNav from "../ProjectNav";
function Project() {
  return (
    <div className="row">
        <h1>Hi</h1>
      <div className="col-2">
        <Nav />
      </div>
      <div className="col-2">
        <ProjectNav />
      </div>
      <div className="col-10">
        <Routes>
          <Route path="/" element={<Navigate to="/project/signin" />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/users" element={<UserTable />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>


    </div>
  );
}
export default Project;