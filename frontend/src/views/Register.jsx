import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../store/actions/authAction";
import Message from "../components/Message";
import { useEffect } from "react";

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.userLogin);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.password2) {
      setMessage("passwords do not match");
    }
    dispatch(register(formData));
    navigate("/products");
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <h1 className="text-center">Registration</h1>
      {message && <Message variant="danger">{message}</Message>}
      {/* {error && <Message variant="danger" />} */}
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            type="name"
            id="name"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={onChange}
          />
        </div>

        <div className="mb-4">
          <label className="form-label" htmlFor="email">
            Email address{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={formData.email}
            name="email"
            onChange={onChange}
          />
        </div>

        <div className="mb-4">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={onChange}
          />
        </div>
        <div className="mb-4">
          <label className="form-label" htmlFor="password">
            Password2
          </label>
          <input
            type="password2"
            id="password2"
            className="form-control"
            name="password2"
            value={formData.password2}
            onChange={onChange}
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          class="btn btn-primary btn-block mb-4"
          onClick={handleSubmit}
        >
          Sign up
        </button>
      </form>
    </>
  );
};

export default Registration;
