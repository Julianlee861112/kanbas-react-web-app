import React from "react";
import {useState, useEffect} from "react";
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
import CourseHeader from "./courseHeader";
import axios from "axios";

function Courses() {
  const URL = "http://localhost:4000/api/courses"
  const [course, setCourse] = useState({});
  const { courseId } = useParams();
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);


  const {pathname} = useLocation();
  const [empty, kanbas, coursesNotGoingToUse, id, screen] = pathname.split("/");
  return (
    <div class = "content d-block pe-5">
      <CourseHeader/>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0 pe-5"
          style={{
            left: "280px",
            top: "100px",
            
          }}

        >
          
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;
