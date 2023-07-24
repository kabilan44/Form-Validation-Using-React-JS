import React from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from 'react';

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,

  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const password = watch("password");
  // const confirmPassword = watch("confirmPassword");
  const [showForm, setShowForm] = useState(true);
  const handleClose = () => setShowForm(false);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="App ">
      <div className="formmm ">
        {showForm && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>REGISTRATION FORM</div>

            <div className="form-control">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                {...register("name", {
                  required: true,
                  pattern: /^[A-Za-z][A-Za-z0-9_]{2,29}$/
                })}
              />
              {errors.name && errors.name.type === "required" && (
                <p className="errorMsg">Please Enter Your Name</p>
              )}
              {errors.name && errors.name.type === "pattern" && (
                <p className="errorMsg">Please Enter a Valid Name </p>
              )}
            </div>

            <div className="form-control">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email"
                {...register("email", {
                  required: true,
                  pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <p className="errorMsg">Please Enter Your Email</p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p className="errorMsg">Please Enter a Valid Email</p>
              )}
            </div>

            <div className="form-control">
              <label>Mobile Number</label>
              <input
                type="text"
                name="mobile"
                placeholder="Enter Your Mobile Number"
                {...register("mobile", {
                  required: true,
                  pattern: /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/
                })}
              />
              {errors.mobile && errors.mobile.type === "required" && (
                <p className="errorMsg">Please Enter Your Mobile Number</p>
              )}
              {errors.mobile && errors.mobile.type === "pattern" && (
                <p className="errorMsg">Please Enter a Valid Mobile Number</p>
              )}
            </div>

            <div className="form-control">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                {...register("dob", {
                  required: true,
                })}
              />
              {errors.dob && errors.dob.type === "required" && (
                <p className="errorMsg">Please Enter Your DOB</p>
              )}
            </div>

            <div className="form-controol" id="gender">
              <Form.Group className="mb-3" controlId="gender">
                <Form.Label id="gndr">Select Gender</Form.Label>
                <Form.Check
                  type="radio"
                  label="Male"
                  value="male"
                  {...register("gender", {
                    required: "Please select your gender"
                  })}
                />
                <Form.Check
                  type="radio"
                  label="Female"
                  value="female"
                  {...register("gender")}
                />
                <Form.Check
                  type="radio"
                  label="Others"
                  value="others"
                  {...register("gender")}
                />
                {errors.gender && <p className="errorMsg">{errors.gender.message}</p>}
              </Form.Group>
            </div>
            <div className="form-control">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/
                })}
              />
              {errors.password && errors.password.type === "required" && (
                <p>Please Enter Your Password</p>
              )}
              {errors.password && errors.password.type === "pattern" && (
                <p>Password must contain minimum 8 characters <br />
                  maximum 16 characters
                  <br />
                  One uppercase[A-Z] <br />
                  One lowercase[a-z] <br />
                  One special character[@#$%^&] <br />
                  One numaric character[0-9] <br />
                </p>
              )}
            </div>

            <div className="form-control">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Your Password "
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => value === password
                })}
              />
              {errors.confirmPassword &&
                errors.confirmPassword.type === "required" && (
                  <p>Please Confirm Your Password</p>
                )}
              {errors.confirmPassword &&
                errors.confirmPassword.type === "validate" && (
                  <p>Password does not match</p>
                )}
            </div>
            <div className="form-control">
              <label></label>
              <button type="submit">Login</button>
            </div>
            <div>
              <button type="button" onClick={handleClose}>
                Close
              </button>
            </div>
          </form>
        )}
        <button onClick={refreshPage}>Refresh</button>

      </div>
    </div>
  );
}

