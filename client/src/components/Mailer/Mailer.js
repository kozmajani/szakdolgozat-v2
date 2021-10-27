import React from "react";
import emailjs from "emailjs-com";

const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vkadp3h",
        "template_snrmp7k",
        e.target,
        "user_d1396UFiBux8hCJ45x5QF"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <div className="title">
        <h1>Support</h1>
      </div>
      <form onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" />

        <label>E-mail</label>
        <input type="email" name="user_email" />

        <label>Message</label>
        <textarea name="message" rows="5" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Mailer;
