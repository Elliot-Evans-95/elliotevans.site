import React from 'react';

import { Main, ContactSection } from '../../../assets/styles/styles';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <Main>
      <Helmet>
        <title>Elliot Evans - Contact</title>
        <meta name="description" content="Contact Page" />
        <meta
          name="keywords"
          content="Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist"
        />
      </Helmet>

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
