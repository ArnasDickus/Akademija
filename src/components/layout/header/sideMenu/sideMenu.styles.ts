import styled from 'styled-components';
import { colors } from 'styles/variables';

export const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: #fafafa;

  .navLink {
    color: ${colors.darkBlue};
    border-bottom: 1px solid ${colors.headerBorder};

    font-weight: 400;
    cursor: pointer;
    padding: 10px 30px 20px 10px;

    &:hover {
      text-decoration: underline;
      font-weight: 700;
      color: ${colors.mainBlue};
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
  }

  .card2 {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    background-color: #ffffff;
  }

  .svgContainer {
    padding-top: 15px;
  }

  .paddingR {
    padding-right: 15px;
  }
`;
