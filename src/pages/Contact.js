import React, { useState } from "react";
import "../App.css";
import ContactInfo from "../components/ContactInfo";

function Contact() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      type: "email",
      info: "site@gmail.com",
    },
    {
      id:2,
      type: 'phone',
      info: '+30 976 1382 9921',
    },
    {
      id:3,
      type: 'fax',
      info: '+30 976 1382 9922',
    },
    {
      id: 4,
      type: 'ADDRESS',
      info: `San Francisco, CA 4th Floor8 Lower. San Francisco street, M1 50F`
    }
  ]);
  return (
    <section>
      <div className="contact" id="contact">
        <div className="contact-header">
          <h1>
            Get <strong>In Touch</strong>
          </h1>
        </div>
        <div className="contact-block">
          <div className="contact-form">
            <h2>Get In Touch</h2>
            <div>
              <input type={"text"} placeholder={"Your Name"} />
            </div>
            <div>
              <input type={"text"} placeholder={"Your Email"} />
            </div>
            <div>
              <input type={"text"} placeholder={"Your Phone"} />
            </div>
            <div>
              <textarea placeholder={"Write a Message"} />
            </div>
          </div>
          <div className="contact-info">
            <h2>My Contact Details</h2>
            <div>
              <ul>
                {/* <li>
                  Email
                  <br />
                  <span>site@gmail.com</span>
                </li>
                <li>
                  Phone
                  <br />
                  <span>+30 976 1382 9921</span>
                </li>
                <li>
                  Fax
                  <br />
                  <span>+30 976 1382 9922</span>
                </li>
                <li>
                  Address
                  <br />
                  <span>
                    San Francisco, CA
                    <br /> 4th Floor8 Lower <br />
                    San Francisco street, M1 50F
                  </span>
                </li> */}
                <ContactInfo items={contacts}/>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
