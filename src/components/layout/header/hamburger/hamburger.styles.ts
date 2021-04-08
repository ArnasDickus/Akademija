import styled from 'styled-components';
import { breakpoints, colors } from 'styles/variables';

export const Hamburger = styled.div`
  display: none;

  @media (max-width: ${breakpoints.atMedium}) {
    color: ${colors.mainBlue};
    text-align: right;
    padding-right: 10px;
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .title {
    text-align: left;
  }

  .icon {
    font-size: 20px;
  }
`;
