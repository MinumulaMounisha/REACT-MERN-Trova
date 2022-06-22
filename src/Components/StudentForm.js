///Reusable student form with Formik and React-Bootstrap.

import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import { TextField } from "@material-ui/core";


const studentForm = (props) =>{

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string()
            .email("you have entered an Invalid email address")
            .required("Required"),
        rollNo: Yup.number()
            .positive("Invalid roll number")
            .integer("Invalid roll number")
            .required("Required"),
    });

    console.log(props);

    return (
        <div className="form-wrapper">
            <Formik {...props} validationSchema={validationSchema}>
                <Form>
                    <FormGroup>
                    <Field name="name">{(props) => 
                        ( <>                 
                            <TextField
                              fullWidth
                              placeholder={props.field.name}
                              label={props.field.name}
                              {...props.field}
                            />
                            </>
                        )}
                    </Field>
                    <ErrorMessage name="name" className="d-block invalid-feedback" component="span" /> 
                    </FormGroup>
                    <FormGroup>
                    <Field name="email">{(props) => 
                        ( <>                 
                            <TextField
                              fullWidth
                              placeholder={props.field.name}
                              label={props.field.name}
                              {...props.field}
                            />
                            </>
                        )}
                    </Field>
                    <ErrorMessage name="email" className="d-block invalid-feedback" component="span" />
                    </FormGroup>
                    <FormGroup>
                    <Field name="rollNo">{(props) => 
                        ( <>                 
                            <TextField
                              fullWidth
                              placeholder={props.field.name}
                              label={props.field.name}
                              {...props.field}
                            />
                            </>
                        )}
                    </Field>
                    <ErrorMessage name="rollNo" className="d-block invalid-feedback" component="span" /> 
                    </FormGroup>
                    <br></br>
                    <Button variant="danger" size="lg" block="block" type="submit">
                        {props.children}
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default studentForm;
