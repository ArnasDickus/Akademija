import styled from 'styled-components';
import { colors } from 'styles/variables';

export const Container = styled.div`
  .navLink {
    color: ${colors.darkBlue};
    font-weight: 400;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      font-weight: 700;
      color: ${colors.mainBlue};
    }
  }
`;
