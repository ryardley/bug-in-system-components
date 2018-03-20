import system from 'system-components';

const Box = system({
  p: 2,
  bg: 'red',
});
Box.displayName = 'Box';

export default () => <Box>This causes an error!</Box>;
