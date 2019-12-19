import * as React from 'react';
import {
  InputBox,
  InputField,
  InputLabel,
  TextAreaField,
} from '../../styles/styles';
import { memo } from 'react';
import { IInput } from '../../models/contact.types';

const InputGroup = ({ label, placeholder, type }: IInput) => {
  if (type === 'textarea') {
    return (
      <InputBox>
        <InputLabel>
          <TextAreaField
            id={label}
            name={label}
            placeholder={placeholder}
            required
          />
        </InputLabel>
      </InputBox>
    );
  } else {
    return (
      <InputBox>
        <InputLabel>
          {label}
          <InputField
            id={label}
            name={label}
            placeholder={placeholder}
            type={type}
            required
          />
        </InputLabel>
      </InputBox>
    );
  }
};

export default memo(InputGroup);
