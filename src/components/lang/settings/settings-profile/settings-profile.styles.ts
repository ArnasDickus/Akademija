import styled from 'styled-components';
import { colors } from 'styles/variables';

export const Container = styled.div`
  border: 1px solid ${colors.settingsBorder};

  .textField div {
    min-width: 100%;
    margin-bottom: 10px;
  }
`;
