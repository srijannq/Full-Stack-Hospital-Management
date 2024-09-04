import React, { useContext, useState } from "react";
import { Context } from "../main";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const { isAuthenticated, setAuthenticated } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, SetEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/patient/register",
        {
          firstName,
          lastName,
          email,
          phone,
          aadhar,
          dob,
          gender,
          password,
          role: "Patient",
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(response.data.message);
      setAuthenticated(true);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  if (isAuthenticated) {
    navigateTo("/");
  }
  return (
    <div className="container form-component register-form">
      <h2>Sign Up</h2>
      <p>Please Sign Up to continue</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas enim
        optio dolor amet expedita! Error?
      </p>
      <form onSubmit={handleRegister}>
        <div>
          <input
            type="text"
            placeholder="first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="aadhar"
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
          />
          <input
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div
          style={{
            gap: "10px",
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
        >
          <p style={{ marginBottom: 0 }}>Already Registered?</p>
          <Link
            to={"/login"}
            style={{ textDecoration: "none", alignItems: "center" }}
          >
            Login Now!
          </Link>
        </div>
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
