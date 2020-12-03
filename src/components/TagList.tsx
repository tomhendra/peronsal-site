import React from 'react';
import { Flex } from 'theme-ui';
// import { useCheckbox, useCheckboxGroup, useStyleConfig } from '@chakra-ui/core';

// function TagButton(props) {
//   const { getCheckboxProps, getInputProps } = useCheckbox(props);
//   const tagStyles = useStyleConfig('TagButton', props);

//   const input = getInputProps();
//   const checkbox = getCheckboxProps();

//   return (
//     <Box as="label">
//       <input {...input} />
//       <Box {...checkbox} {...tagStyles}>
//         #{props.value}
//       </Box>
//     </Box>
//   );
// }

export function TagList({ tags, value, onChange }) {
  // const { getCheckboxProps } = useCheckboxGroup({
  //   value,
  //   onChange,
  // });

  return (
    <Flex
      sx={
        {
          // spacing={4}
        }
      }
    >
      {/* {tags.map((value) => {
        const tag = getCheckboxProps({ value });
        return <TagButton key={value} {...tag} />;
      })} */}
    </Flex>
  );
}
