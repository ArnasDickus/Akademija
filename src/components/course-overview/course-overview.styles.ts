import styled from 'styled-components';
import { breakpoints } from 'styles/variables';

export const Container = styled.div`
  .overview {
    text-align: center;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
  }

  .row {
    display: flex;
    justify-content: space-between;

    @media (max-width: ${breakpoints.atSmall}) {
      flex-direction: column;
    }
  }

  .descriptionTitle {
    padding-right: 90px;

    @media (max-width: ${breakpoints.atSmall}) {
      padding-right: 0;
    }
  }
`;
