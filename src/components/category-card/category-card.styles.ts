import styled from 'styled-components';
import { breakpoints } from 'styles/variables';

export const Container = styled.div`
  .card {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .row {
    display: flex;
    max-width: 100%;
  }

  .colText {
    width: 100%;
    display: flex;
    align-items: stretch;
  }

  .image {
    width: 260px;
    height: 145px;

    @media (max-width: ${breakpoints.atMedium}) {
      width: 100px;
      height: 100px;
    }
  }
  //  TODO Delete this when image exist.
  .hide {
    display: none;
  }
`;
