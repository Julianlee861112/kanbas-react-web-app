import { Route, Routes, Link, useLocation, Navigate } from "react-router-dom";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Nav from "../Nav";
import store from "./store";
import {Provider} from "react-redux";
function Labs() {
  const { pathname } = useLocation();
  // const { pathname } = location;
  return (
    <Provider store={store}>
      <div className="container">
        <Nav />
        <h1>Labs</h1>
        <Routes>
          {/* <Route path="/" element={<Assignment3 />} /> */}
          <Route path="/" element={<Navigate to="a3" />} />
          <Route path="a3/*" element={<Assignment3 />} />
          <Route path="a4/*" element={<Assignment4/>}/>
        </Routes>
      </div>
    </Provider>
  );
}

export default Labs;
