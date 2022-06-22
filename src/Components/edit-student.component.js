// create a component to update details. We will fetch student details to reinitialise form.

import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";
import {useNavigate  , useParams } from 'react-router-dom';

//import { withRouter } from "react-router-dom";

const EditStudent = (props) =>{
  const { id } = useParams();
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState({name: "", email: "", rollNo: ""});
  const onSubmit = (studentObject) => {
    
      axios
        .put(
          "http://localhost:4000/students/update-student/" + (id),
          studentObject
        )
        .then((res) => {
          
          if (res.status === 200) {
            alert("Student successfully updated");
            navigate(`/student-list`);
          } else Promise.reject();
        })
        .catch((err) => alert("Something went wrong"));
  };
  // Load data from server and reinitialize student form
  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/students/update-student/" + (id) 
       
      )
      .then((res) => {
        const { name, email, rollNo } = res.data;
        setFormValues({ name, email, rollNo });
      })
      .catch((err) => console.log(err));
  }, []);
  return(
      <StudentForm
          initialValues={formValues}
          onSubmit={onSubmit}
          enableReinitialize
      >
      Update Student
      </StudentForm>
  );
};

export default EditStudent;