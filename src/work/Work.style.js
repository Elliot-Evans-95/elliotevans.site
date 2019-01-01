import styled from 'styled-components';

export const WorkGrid = styled.main`
  grid-area: main;

  display: grid;

  grid-template-rows: 33% 4em auto;
  grid-template-columns: auto;
  grid-template-areas:
    'work-header'
    'work-nav'
    'work-content';
`;
