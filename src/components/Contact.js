import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div id="Contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-text">
        Feel free to reach out to me through any of the platforms below.
      </p>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/pranav-solanki-8838a331a"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:pranav39645@gmail.com">Email</a>
        <a
          href="https://www.instagram.com/itzs_pranav_here?igsh=MXQya25ybDl4MWZleg=="
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}
