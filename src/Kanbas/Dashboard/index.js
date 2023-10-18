import { Link } from "react-router-dom";
import { FaFileLines } from "react-icons/fa6";
import db from "../Database";
import "./index.css";
function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="row d-flex flex-row flex-wrap gx-0">
        {courses.map((course) => (
          <div className = "card m-3" style={{"width": "16rem"}}>
            <img src={require("./card-background.jpg")} className="card-img-top" style={{"height": "150px"}} />
            <div className="card-body p-2 pb-0">
              <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                {course.name}
              </Link>
              <p className="card-text text-secondary">
              {course.number}
              </p>
            </div>
            <div className="dashboard-action-container">
              <div className="row text-center gx-0">
                <div className="col">
                  <FaFileLines/>
                </div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
              </div>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
{/* <div class="card m-3" style="width: 16rem">
      <img
          src="../src/card-background.jpg"
          class="card-img-top"
          style="height: 150px"
      />
      <div class="card-body p-2 pb-0">
          <a
              href="../Courses/Home/index.html"
              style="
                  text-decoration: none;
                  display: inline;
              "
          >
              <h6 class="card-title mb-0">Course1</h6>
          </a>
          <p class="card-text text-secondary">
              Course1<br />course
          </p>
      </div>
      <div class="dashboard-action-container">
          <div class="row text-center gx-0">
              <div class="col">
                  <i class="fa-solid fa-file-lines"></i>
              </div>
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
          </div>
      </div>
    </div> */}