import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import JsonPre from "../../Labs/a3/JsonPre";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import {FaBars} from "react-icons/fa6";
import "./index.css";
function CourseHeader(){
  const { courseId } = useParams();
  const {pathname} = useLocation();
  const [empty, kanbas, courses, id, screen] = pathname.split("/");
  const course = db.courses.find((course) => course._id === courseId);

  return(
    <div className="content-header">
        <button type={"button"} className="profile-header-icon">
            <i className = "fa fa-bars fa-2x"></i>
        </button>
        <nav
          style={ {"--bs-breadcrumb-divider": '>'}}
          aria-label="breadcrumb"
          
        >
          <ol className="breadcrumb m-0 ">
            <li className="breadcrumb-item display-6">
              <a href="#" className="link-breadcrumb"
                  >Courses </a
              >
            </li>
            <li className="breadcrumb-item display-6">
              <a href="#" className="link-breadcrumb"
                  > &gt; {course.name}  </a
              >
            </li>
            <li
              className="breadcrumb-item active display-6"
              aria-current="page"
            >
              &gt; {screen}
            </li>
          </ol>
        </nav>
    </div>
  );
};
export default CourseHeader;