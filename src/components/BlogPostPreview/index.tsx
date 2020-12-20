/** @jsxImportSource theme-ui */
import NextLink from 'next/link';
import { Link, Box, Text, Flex } from 'theme-ui';

export function BlogPostPreview({ blog }) {
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
      <Text>{blog.description}</Text>
      <Flex>
        {blog.tags.map(tag => (
          <Text key={tag}>#{tag}</Text>
        ))}
      </Flex>
    </Box>
  );
}
