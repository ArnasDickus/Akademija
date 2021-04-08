import styled from 'styled-components';
import { colors } from 'styles/variables';

export const Container = styled.div`
  min-height: 565px;

  .title {
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    text-align: center;
    color: ${colors.mainBlue};
    border-bottom: 1px solid #000000;
    padding-bottom: 10px;
  }

  .row {
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #000000;
    padding-top: 15px;
  }

  .videoButton {
    all: unset;
    cursor: pointer;
    color: ${colors.mainBlue};
    font-size: 14px;
    font-weight: 700;
    padding-left: 10px;
  }

  .problemButton {
    all: unset;
    cursor: pointer;
    color: ${colors.darkerColor};
    font-size: 14px;
    font-weight: 400;
  }
`;
