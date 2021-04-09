import styled from 'styled-components';
import { breakpoints } from 'styles/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: ${breakpoints.atMedium}) {
    width: 100%;
    margin-top: 30px;
  }

  .title {
    margin: 10px 0;
  }
`;
