import styled from '@emotion/styled';

export const IconWrapper = styled.div`
  svg {
    width: 1.2rem;
    height: 1.2rem;
    fill: var(--icon-color);
    margin-right: 0.6rem;

    :first-of-type {
      margin-left: 0;
    }
  }
`;

export const IconLink = styled.a`
  :hover {
    svg {
      transition: fill 300ms ease-in-out;
      fill: var(--card-text-color)
    }
  }
`;
