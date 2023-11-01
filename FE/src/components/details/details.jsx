import {
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';
import React from 'react';
import './details.css';
const Details = () => {
  return (
    <div className='container'>
      <Grid templateColumns='repeat(2, 1fr)' gap={10}>
        <GridItem>
          <div className='detail-image_container p-3'>
            <Image />
          </div>
        </GridItem>
        <GridItem>
          <div className='detail-image_container p-3'>
            <Center>
              <Heading>Hello</Heading>
            </Center>
            <div className='detail_content d-flex align-items-center'>
              <span>Tác giả:</span>
            </div>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Details;
