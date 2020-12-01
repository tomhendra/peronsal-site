import * as R from 'ramda';
import { MdxBlogPost, MdxProject } from 'types';

export function sortMdxContent(
  content: Array<MdxBlogPost | MdxProject>,
  prop: string
): Array<MdxBlogPost | MdxProject> {
  const contentToSort = content;

  const sortByPropertyCaseInsensitive = R.sortBy(
    R.compose(R.toLower, R.prop(prop))
  );

  const sortedContent = sortByPropertyCaseInsensitive(contentToSort);
  return sortedContent;
}
