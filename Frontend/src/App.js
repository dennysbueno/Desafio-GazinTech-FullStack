import { Box, ChakraProvider, Grid, theme } from '@chakra-ui/react';
import { Main } from './pages/Main';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
          <Main />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
