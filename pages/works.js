import styled from 'styled-components';
import {space, color} from 'styled-system';

const Comp = styled.div`
  ${space}
  ${color}
`;

const Box = (props) => <Comp p={2} bg='green' {...props} />

export default () => <Box>This causes no error!</Box>
