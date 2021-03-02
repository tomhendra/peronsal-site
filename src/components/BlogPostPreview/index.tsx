/** @jsxImportSource theme-ui */
import { PostPreview } from '@types';
import NextLink from 'next/link';
import { Link, Box, Text, Flex } from 'theme-ui';

interface Props {
  blog: PostPreview;
}

export function BlogPostPreview({ blog }: Props): React.ReactElement {
  return (
    <Box
      role="group"
      p={4}
      sx={{
        border: '1px solid',
        borderColor: 'text',
        borderRadius: 4,
        marginTop: 4,
      }}
    >
      <NextLink href={`/blog/${blog.slug}`} passHref>
        <Link
          sx={{
            color: 'text',
            '&:hover': { color: 'primary' },
          }}
        >
          {blog.title}
        </Link>
      </NextLink>
      <Text>{blog.excerpt}</Text>
      <Flex>
        {blog.tags && blog.tags.map(tag => <Text key={tag}>#{tag}</Text>)}
      </Flex>
    </Box>
  );
}
