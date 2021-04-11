import styled from 'styled-components';
import { breakpoints, colors } from 'styles/variables';

export const CourseCollection = styled.div`
  .row {
    display: flex;
    margin-bottom: 20px;

    @media (min-width: ${breakpoints.atSmall}) {
      flex-direction: column;
      align-items: center;
    }
  }

  .courseCollections {
    margin-bottom: 50px;
  }

  .title {
    color: ${colors.mainBlue};
    font-size: 20px;
    cursor: pointer;
    margin-bottom: 15px;
  }

  .root {
    width: 100%;
    height: 100%;
    margin-right: 20px;

    @media (min-width: ${breakpoints.atSmall}) {
      margin-bottom: 20px;
    }

    button {
      display: flex;
      justify-content: flex-start;
    }
  }

  .actionArea {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 300px;
  }

  .media {
    width: 100%;
    height: 130px;

    @media (min-width: ${breakpoints.atMedium}) {
      width: 100%;
      height: 100px;
    }

    @media (min-width: ${breakpoints.atMedium}) {
      width: 100%;
      height: 100px;
    }
  }

  .content {
    width: 100%;
  }

  .cardLink {
    color: ${colors.formInputMain};
  }
`;
