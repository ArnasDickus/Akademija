import styled from 'styled-components';
import { breakpoints, colors } from 'styles/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.settingsBorder};

  .avatar {
    width: 120px;
    height: 120px;
    background-color: ${colors.defaultAvatarColor};
    border-radius: 50%;
    margin: initial;

    @media (max-width: ${breakpoints.atSmall}) {
      margin-right: auto;
      margin-left: auto;
    }
  }

  .accountName {
    font-weight: bold;
    color: ${colors.subjectSectionText};
    font-size: 15px;
    text-align: center;
  }

  .ul {
    padding: 0;
    margin-top: 0;
    list-style-type: none;
  }

  .link {
    color: ${colors.settingsLinkItem};
    display: block;
    padding: 3px 15px;
    cursor: pointer;

    :hover {
      color: #fff;
      background-color: ${colors.settingsNavbarActive};
    }
  }

  .listItem {
    font-size: 16px;
    font-weight: 400;
    color: ${colors.settingsLinkItem};
  }

  .isActive {
    color: #fff;
    background-color: ${colors.settingsNavbarActive};
  }

  .avatarContainer {
    padding: 5px 20px 10px 20px;
  }
`;
