import { ErrorMessage, Field, Form, Formik } from "formik";
import './Login.css'
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";


const Register = () => {
    
  
    return (
        <div>
            <NavBar />
            <div className="loginPage">
                <div className="wrapper">
                    <h2>Register</h2>
                    <Formik
                      initialValues={{name:'', email:'', password:'', confirmPassword:''}}

                      validate={(values) => {
                        const errors = {};
                        console.log(values)

                        if(!values.name){
                            errors.name = "Name is required"
                        } else if(values.name.length !== values.name.trim().length){
                            errors.name = "No space in Start and End of Name"
                        }
                        if(!values.email){
                            errors.email = "Email is required"
                        }
                        if(!values.password){
                            errors.password = "Password is required"
                        } else if (/^\S*$/g.test(values.password)==false) {
                            errors.password = "Password should not have space"
                        } else if(values.password.length < 6){
                            errors.password = "Password must be at least 6 characters"
                        } 
                        if(!values.confirmPassword){
                            errors.confirmPassword = "Password does not match"
                        } else if(values.confirmPassword !== values.password){
                            errors.confirmPassword = "Password does not match"
                        }
                        return errors;
                      }}
                    >
                        <Form>
                            <div className="input-box">
                            <Field id="name" name="name" type="text" placeholder="Enter your name"/>
                            <ErrorMessage name="name" component="div" className="text-danger"/>
                            </div>
                            <div className="input-box">
                                <Field id="email" name="email" type="email" placeholder="Enter your email"/>
                                <ErrorMessage name="email" component="div" className="text-danger"/>
                            </div>
                            <div className="input-box">
                                <Field id="password" name="password" type="password" placeholder="Create password"/>
                                <ErrorMessage name="password" component="div" className="text-danger"/>
                            </div>
                            <div className="input-box">
                                <Field id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm password"/>
                                <ErrorMessage name="confirmPassword" component="div" className="text-danger"/>
                            </div>
                            <div className="input-box button">
                                <Field id="Submit" type="Submit" value="Register Now" />
                            </div>
                            <div className="text">
                                <h3>Already have account? <Link to="/login">Login now</Link></h3>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default Register