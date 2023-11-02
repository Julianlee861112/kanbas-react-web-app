import React, {useState} from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";  
import {
  addModule, deleteModule,updateModule, setModule} from "./modulesReducer";


function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  

  return (
    <ul className="list-group">
      
        <li className="list-group-item">
          
          <input className = "w-50 form-control" value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
          />
          <textarea className = "w-75 form-control"value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}

          />


          <button className = "float-end btn btn-primary" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
          <button className = "float-end btn btn-success" onClick={() => dispatch(updateModule(module))}> Update</button>
          
        </li>
      
        {modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item ">
              <h3>{module.name}</h3>
              <p>{module.description}</p>
              <button className = "float-end btn btn-success " onClick={() => dispatch(setModule(module))}>Edit</button>
              <button className="btn btn-danger float-end"
              onClick={() => dispatch(deleteModule(module._id))}>

              Delete
              </button>
              
              {
                module.lessons && (
                    <ul className="list-group">
                        {
                            module.lessons.map((lesson, index) => (
                                <li key={index} className="list-group-item">
                                  
                                  
                                    <h4>{lesson.name}</h4>
                                    <p>{lesson.description}</p>
                                    

                                </li>
                            ))
                        }
                    </ul>
                )
              }
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;


// import React from "react";
// import { useParams } from "react-router-dom";
// import db from "../../Database";


// function ModuleList() {
//   const { courseId } = useParams();
//   const modules = db.modules;
//   return (
//     <ul className="list-group">
//       {
//        modules
//          .filter((module) => module.course === courseId)
//          .map((module, index) => (
//            <li key={index} className="list-group-item">
//              <h3>{module.name}</h3>
//              <p>{module.description}</p>
//            </li>
//       ))
//       }
//     </ul>
//   );
// }
// export default ModuleList;