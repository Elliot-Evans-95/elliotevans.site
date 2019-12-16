import styled from '@emotion/styled';

export const ContactMain = styled.main`
  grid-area: main;

  padding: 1rem;
  position: relative;

  @media (min-width: 45em) {
    padding: 0;
    width: 100%;
    margin: 0 auto;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  padding: 1rem 4rem 1rem 1rem;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 2px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  align-content: center;

  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.22);
  border-radius: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;
