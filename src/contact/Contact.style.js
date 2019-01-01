import styled from 'styled-components';

export const ContactMain = styled.main`
  grid-area: main;

  padding: 1rem;

  @media (min-width: 45em) {
    padding: 0;
    width: 100%;
    margin: 0 auto;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  padding: 2em 0;
  width: 100%;
  min-height: 50vh
  flex-direction: column;
  justify-content: space-around;
  background: #FFFFFF;
  border-radius: 2px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  align-content: center;
`;
