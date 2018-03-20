import styled from 'styled-components';
import {space, color} from 'styled-system';

const Comp = styled.div(['','',''], space, color);

const Box = (props) => <Comp p={2} bg='red' {...props} />

export default () => <Box>This causes the error!</Box>
