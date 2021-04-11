import styled from 'styled-components';
import { colors } from 'styles/variables';

export const Container = styled.div`
  border: 1px solid ${colors.settingsBorder};

  .previewContainer {
    padding: 18px;
    margin-bottom: 20px;
    border: 1px solid ${colors.darkerWhite};
  }

  .imgUpload {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${colors.subjectSectionHoverBG};
    padding: 2px;
    height: auto;
  }

  .icon {
    font-size: 200px !important;
    color: ${colors.lightDark};
  }

  .image div img {
    width: 100%;
  }
`;
