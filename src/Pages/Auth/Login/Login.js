import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
// REACT TOASTIFY
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFirebase from "../../../Hooks/useFirebase";

const Login = () => {
  //TOASTIFY MESSAGE
  const notify = () => toast("Wow so easy!");
  // const { signInWithGoogle, setUser, loginWithEmailAndPassword, setIsLoading } =
  //   useAuth();
  const [errorMessage, setErrorMessage] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const {
    setUser,
    isLoading,
    signInWithGoogle,
    handleUserRegister,
    updateName,
    setIsLoading,
    loginWithEmailAndPassword,
  } = useFirebase();
  // console.log(isLoading)
  const url = location.state?.from || "/dashboard";
  //hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data); khali email r displayName dekhabe
    // setIsLoading(false)
    loginWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        setIsLoading(true);
        setUser(res.user);

        history.push(url);
        setErrorMessage(false);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(
          "sign in error code ",
          errorCode,
          " signin error message ",
          errorMessage
        );
        setErrorMessage(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // console.log(data);
    setUser(data);
    // console.log(data.email);
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        setIsLoading(true);
        setUser(res.user);
        saveUserInTheDb(res.user);
        history.push(url);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };
  // saving info into daatabase
  const saveUserInTheDb = (data) => {
    const user = { ...data };
    //  console.log(user, "from outside axios");
    axios
      .put("https://ancient-reaches-67409.herokuapp.com/users", user)
      .then((res) => {
        // console.log(res, "inside axios");
        if (res.data.insertedId) {
          alert("data inserted successfully");
          //  notify();
          //  reset();
        }
      });
  };
  return (
    <>
      {/* <h1>from auth folder</h1> */}

      <form onSubmit={handleSubmit(onSubmit)}>
        {" "}
        <input
          className="my-3"
          id="standard-basic"
          label="Enter Your Email"
          type="email"
          placeholder="Enter your Email"
          {...register("email", { required: true })}
          variant="standard"
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <input
          className="my-3"
          {...register("password", { required: true })}
          id="standard-basic"
          placeholder="Enter Password"
          type="password"
          variant="standard"
        />{" "}
        {errorMessage && (
          <p className="error"> Email and Password did not matched </p>
        )}
        <input type="submit" value="Login" />
        <Link to="/register">
          {" "}
          <div className="mt-2 text-primary">
            Need an acoount ? Register here
          </div>
        </Link>
      </form>
      {/* <button variant="contained" onClick={handleGoogleLogin}>
        Sign in with Google
      </button> */}
    </>
  );
};

export default Login;
