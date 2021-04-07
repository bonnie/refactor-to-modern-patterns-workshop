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
import { UseRandomImage } from './useRandomImage';

class ClassComponentRenderProps extends Component {
  constructor(props) {
    super(props);
  }
  // Class stuff that you can't refactor would be here 😬

  render() {
    // We need access to the return values from our hook in the return by creating a funtion that takes them as params

    return (
      <Box m={2}>
        <Heading as='h3' mb={2}>
          Part 2 (RenderProps)
        </Heading>

        <UseRandomImage>
          {({ imageUrl, loading, error, toggle }) => (
            <>
              <Image src={imageUrl} />
              <Button onClick={toggle}>
                {loading ? <Spinner /> : 'Change Image'}
              </Button>
            </>
          )}
        </UseRandomImage>
      </Box>
    );
  }
}

export default ClassComponentRenderProps;
