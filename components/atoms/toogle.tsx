import { useBoolean } from '@chakra-ui/react';
import { FC } from 'react';

export const ToggleExample: FC = () => {
  const [flag, setFlag] = useBoolean();
  const [mouse, setMouse] = useBoolean();

  return (
    <>
      <p>Boolean State: {flag.toString()}</p>
      <button onClick={setFlag.toggle}>Click me to toggle the boolean state</button>

      <div onMouseEnter={setMouse.on} onMouseLeave={setMouse.off}>
        {mouse ? 'the flag is on' : 'hover me to turn on'}
      </div>
    </>
  );
};
