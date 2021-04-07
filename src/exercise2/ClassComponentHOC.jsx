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
import { withUseRandomImage } from './useRandomImage';

class ClassComponentHOC extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { imageUrl, loading, error, toggle } = this.props;

    return (
      <Box m={2}>
        <Heading as='h3' mb={2}>
          Part 2 (HOC)
        </Heading>
        <Image src={imageUrl} />
        <Button onClick={toggle}>
          {loading ? <Spinner /> : 'Change Image'}
        </Button>
      </Box>
    );
  }
}

export default withUseRandomImage(ClassComponentHOC);
