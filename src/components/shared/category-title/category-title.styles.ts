import styled from 'styled-components';
import { breakpoints, colors } from 'styles/variables';

export const CategoryTitle = styled.div`
  background-color: ${colors.bgBlue};
  padding-top: 10px;
  padding-bottom: 10px;

  .title {
    margin: 0;
    font-size: 36px;
    font-weight: bold;
    color: ${colors.textWhite};

    @media (max-width: ${breakpoints.atMedium}) {
      font-size: 30px;
    }
  }
`;
