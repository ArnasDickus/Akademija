import styled from 'styled-components';
import { breakpoints, colors } from 'styles/variables';

export const Header = styled.div`
  .header {
    border-bottom: 1px solid ${colors.headerBorder};
  }

  .mobileTitle {
    display: none;

    @media (max-width: ${breakpoints.atMedium}) {
      display: inline-block;
    }
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    @media (max-width: ${breakpoints.atMedium}) {
      display: none;
    }
  }

  .navLink {
    color: ${colors.mainBlue};
    font-weight: 700;
    padding-right: 30px;
    padding-left: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .paddingR {
    padding-right: 15px;
  }
`;
