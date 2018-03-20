import styled, {ThemeProvider} from 'styled-components';

const Box = styled.div`
  padding: 8px;
  background-color: green;
`;

export default () => <Box>This causes no error!</Box>
