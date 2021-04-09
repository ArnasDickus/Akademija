import styled from 'styled-components';
import { breakpoints } from 'styles/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.atMedium}) {
    width: 100%;
  }

  .title {
    margin: 10px 0;
  }
`;
