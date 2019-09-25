import { css } from '@emotion/core';
import { colors, sizes } from '../../assets/styles';

export const postPreviewStyles = () => css`
  border: 1px solid ${colors.neutral.dark4};
  border-radius: 6px;
  height: ${sizes.huge4};
  overflow: hidden;

  & > div {
    height: 50%;
    :first-of-type {
      background: ${colors.primary.dark1};
      isolation: isolate;
      overflow: hidden;
      position: relative;
    }
    :last-of-type {
      background: ${colors.neutral.dark2};
      justify-content: space-between;
      flex-direction: column;
      display: flex;
      padding: ${sizes.medium2};
    }

    h3 {
      left: 0;
      margin: ${sizes.medium2};
      margin-bottom: 0;
      position: absolute;
      top: 0;
      z-index: 99999;
    }

    p {
      margin-bottom: ${sizes.medium1};
    }
  }
`;
