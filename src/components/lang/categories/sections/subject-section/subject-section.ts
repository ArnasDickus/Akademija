import styled from 'styled-components';
import { colors } from 'styles/variables';

export const Container = styled.div`
  .subjectSections {
    background-color: ${colors.subjectSectionBG};
    padding: 5px 20px 10px;
    cursor: pointer;

    &:hover {
      background-color: ${colors.subjectSectionHoverBG};
    }
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .title {
    font-size: 15px;
    color: ${colors.subjectSectionText};
    font-weight: bold;
    margin-bottom: 0;
  }

  .subtitles {
    margin-top: 0;
    font-size: 12px;
    color: ${colors.subjectSectionText};
  }

  .dropdown {
    cursor: pointer;
    background-color: #fff;

    &:hover {
      background-color: #f2f3f5;
    }
  }

  .rowDropdown {
    display: flex;
    align-items: baseline;
  }

  .activeLesson {
    background-color: #d4e9ee;
  }

  .textContainer {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .listItemTitle {
    padding-bottom: 10px;
    margin: 0;
  }

  .time {
    display: flex;
    align-items: center;
    margin: 0;
  }

  .practiceTitle {
    margin-top: 15px;
    margin-bottom: 15px;
    padding-left: 10px;
    font-size: 15px;
    color: ${colors.subjectSectionText};
    font-weight: bold;
  }

  .icon {
    margin-right: 5px;
    font-size: 14px !important;
  }
`;
