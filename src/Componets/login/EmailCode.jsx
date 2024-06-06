import { ErrorMessage, Field, Form, Formik } from "formik";
import NavBar from "../NavBar/NavBar";

const EmailCode = () => {
    return (
        <div >
          <NavBar />
            <div className="loginPage">
                <div className="wrapper">
                    <h2>OTP to your email</h2>
                    <Formik 
                    initialValues={{otp:''}}
                    validate={(values) => {
                        const errors = {};
                        if(!values.otp){
                            errors.otp = "Email is required"
                        }
                        return errors;
                    }}
                    onSubmit={(values) => {
                        window.location.href = "/newPassword"
                    }}
                    >
                        <Form>
                            <div className="input-box">
                                <Field type="text" id="otp" name="otp"
                                placeholder="Enter OTP"/>
                                <ErrorMessage name="otp" component="div" className="text-danger"/>
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

export default EmailCode;