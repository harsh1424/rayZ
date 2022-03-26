import {  useState } from "react";

const Form = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        place: "",
        classs: "",
        school: "",
        gender: "male",
        dob: ""
      });

      let name, value;
      const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
    
        setUserData({ ...userData, [name]: value });
      };
    

    const submitHandler = async(event) => {
        event.preventDefault();

       const {firstName, lastName, phone, email, classs, place, school, gender, dob} = userData;
        const response = await fetch('https://rayz-14795-default-rtdb.firebaseio.com/users.json',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
                },
            body : JSON.stringify({
                firstName, lastName, phone, email, classs, place, school, gender, dob
            })
        })

        if(response) {
            alert('Data sent successfully')
            resetHandler()

        }else{
            alert('something went wrong')
        }
      
        
    }

    const resetHandler = () => {
      setUserData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        place: "",
        classs: "",
        school: "",
        gender: "male",
        dob: ""
      })
    }
  return (
    <div className="container formContainer">
      <form onSubmit={submitHandler}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="FirstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              id="FirstName"
              value={userData.firstName}
              onChange={postUserData}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="LastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              id="LastName"
              value={userData.lastName}
              onChange={postUserData}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-6">
            <label htmlFor="DOB" className="form-label">
              
              Date Of Birth
            </label>
            <input type="date" className="form-control" name="dob" id="DOB" value={userData.dob}
              onChange={postUserData} />
          </div>
          <div className="col-md-6 mb-4">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select className="form-select" name="gender"  required value={userData.gender}
              onChange={postUserData}>
              
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <label htmlFor="class" className="form-label">
              Class
            </label>
            <input
              type="text"
              name="classs"
              id="class"
              
              className="form-control"
              value={userData.classs}
              onChange={postUserData}
              required
            />
          </div>
          <div className="col-md-6 mb-4">
            <label htmlFor="contact" className="form-label">
              Contact No
            </label>
            <input
              type="number"
              name="phone"
              id="contact"
              className="form-control"
              value={userData.phone}
              onChange={postUserData}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="Email" value={userData.email} name="email"
              onChange={postUserData} required />
        </div>
        <div className="mb-3">
          <label htmlFor="place" className="form-label">
            Place
          </label>
          <input
            type="text"
            name="place"
            id="place"
            className="form-control"
            value={userData.place}
              onChange={postUserData}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="school" className="form-label">
            School
          </label>
          <input
            type="text"
            name="school"
            id="school"
            required
            className="form-control"
            value={userData.school}
              onChange={postUserData}
          />
        </div>
        <div className="mb-4 text-center">
        <button type='button' className='btn btn-primary mb-4 me-2' onClick={resetHandler} >
          Reset
        </button>
        <button  className='btn btn-primary mb-4'>Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
