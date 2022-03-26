import basicCourse from '../Store/basic.pdf';
const OurCourses = () => {
  return (
    <section>
      <img src="images/courses.png" className="img-fluid" alt="course" />
      <div className="container my-4">
        <div className="row mb-2 ">
          <div className="col-md-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                
                <h3 className="mb-0 text-primary">Basic</h3><br />
                
                <p className="card-text mb-4">
                  2 days Basic Robotics workshop with hands-on project <br/>
                  <a href={basicCourse} target="_blank">Click here to know more</a>
                </p>

                <strong>Course fee-&#8377; <strike>1000 </strike>&#8377; 200  </strong>
               
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  className="bd-placeholder-img"
                  width="200"
                  height="250"
                  src="/images/course1.png"
                  alt="course-1"
                />
               
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                
                <h3 className="mb-0 text-success">Intermediate</h3><br />
                
                <p className="card-text mb-4">
                  7 days Intermediate Robotics workshop with hands-on project
                </p>

                <strong>Course fee-&#8377; <strike>5000 </strike>&#8377; 1000  </strong>
               
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  className="bd-placeholder-img"
                  width="200"
                  height="250"
                  src="/images/course2.jpg"
                  alt="course-2"
                />
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-4">
        <div className="row mb-2 ">
          <div className="col-md-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                
                <h3 className="mb-0 text-primary">Advance</h3><br />
                
                <p className="card-text mb-4">
                  1 Month Advance Robotics workshop with one to one guidance and multiple  hands-on project
                </p>

                <strong>Course fee-&#8377; <strike>20,000 </strike>&#8377; 5000  </strong>
               
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  className="bd-placeholder-img"
                  width="200"
                  height="250"
                  src="/images/course3.jpg"
                  alt="course-3"
                />
               
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                
                <h3 className="mb-0 text-success">Summer Camp</h3><br />
                
                <p className="card-text mb-4">
                  15 days Summer Camp with Robotics Learning and Competition and with multiple hands-on project
                </p>

                <strong>Course fee-&#8377; <strike>20,000 </strike>&#8377; 7500  </strong>
               
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  className="bd-placeholder-img"
                  width="200"
                  height="250"
                  src="/images/course4.jpg"
                  alt="course-1"
                />
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCourses;
