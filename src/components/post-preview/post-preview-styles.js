import { css } from '@emotion/core';
import { color, size } from '../../assets/styles';

export const postPreviewStyles = () => css`
  background: ${color.neutral.dark2};
  border: 1px solid ${color.neutral.dark4};
  border-radius: 6px;
  height: ${size.huge4};
  overflow: hidden;

  & > div {
    height: 50%;
    :first-of-type {
      position: relative;
      z-index: 88888;
    }
    :last-of-type {
      justify-content: space-between;
      flex-direction: column;
      display: flex;
      padding: ${size.medium2};
    }

    h3 {
      left: 0;
      margin: ${size.medium2};
      margin-bottom: 0;
      position: absolute;
      top: 0;
      z-index: 99999;
    }

    div {
      filter: contrast(200%) brightness(30%) saturate(50%);
      height: 100%;
      position: absolute;
      z-index: 77777;
    }

    p {
      margin-bottom: ${size.medium1};
    }
  }
`;
