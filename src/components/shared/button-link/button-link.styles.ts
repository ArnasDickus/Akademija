import styled from 'styled-components';
import { colors } from 'styles/variables';

export const Button = styled.button`
  all: unset;
  margin-right: 8px;
  cursor: pointer;
  color: ${colors.lightBlue};

  &:hover {
    background-color: ${colors.lighterBlue};
  }
`;
