const About = () => {
  document.title = "About";
  return (
    <main>
      <img src="images/about.png" className="img-fluid" alt="about" />
      <div className="container my-4 border border-secondary">
          <div className="row my-4 ">
        <div className="col-md-3">
          <h2 className="text-start">Who We Are</h2>
        </div>
        <div className="col-md-9 text-justify">
            <p >A Team of motivated and cohesive individuals driven by a desire to transform the way of Engineering and STEM Education is accessed and consumed globally.</p>
            <p>Our objective is to prepare the students for Education 4.0 and provide practical exposure to students on technological topics of Artificial Intelligence, Machine Learning, Robotics & IOT which have been considered as the future technologies for next 20 years as per NAASCOM and Boston Consulting Group. We hold the vision of taking India to No 1 position in the field of Robotics & AI.</p>
        </div>
        </div>
      </div>

    </main>
  );
};

export default About;
