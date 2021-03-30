import { Component } from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  Code,
  Spinner,
  Button,
} from '@chakra-ui/react';
// import { withuseRandomImage } from './useRandomImage';

class ClassComponentHOC extends Component {
  constructor(props) {
    super(props);
  }
  // Class stuff that you can't refactor would be here 😬

  render() {
    // We need access to the return values from our hook here as props
    

    return (
      <Box m={2}>
        <Heading as='h3'>Part B (HOC)</Heading>
        <Text>
          Refactor this component to implement the{' '}
          <Code>useRandomImage hook</Code> making use of your HOC export that
          works in a class
        </Text>
        <Text>
          Tip: The fetchRandomImage function image should be executed only on
          the first render.
        </Text>
        {/* Use the return from your hook here for the image src! Also, add your reload button ;-)  */}

        <Image />
      </Box>
    );
  }
}

export default ClassComponentHOC
