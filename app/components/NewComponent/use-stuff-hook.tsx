import {useState} from 'react';

function useStuff() {
  const [count, setCount] = useState(0);
  return [count, setCount] as const;
  // https://dev.to/puruvj/react-typescript-hooks-issue-when-returning-array-50dc
}

export {useStuff};
