import { Link } from "react-router-dom";
import { FaFileLines } from "react-icons/fa6";
import {React, useState} from "react";
import db from "../Database";
import "./index.css";
function Dashboard() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });

  const addNewCourse = () => {
    setCourses([...courses,
              { _id: new Date().getTime(), ...course,
                 }]);
  }
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };


  return (
    <div>
      <h1>Dashboard</h1>
      <div className="row-5 ms-3 p-0" >
        <h5>Course</h5>
        <input value={course._id} className="form-control" placeholder="ID"
             onChange={(e) => setCourse({ ...course, _id: e.target.value }) } />
        <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
        <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
        <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
        <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
        <button className="btn btn-success" onClick={addNewCourse} >
          Add
        </button>
        <button className="btn btn-primary" onClick={updateCourse} >
          Update
        </button>
        




      </div>
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
                <div className="col">
                <button className="btn btn-warning btn-sm"
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}>
                  Edit
                </button>

                </div>
                <div className="col">
                  <button className = "btn btn-danger btn-sm"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}>
                    Delete
                  </button>
                </div>
              </div>
            
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
export default Dashboard;
