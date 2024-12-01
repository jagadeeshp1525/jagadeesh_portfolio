import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const SendEmail = () => {
    axios
      .post("https://ciaara-smtp.vercel.app/mail", {
        name: name,
        email: email,
        phone: number,
        msg: message,
      })
      .then((response) => {
        console.log(response.data);
        // alert(`Mail Sent To ${email}`);
        // setIsOpen(false);
        // setThank(true);
        navigate("/thankyou");
      });
  };

  const submitForm = () => {
    if (name.length > 0 && email.length > 0 && number.length == 10) {
      let re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (re.test(email)) {
        console.log(name);
        console.log(email);
        console.log(number);
        console.log(message);
        SendEmail();
      } else {
        alert(`enter valid email *`);
      }
    } else {
      alert(`Enter Mandatory fields *`);
    }
  };

  return (
    <div className="w-full bg-[#1d2d4e] py-10 px-6 rounded-lg">
      <div className=" mb-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="px-4 py-2 bg-white border shadow-md border-[#eaeaea] w-full rounded-xl focus:ring-0 focus-visible:ring-0"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="name"
          placeholder="Your Email"
          required
          className="px-4 py-2 bg-white border shadow-md border-[#eaeaea] w-full rounded-xl focus:ring-0 focus-visible:ring-0"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="mb-4">
        <input
          type="number"
          name="name"
          maxLength={10}
          max={10}
          placeholder="Phone Number"
          required
          className="px-4 py-2 bg-white border shadow-md border-[#eaeaea] w-full rounded-xl focus:ring-0 focus-visible:ring-0"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
      </div>

      <div className="mb-4">
        <textarea
          type="text"
          name="name"
          placeholder="Message"
          className="px-4 py-2 bg-white border shadow-md border-[#eaeaea] w-full rounded-xl focus:ring-0 focus-visible:ring-0"
          required
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="text-center col-span-full">
        <div
          onClick={submitForm}
          className="text-[#1d2d4e] bg-[#ffffff] font-bold uppercase text-base px-5 py-2 rounded-xl border border-[#ffffff] hover:bg-transparent hover:border hover:border-[#ffffff] hover:text-[#ffffff] transition-all ease-out inline-block cursor-pointer"
        >
          Send Message
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
