import React from "react";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "12:00 PM - 12:00 AM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 5,
      day: "Friday",
      time: "3:00 PM - 9:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00 AM - 3:00 PM",
    },
  ];
  return (
    <>
      <footer className="container">
        <hr />
        <div className="content">
          <div>
            <img src="/logo.png" alt="logo" className="logo-img"></img>
          </div>
          <div>
            <h4>Quick links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About Us</Link>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>0000000000</span>
            </div>
            <div>
              <MdEmail />
              <span>srijan@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>Kolkata,India</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
