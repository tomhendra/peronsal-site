type Props = {
  messageMaxLength: number;
  charsRemaining: number;
};

export const StyledCircleColor = (props: Props) => {
  const { messageMaxLength, charsRemaining } = props;
  return (
    <circle
      cx="50%"
      cy="50%"
      r="10"
      css={theme => {
        const r = 10;
        const ringLength = 2 * Math.PI * r;
        const grey = (ringLength * charsRemaining) / messageMaxLength;
        const coloured = ringLength - grey > 0 ? ringLength - grey : 0;
        const warningThreshold = messageMaxLength * 0.25;

        return {
          stroke:
            charsRemaining >= warningThreshold
              ? theme.colors.p400
              : charsRemaining < warningThreshold && charsRemaining >= 0
              ? theme.colors.warning
              : theme.colors.danger,
          strokeDasharray: `${coloured} ${grey}`,
          strokeDashoffset: ringLength / 4,
        };
      }}
    />
  );
};
