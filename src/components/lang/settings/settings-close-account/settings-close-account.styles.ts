import styled from 'styled-components';
import { breakpoints, colors } from 'styles/variables';

export const Container = styled.div`
  border: 1px solid ${colors.settingsBorder};

  .warn {
    color: ${colors.errorButton};
    font-size: 15px;
    font-weight: 700;
  }

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    width: auto;

    @media (max-width: ${breakpoints.atSmall}) {
      width: 100%;
    }
  }

  .formButtons {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: space-between;
  }

  .title {
    text-align: center;
  }

  .InputEmail {
    width: 100%;
  }
`;
