import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact-page center">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="row">
          <div className="item">
            <h3>Email</h3>
            <a href="mailto:marwanzayedshaban@gmail.com">
              marwanzayedshaban@gmail.com
            </a>
          </div>
          <div className="item">
            <h3>Facebook</h3>
            <a href="https://www.facebook.com/marwanzayed13/">marwanzayed13</a>
          </div>
          <div className="item">
            <h3>Twitter</h3>
            <a href="https://twitter.com/marwanzayed20">marwanzayed20</a>
          </div>
        </div>
        <h2 className="m-3">Send To Email</h2>
        <form
          action="mailto:marwanzayedshaban@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="8"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="mt-3 transition-all">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
