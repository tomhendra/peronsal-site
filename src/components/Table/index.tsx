/** @jsxImportSource theme-ui */

interface Props {
  children: React.ReactNode;
}

export function Table({ children }: Props): React.ReactElement {
  return (
    <table
      sx={{
        marginTop: 6,
        width: 'full',
        fontSize: 'sm',
        borderCollapse: 'collapse',
        'tr:hover': {
          bg: 'muted',
        },
        'td, th': {
          borderBottomWidth: 1,
          p: 2,
        },
        th: {
          textAlign: 'left',
          fontWeight: 'semibold',
          bg: 'muted',
        },
      }}
    >
      {children}
    </table>
  );
}
