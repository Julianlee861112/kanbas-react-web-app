import { Link, useLocation } from "react-router-dom";
function ProjectNav() {
    const { pathname } = useLocation();
    return (
      <nav className="nav nav-tabs mt-2">
        <Link to="/project/signin"
              className={`nav-link ${pathname.includes("signin") ? "active" : ""}`}>Sign In</Link>
        <Link to = "/project/signup"className={`nav-link ${pathname.includes("signup") ? "active" : ""}`}>Sign Up</Link>
        <Link to = "/project/account"className={`nav-link ${pathname.includes("account") ? "active" : ""}`}>Account</Link>
        <Link to = "/project/admin/users"className={`nav-link ${pathname.includes("admin") ? "active" : ""}`}>UserTable</Link>
      </nav>
    
    );
  }
  
export default ProjectNav;