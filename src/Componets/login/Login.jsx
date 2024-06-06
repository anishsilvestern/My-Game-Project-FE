import { ErrorMessage, Field, Form, Formik } from "formik";
import './Login.css'
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";


const Login = () => {
    
  
    return (
        <div >
          <NavBar />
            <div className="loginPage">
                <div className="wrapper">
                    <h2>Login</h2>
                    <Formik 
                    initialValues={{email:'', password:''}}
                    validate={(values) => {
                        const errors = {};
                        if(!values.email){
                            errors.email = "Email is required"
                        }
                        if(!values.password){
                            errors.password = "Password is required"
                        } else if(values.password.length < 6){
                            errors.password = "Password must be at least 6 characters"
                        }
                        return errors;
                    }}
                    >
                        <Form>
                            <div className="input-box">
                                <Field type="email" id="email" name="email"
                                placeholder="Enter your email"/>
                                <ErrorMessage name="email" component="div" className="text-danger"/>
                            </div>
                            <div className="input-box">
                                <Field type="password" id="password" name="password"  placeholder="Enter your password"/>
                                <ErrorMessage name="password" component="div" className="text-danger"/>
                            </div>
                            <div className="input-box button">
                                <Field id="Submit" type="Submit" value="Login Now" />
                            </div>
                            <div className="text">
                                <h3>Create New account? <Link to="/register">Register now</Link></h3>
                                <h3>---------------</h3>
                                <h3>Forgot Password? <Link to="/forgotPassword">Click here</Link></h3>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default Login