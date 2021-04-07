import useRandomImage from './useRandomImage';
import {
  Heading,
  Image,
  Text,
  Code,
  Button,
  Box,
  Spinner,
} from '@chakra-ui/react';

const Exercise2FunctionalComponent = () => {
  const { imageUrl, loading, error, toggle } = useRandomImage();

  return (
    <>
      <Heading as='h3'>Part 1</Heading>
      <Image src={imageUrl} />
      <Button onClick={toggle}>{loading ? <Spinner /> : 'Change Image'}</Button>
    </>
  );
};

export default Exercise2FunctionalComponent;
