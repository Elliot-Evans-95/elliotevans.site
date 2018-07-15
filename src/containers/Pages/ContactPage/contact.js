import React from 'react';

import { Main, ContactSection } from '../../../assets/styles/styles';

const Contact = () => {
  return (
    <Main>
      <h2>Contact Me</h2>

      <ContactSection>
        <form method="POST" id="sendForm">
          <div>
            <input
              id="name"
              name="name"
              placeholder="John Smith"
              title="First name or full name"
              required=""
            />
            <label>Name</label>
          </div>
          <div>
            <input
              id="email"
              name="password"
              placeholder="example@test.com"
              type="email"
              required=""
            />
            <label>Email address</label>
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              placeholder="Type you message here..."
              title="A message of your choice"
              required=""
            />
            <label>Message</label>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </ContactSection>
    </Main>
  );
};

export default Contact;
