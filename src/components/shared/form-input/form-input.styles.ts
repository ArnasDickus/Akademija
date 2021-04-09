import styled from 'styled-components';
import { colors } from 'styles/variables';

export const Group = styled.div`
  position: relative;
  margin: 45px 0;

  .formInput {
    background: #ffffff none;
    color: ${colors.formInputSub};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${colors.formInputSub};
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ .form-input-label {
      top: -14px;
      font-size: 12px;
      color: ${colors.formInputMain};
    }
  }

  input[type='password'] {
    letter-spacing: 0.3em;
  }

  .formInputLabel {
    color: ${colors.formInputSub};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
      top: -14px;
      font-size: 12px;
      color: ${colors.formInputMain};
    }
  }

  .error {
    color: ${colors.errorColor};
    font-size: 14px;
  }
`;
