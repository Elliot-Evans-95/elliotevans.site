// @flow

import React, { PureComponent } from 'react';
import PageHeader from '../PageHeader';
import InputGroup from '../InputGroup';
import { ContactForm, ContactMain } from './Contact.style';
import { FormSubmitLabel, FormSubmitSubmit } from '../../styles/styles';
import Blobs from '../../blobs/Blobs';
import { Meta } from '../../shared/meta/meta';

const fieldData = [
  {
    label: 'name',
    placeholder: 'full name',
    type: 'text',
  },
  {
    label: 'email',
    placeholder: 'email address',
    type: 'email',
  },
  {
    label: 'message',
    placeholder: 'Type you message here...',
    type: 'textarea',
  },
];

class Contact extends PureComponent {
  state = { fieldData };

  componentDidMount() {
    const title = 'Elliot Evans - Contact';
    const desc = 'Contact Page';
    const keywords =
      'Front End Developer, Web Application Developer, Web Developer, Javascript Developer';
    new Meta(title, desc, keywords).setMeta();

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
        <Blobs location={this.props.location} />
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
