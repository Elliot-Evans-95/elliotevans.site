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
  color: var(--card-backgound);
`;

export const NewsletterSubHeading = styled.h5`
  font-size: 1.2rem;
  font-style: italic;
  margin: 0;
  line-height: 1.6rem;
  text-align: left;
  color: var(--card-backgound);
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
    color: var(--card-backgound);
  }

  input {
    background: var(--backgound);
    color: var(--card-text-color);
    border: 0.2rem solid #e3b7a9;
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
  background: #252525;
  color: #e3b7a9;
  border-radius: 1rem;
  border: 0;
  font-size: 1.2rem;
  line-height: 1.6rem;
  padding: 0.6rem 1.2rem;
`;
