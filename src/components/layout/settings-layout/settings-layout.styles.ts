import styled from 'styled-components';
import { breakpoints, colors } from 'styles/variables';

export const Container = styled.div`
  background-color: #fff;

  .row {
    max-width: 1100px;
    display: flex;
    flex-direction: row;

    @media (max-width: ${breakpoints.atSmall}) {
      flex-direction: column;
    }
  }

  .title {
    font-size: 22px;
    font-weight: 700;
    color: ${colors.subjectSectionText};
  }

  .contentDescription {
    border: 1px solid ${colors.settingsBorder};
    text-align: center;
  }

  .content {
    width: 100%;
  }
`;
