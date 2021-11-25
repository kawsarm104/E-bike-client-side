import axios from "axios";
import React, { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
// REACT TOASTIFY
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFirebase from "../../../Hooks/useFirebase";
import "./Register.css";

const Register = () => {
  //TOASTIFY MESSAGE
  const notify = () => toast("Registration Successfull");
  // Alert Bootstrap
  const [show, setShow] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();
  const location = useLocation();
  const { setUser, isLoading, handleUserRegister, updateName, setIsLoading } =
    useFirebase();
  // console.log(isLoading)
  const url = location.state?.from || "/";
  //hook form
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // setIsLoading(false)
    if (data.password === data.confirmpassword) {
      handleUserRegister(data.email, data.password)
        .then((result) => {
          setIsLoading(true);

          setUser(result.user);
          // save user to the database
          // saveUserInTheDb(data.email, data.displayName);
          saveUserInTheDb(data);
          // saveUserInTheDb(result.user.email, result.user.displayName);
          // console.log(result);
          // console.log(data);
          // console.log(data.email, data.displayName, "from register");
          history.push(url);
          updateName(data.displayName);
          setErrorMessage("");
          // window.location.reload(); //for stopping reload
        })
        .catch((error) => {
          //  window.location.reload();
          const errorMessage = error.message;
          console.log(errorMessage);
          setErrorMessage("Email already in use");
          setShow(true);
        });
    } else {
      setErrorMessage("password and confirm password did not matched ");
      setShow(true);
      // alert("password and confirm password did not matched")
    }

    // console.log(data);
    setUser(data);
    // console.log(data.email);
  };
  // save user in the database
  // const saveUserInTheDb = (email, displayName) => {
  const saveUserInTheDb = (data) => {
    const user = { ...data };
    console.log(user, "from outside axios");
    axios.post("https://ancient-reaches-67409.herokuapp.com/users", user).then((res) => {
      // console.log(res, "inside axios");
      if (res.data.insertedId) {
        // alert("data inserted successfully");
        notify();
        reset();
      }
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="border ">
        {/* <h2>Please Register Here</h2> */}
        {errorMessage ? (
          <div className="">
            <Alert
              variant="danger"
              className="w-100"
              onClose={() => setShow(false)}
            >
              <p>{errorMessage}</p>
            </Alert>
          </div>
        ) : (
          <></>
        )}
        <Form.Label>Name</Form.Label>
        <input
          id="standard-basic"
          label="Enter your Name "
          type="text"
          placeholder="Enter your name"
          {...register("displayName", { required: true, maxLength: 40 })}
          variant="standard"
        />
        {errors.displayName && errors.displayName.type === "required" && (
          <>
            <span className="error ">Name is required</span>
            <br />
          </>
        )}
        {errors.displayName && errors.displayName.type === "maxLength" && (
          <>
            <span className="error ">Max length exceeded</span>
            <br />
          </>
        )}
        <Form.Label className="mt-3">Email Address</Form.Label>
        <input
          id="standard-basic"
          label="Enter Your Email"
          type="email"
          placeholder="Enter your Email"
          {...register("email", { required: true })}
          variant="standard"
        />
        {errors.email && (
          <>
            <span className="error">Email is required </span>
            <br />
          </>
        )}
        <Form.Label>Password</Form.Label>
        <input
          {...register("password", { required: true, minLength: 6 })}
          id="standard-basic"
          placeholder="Please Enter Your Password"
          type="password"
        />
        {errors.password && errors.password.type === "required" && (
          <>
            <span className="error">Password is required </span>
            <br />
          </>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <>
            <span className="error">
              Password should be more than 6 charecters
            </span>
            <br />
          </>
        )}
        <Form.Label>Confirm Password</Form.Label>
        <input
          {...register("confirmpassword", { required: true })}
          id="standard-basic"
          placeholder="Confirm Your Password"
          type="password"
        />
        {errors.confirmpassword && (
          <>
            <span className="error">Confirm Password is required </span>
            <br />
          </>
        )}

        <input type="submit" value="Create Account " className="submit-btn" />
      </form>

      <ToastContainer />
    </div>
  );
};

export default Register;
