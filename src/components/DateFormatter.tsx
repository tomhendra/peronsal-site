import { format } from 'date-fns';

export interface DateFormatterProps {
  dateString: string;
}

export function DateFormatter({ dateString }: DateFormatterProps): JSX.Element {
  return (
    <time dateTime={dateString}>
      {format(new Date(dateString), 'LLLL	d, yyyy')}
    </time>
  );
}
