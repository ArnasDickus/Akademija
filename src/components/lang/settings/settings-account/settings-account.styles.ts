import styled from 'styled-components';
import { breakpoints, colors } from 'styles/variables';

export const Container = styled.div`
  border: 1px solid ${colors.settingsBorder};

  .title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 0;
  }

  .subtitle {
    margin-top: 5px;
    font-size: 16px;
    font-weight: 400;
  }

  .row {
    border-top: 1px solid ${colors.settingsBorder};
    border-bottom: 1px solid ${colors.settingsBorder};
    display: flex;
    justify-content: space-between;
  }

  .email {
    color: ${colors.textColor};
  }

  .buttonContainer {
    margin-top: 10px;
  }
`;

export const FormContainer = styled.div`
  .formContainer {
    margin-top: 10px;
  }

  .formButtons {
    margin-top: 10px;
  }

  .cancel {
    margin-right: 20px !important;
    @media (max-width: ${breakpoints.atVeryVerySmall}) {
      margin-bottom: 20px !important;
    }
  }

  .invalidFeedback {
    margin-top: 10px;
    font-size: 16px;
    color: red;
  }

  .InputEmail {
    width: 100%;
    margin-bottom: 20px !important;
  }

  .securityWarning {
    font-size: 14px;
    margin-bottom: 0;
  }
`;
