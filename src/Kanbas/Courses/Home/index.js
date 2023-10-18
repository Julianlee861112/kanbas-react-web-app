import ModuleList from "../Modules/ModuleList";
import "./index.css";

function Home() {
  return (
    <div className="row">
        <div className="col-8">
            <h2>Home</h2>
            <ModuleList />
        </div>
        <div className="col-4">
          <div className = "row"> 
            <div className = "col">
              <h2>Course Status</h2>
            </div>
          </div>
          
          <div className="row gx-0">
              <div className="col">
                  <a
                      className="btn btn-light btn-sm sidebar-wide"
                      >Unpublish</a
                  >
              </div>
              <div className="col">
                  <a
                      className="btn btn-success btn-sm sidebar-wide"
                      >Published</a
                  >
              </div>
          </div>
          <a className="btn btn-light sidebar-wide btn sm"
              >Import Existing Content</a
          >
          <a className="btn btn-light sidebar-wide btn sm"
              >Import from Commons</a
          >
          <a className="btn btn-light sidebar-wide btn sm"
              >Choose Home Page</a
          >
          <a className="btn btn-light sidebar-wide btn sm"
              >View Course Stream</a
          >
          <a className="btn btn-light sidebar-wide btn sm"
              >New Announcement</a
          >
          <a className="btn btn-light sidebar-wide btn sm"
              >New Analytics</a
          >
          <a className="btn btn-light sidebar-wide btn sm"
              >View Course Notifications</a
          >
          <div className="to-do-container">To-do-List</div>
          <div className="comming-up-container">
              Comming up
          </div>
          
        </div>
    </div>
  );
}
export default Home;