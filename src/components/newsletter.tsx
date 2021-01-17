import * as React from 'react';
import { memo } from 'react';
import { AltCardContainer } from '../styles/styles';
import styled from '@emotion/styled';

const HeadingSection = styled.header`
  display: flex;
  flex-direction: column;
`;

const NewsletterMainHeading = styled.h4`
  font-size: 2rem;
  margin: 1rem 0;
  line-height: 2.4rem;
  text-align: left;
  color: var(--card-backgound);
`;

const NewsletterSubHeading = styled.h5`
  font-size: 1.2rem;
  font-style: italic;
  margin: 0;
  line-height: 1.6rem;
  text-align: left;
  color: var(--card-backgound);
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

const FormInput = styled.div`
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
    padding: 1rem;
  }
`;

const FormButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
`;

const NewsletterButton = styled.button`
  background: #252525;
  color: #e3b7a9;
  border-radius: 1rem;
  border: 0;
  font-size: 1.2rem;
  line-height: 1.6rem;
  padding: 0.6rem 1.2rem;
`;

//'Success! 🎉 You are now subscribed to the newsletter.'
/* TODO: add a form and post to serverless function */

const Newsletter = () => {
  const newsletterHandler = () => console.log('lmao');

  return (
    <AltCardContainer>
      <HeadingSection>
        <NewsletterMainHeading>
          Subscribe to my Newsletter 📧
        </NewsletterMainHeading>
        <NewsletterSubHeading>
          Only posts, unsubscribe at any time
        </NewsletterSubHeading>
      </HeadingSection>

      <NewsletterForm method="post" onSubmit={newsletterHandler}>
        <FormInput>
          <label htmlFor="name">Known name</label>
          <input type="text" name="name" id="name" />
        </FormInput>

        <FormInput>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </FormInput>

        <FormButtonContainer>
          <NewsletterButton type="submit">Send 💌</NewsletterButton>
        </FormButtonContainer>
      </NewsletterForm>
    </AltCardContainer>
  );
};

export default memo(Newsletter);
