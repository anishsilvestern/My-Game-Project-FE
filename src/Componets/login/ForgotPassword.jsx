import { ErrorMessage, Field, Form, Formik } from "formik";
import NavBar from "../NavBar/NavBar";

const ForgotPassword = () => {
    return (
        <div >
          <NavBar />
            <div className="loginPage">
                <div className="wrapper">
                    <h2>Forgot Password</h2>
                    <Formik 
                    initialValues={{email:''}}
                    validate={(values) => {
                        const errors = {};
                        if(!values.email){
                            errors.email = "Email is required"
                        }
                        return errors;
                    }}
                    onSubmit={(values) => {
                        window.location.href = "/emailCode"
                    }}
                    >
                        <Form>
                            <div className="input-box">
                                <Field type="email" id="email" name="email"
                                placeholder="Enter your email"/>
                                <ErrorMessage name="email" component="div" className="text-danger"/>
                            </div>
                            <div className="input-box button">
                                <Field id="Submit" type="Submit" value="Submit" />
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword