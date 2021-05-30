import { styled } from '@linaria/react';

export const HeadingSection = styled.header`
  display: flex;
  flex-direction: column;
`;

export const NewsletterMainHeading = styled.h4`
  font-size: 2rem;
  margin: 1rem 0;
  line-height: 2.4rem;
  text-align: left;
  color: var(--heading-color);
`;

export const NewsletterSubHeading = styled.h5`
  font-size: 1.2rem;
  font-style: italic;
  margin: 0;
  line-height: 1.6rem;
  text-align: left;
  color: var(--heading-color);
`;

export const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  width: 80%;

  label {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: var(--heading-color);
  }

  input {
    background: var(--backgound);
    color: var(--card-text-color);
    border: 0.2rem solid var(--heading-color-hover);
    font-size: 1.2rem;
    line-height: 1.6rem;
    padding: 0.8rem;
  }
`;

export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
`;

export const NewsletterButton = styled.button`
  background: var(--card-backgound);
  color: var(--white);
  border-radius: 1rem;
  border: 1px solid var(--card-text-color);
  font-size: 1.2rem;
  line-height: 1.6rem;
  padding: 0.6rem 1.2rem;
`;
