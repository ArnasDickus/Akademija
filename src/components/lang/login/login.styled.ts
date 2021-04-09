import styled from 'styled-components';
import { breakpoints, colors } from 'styles/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.atMedium}) {
    width: 100%;
  }

  .title {
    margin: 10px 0;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: ${breakpoints.atVerySmall}) {
      margin-top: 10px;
    }
  }

  .linkContainer {
    padding-top: 20px;
  }

  .link {
    font-size: 15px;
    font-weight: 600;
    color: ${colors.mainBlue};
  }
`;
