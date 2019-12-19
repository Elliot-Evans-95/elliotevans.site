import * as React from 'react';
import { FormSubmitLabel, FormSubmitSubmit } from '../../styles/styles';
import { ContactForm, ContactMain } from './contact.style';
import PageHeader from './pageHeader';
import InputGroup from './inputGroup';
import { memo } from 'react';
import { IInput } from '../../models/contact.types';

const Contact = () => {
  const fieldData : Array<IInput>= [
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

  const inputGroupList = () => {
    return fieldData.map(field => (
      <InputGroup
        key={field.label}
        label={field.label}
        placeholder={field.placeholder}
        type={field.type}
      />
    ));
  };

  return (
    <ContactMain>
      <PageHeader
        heading={'Contact'}
        subHeading={'If you wish to Contact me please fill out the form'}
      />
      <ContactForm
        action="https://formspree.io/ell15evans.nuls@googlemail.com"
        method="POST"
        id="sendForm"
      >
        {inputGroupList()}
        <FormSubmitLabel>
          <FormSubmitSubmit type="submit" />
        </FormSubmitLabel>
      </ContactForm>
    </ContactMain>
  );
};

export default memo(Contact);
