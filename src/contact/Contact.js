// @flow

import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import PageHeader from '../shared/components/PageHeader';
import InputGroup from '../shared/components/InputGroup';
import { ContactForm, ContactMain } from './Contact.style';
import { FormSubmitLabel, FormSubmitSubmit } from '../shared/styles/styles';

const fieldData = [
  {
    label: 'name',
    placeholder: 'full name',
    type: 'text'
  },
  {
    label: 'email',
    placeholder: 'email address',
    type: 'email'
  },
  {
    label: 'message',
    placeholder: 'Type you message here...',
    type: 'textarea'
  }
];

class Contact extends PureComponent {
  state = { fieldData };

  componentDidMount() {
    document.getElementById('root').style.backgroundImage = 'url(contact.svg)';
  }

  inputGroupList() {
    return this.state.fieldData.map(field => (
      <InputGroup
        key={field.label}
        label={field.label}
        placeholder={field.placeholder}
        type={field.type}
      />
    ));
  }

  render() {
    return (
      <ContactMain>
        <Helmet>
          <title>Elliot Evans - Contact</title>
          <meta name="description" content="Contact Page" />
          <meta
            name="keywords"
            content="Front End Developer, Web Application Developer, Web Developer, Javascript Developer"
          />
        </Helmet>
        <PageHeader
          heading={'Contact'}
          subHeading={'If you wish to contact me please fill out the form'}
        />
        <ContactForm
          action="https://formspree.io/ell15evans.nuls@googlemail.com"
          method="POST"
          id="sendForm"
        >
          {this.inputGroupList()}
          <FormSubmitLabel>
            <FormSubmitSubmit type="submit" />
          </FormSubmitLabel>
        </ContactForm>
      </ContactMain>
    );
  }
}

export default Contact;
