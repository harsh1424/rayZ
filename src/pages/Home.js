import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

const Home = () => {
  document.title="Home"
  return (
    <>
      <Carousel />
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6 text-conter">
            <img src="images/img2.png" alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 text-justify">
            <h2>What is Rayz Robotics?</h2>
            <p>
              Rayz robotics labs offer school and college students an
              oppurtunity to learn robotics and make a change in a imagine kids
              building robots which solve the problems of million pepole
            </p>
            <p>
              Besides becoming a certified roboteer ,the students also gets an
              oppurtunity to display their robots in tech fest of various IIT
              /Communities and at national and international level.
            </p>
            <Link className="ReadMore" to="/about">
              Read More
            </Link>

           
          </div>
        </div>
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6 text-justify">
            <h2>Why Robotics For Students?</h2>
            <p>
            With the rapid growth of technology under Industry 4.0, the education is also being upgraded to Education 4.0 which means most of the future jobs will be related to Artificial intelligence(AI), Machine Learning (ML) and Robotics. The current level of education taught in schools needs to be upgraded by bringing more practical exposure to the students. Robotics is way by which students can develop the skills of problem solving, practical approach to challenges and give a shape to their creativity. <br />Research shows that 80% of the Jobs will need strong foundation of STEM subjects. Most of the jobs will be related to Internet of Things (IOT), AI, Automation and Robotics in most of the fields like Aerospace, Aeronautics, Nuclear, Chemical, Pharma, Heavy Engineering, FMCG, Electronics, Medical Science, Home Automation and many more.


            </p>
            
          </div>
          <div className="col-md-6 text-center">
            <img src="images/img3.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6">
            {/* <div className="embed-responsive embed-responsive-16by9">
              <iframe
                width="450"
                height="300"
                src="https://www.youtube.com/embed/oHKCwyUa2rg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div> */}
            <img src="images/img1.png" alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 text-justify">
            <h2>Does our Education system prepares us well?</h2>
            <p>
            The current education system demands practical approach to subjects rather than only theory. It is required to provide Hands on experience of the theoretical concepts. Practical project based approach not only helps a student apply the theory, it also develops the problem solving skills among students. The stereotype theoretical education methodologies needs a change to prepare children for the future. Students need to be motivated to do physical exercises and play outdoor sports rather than playing games on cell phones and computers.
            </p>
        
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="text-center my-4">Reasons to Choose Rayz</h1>
        <div className="row">
          <div className="col-md-4">
            <i className="fas fa-award icons"></i>
            <h1 className="text-justify my-2">Skill development</h1>
            <p className="text-justify">
              
              Creativity of the child increases like team spirit, Problem
              Solving skills, Presentation skills and Competetive skill . They
              improve immensely after completing these courses
            </p>
          </div>
          <div className="col-md-4">
            <i className="fas fa-coins icons"></i>
            <h1 className="text-justify my-2">Affordable prices</h1>
            <p className="text-justify">
              We offer all our courses at the lowest prices that are affordable
              for every student. We also provide all the necessary equipment.
              Our main aim is to make this thing known to all the students and
              create a spark in them.
            </p>
          </div>
          <div className="col-md-4">
            <i className="fas fa-gifts icons"></i>
            <h1 className="text-justify my-2">Exiciting Gifts</h1>
            <p className="text-justify">
            We also provide some attractive gifts and prizes to the students who show some extraordinary effort. We also provide sponsorship to students who are winners of our robo competitions to participate in IIT Bombay Mood Indigo. Some gifts will also be distributed among the students.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
