import styled from 'styled-components';
import { colors } from 'styles/variables';

export const Container = styled.div`
  .customButton {
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-top: 10px;

    &:hover {
      background-color: #ffffff;
      color: #000;
      border: 1px solid #000000;
    }

    &.googleSignIn {
      background-color: ${colors.googleColor};
      color: white;

      &:hover {
        background-color: ${colors.googleHoverDarker};
        border: none;
      }
    }

    &.inverted {
      background-color: #ffffff;
      color: #000000;
      border: 1px solid #000000;

      &:hover {
        background-color: #000000;
        color: #ffffff;
        border: none;
      }
    }
  }
`;
