import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  text-align: center;
  color: #fff;

  .imageContainer {
    width: 100%;
    height: 871px;

    img {
      filter: brightness(50%);
      width: 100%;
      height: 871px;
    }
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .title {
    font-size: 42px;
    @include atMedium {
      font-size: 30px;
    }

    @include GetInTouch {
      font-size: 20px;
    }
  }
`;
