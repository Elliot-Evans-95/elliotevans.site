import * as React from 'react';
// import { useState } from 'preact/hooks';
import { memo } from 'preact/compat';
import { AltCardContainer } from '../../styles/common.style';
import {
  // FormButtonContainer,
  // FormInput,
  HeadingSection,
  // NewsletterButton,
  // NewsletterForm,
  NewsletterMainHeading,
  NewsletterSubHeading,
} from './newsletter.style';
import { FunctionComponent, VNode } from 'preact';

const Newsletter: FunctionComponent = (): VNode => {
  // const [email, setEmail] = useState('');
  // const [name, setName] = useState('');
  // const [message, setMessage] = useState('');

  // const newsletterHandler = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //
  //   const res = await fetch('/api/subscribe', {
  //     body: JSON.stringify({
  //       email: email,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     method: 'POST',
  //   });
  //
  //   const { error } = await res.json();
  //
  //   if (error) {
  //     setMessage(error);
  //     return;
  //   }
  //
  //   setEmail('');
  //   setMessage('Success! 🎉 You are now subscribed to the newsletter.');
  // };

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

      {/*<NewsletterForm method="post" onSubmit={newsletterHandler}>*/}
      {/*  <FormInput>*/}
      {/*    <label htmlFor="name">Name</label>*/}
      {/*    <input*/}
      {/*      type="text"*/}
      {/*      name="name"*/}
      {/*      id="name"*/}
      {/*      value={name}*/}
      {/*      onChange={(e) => setName(e.target.value)}*/}
      {/*    />*/}
      {/*  </FormInput>*/}

      {/*  <FormInput>*/}
      {/*    <label htmlFor="email">Email</label>*/}
      {/*    <input*/}
      {/*      type="email"*/}
      {/*      name="email"*/}
      {/*      id="email"*/}
      {/*      value={email}*/}
      {/*      onChange={(e) => setEmail(e.target.value)}*/}
      {/*    />*/}
      {/*  </FormInput>*/}

      {/*  <mark>{message}</mark>*/}

      {/*  <FormButtonContainer>*/}
      {/*    <NewsletterButton type="submit">Send 💌</NewsletterButton>*/}
      {/*  </FormButtonContainer>*/}
      {/*</NewsletterForm>*/}
    </AltCardContainer>
  );
};

export default memo(Newsletter);
