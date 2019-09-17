import { css } from '@emotion/core';
import { color, size } from '../../assets/styles';

export const postPreviewStyles = () => css`
  align-items: center;
  background: ${color.neutral.dark2};
  border: 1px solid ${color.neutral.dark4};
  border-radius: 4px;
  display: flex;
  min-height: ${size.huge4};
  max-width: ${size.massive3};

  > div {
    width: 50%;
    :not(:first-of-type) {
      padding: ${size.medium3};
    }

    h3 {
      margin-bottom: ${size.small3};
    }

    p {
      margin-bottom: ${size.medium2};
    }
  }
`;
