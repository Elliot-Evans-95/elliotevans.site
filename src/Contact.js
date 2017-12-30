import React, { Component } from 'react';

import { Main, ContactSection } from './styles';

class Contact extends Component {
  render() {
    return (
      <Main>
        <h2>Contact Me</h2>

        <ContactSection>Contact stuff here</ContactSection>
      </Main>
    );
  }
}

export default Contact;
