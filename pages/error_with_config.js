import styled from 'styled-components';
import {space, color} from 'styled-system';

const Comp = styled.div.withConfig({
  displayName: 'error__Comp',
  componentId: 's11omq17-0'
})(['','',''], space, color);

const Box = (props) => <Comp p={2} bg='green' {...props} />

export default () => <Box>This does not cause the error!</Box>
