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
      background-color: ${color.primary.dark1};
      isolation: isolate;
      overflow: hidden;
      position: relative;
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
    }

    p {
      margin-bottom: ${size.medium1};
    }
  }
`;
