// Add a new student

import React, {useState, useEffect} from "react";
import axios from 'axios'; //It is a promise base HTTP Client and use for network request.
import {useNavigate } from 'react-router-dom';
import StudentForm from "./StudentForm";

const CreateStudent = () =>{
    let navigate = useNavigate();

    const [formValues, setFormValues] = useState({name:'',email:'',rollNo:''})
    const onSubmit = studentObject =>{
        axios.post('http://localhost:4000/students/create-student', 
        studentObject)
            .then(res =>{
                if(res.status === 200){
                    alert('Student successfully added');
                    navigate(`/student-list`);
                }                    
                else Promise.reject()
            })
            .catch(err => alert('Something went wrong'))
    };


    return(
        <StudentForm initialValues={formValues} 
        onSubmit={onSubmit} 
        enableReinitialize>
        Create Student
      </StudentForm>
    );
};

export default CreateStudent;