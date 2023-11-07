import React, { useEffect, useState } from 'react';
import { Container, Grid, GridItem, Input, Spinner } from '@chakra-ui/react';
import { useDebounce } from 'use-debounce';
import axios from 'axios';
import { BookCard } from '../home/BookCard/BookCard';
export function Search() {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [debouncedValue] = useDebounce(query, 300);
  const [isLoading, setIsLoading] = useState(false);
  console.log(debouncedValue);
  useEffect(() => {
    async function SearchedMovies() {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `http://localhost:5000/search?q=${debouncedValue}`,
        );
        setSearchedBooks(res.data.books);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (debouncedValue !== '') {
      SearchedMovies();
    }
  }, [debouncedValue]);
  return (
    <>
      <Container maxW='1440px' pt='125px'>
        <Input
          mb='24px'
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Find movies'
          _placeholder={{ opacity: 0.4, color: 'inherit' }}
        />
        <Grid templateColumns='repeat(3,1fr)' gap={5}>
          {searchedBooks.map((book) => (
            <GridItem key={book.id}>
              <BookCard book={book}></BookCard>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </>
  );
}
