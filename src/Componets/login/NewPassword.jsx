import { ErrorMessage, Field, Form, Formik } from "formik";
import NavBar from "../NavBar/NavBar";

const NewPassword = () => {
    return (
        <div >
          <NavBar />
            <div className="loginPage">
                <div className="wrapper">
                    <h2>New Password</h2>
                    <Formik 
                    initialValues={{Password:'', ConfirmPassword:''}}
                    validate={(values) => {
                        const errors = {};
                        if(!values.Password){
                            errors.Password = "Email is required"
                        }else if(values.Password.length < 6){
                            errors.Password = "Password must be at least 6 characters"
                        }
                        if(values.ConfirmPassword !== values.Password){
                            errors.ConfirmPassword = "Password does not match"
                        }
                        return errors;
                    }}
                    onSubmit={(values) => {
                        window.location.href = "/Login"
                    }}
                    >
                        <Form>
                            <div className="input-box">
                                <Field type="Password" id="Password" name="Password"
                                placeholder="New Password"/>
                                <ErrorMessage name="Password" component="div" className="text-danger"/>
                            </div>
                            <div className="input-box">
                                <Field type="Password" id="ConfirmPassword" name="ConfirmPassword"
                                placeholder="Confirm New Password"/>
                                <ErrorMessage name="ConfirmPassword" component="div" className="text-danger"/>
                            </div>
                            <div className="input-box button">
                                <Field id="Submit" type="Submit" value="Change Password" />
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default NewPassword;