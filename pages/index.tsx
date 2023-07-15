import api from '../services/api';
import React, { useCallback, useEffect, useState } from 'react';
import { Container, GlobalStyle } from './styles';

const Home: React.FC = () => {
  const [lists, setLists] = useState([] as any)

  const getBestSellers = useCallback(async () => {
    const { data } = await api.get("/lists/full-overview.json");
    console.log(data)
    const listsArray = [];
    data.results.lists.map((list: any) => {
      listsArray.push({
        list_name: list.list_name,
        books: list.books
    })
    })
    setLists(listsArray)
  }, []);

  console.log(lists)

  useEffect(() => {
    getBestSellers();
  }, [getBestSellers]);

  return (
    <>
    <GlobalStyle/>
    <Container>
      {lists.map((list: any) => (
        <div key={list.list_name}>
          <h1>{list.list_name}</h1>
          <div className="books-row">
          Books:
            {list.books.map((book: any) => (
              <div className="book" key={book.title}>
                <h2>{book.title}</h2>
                <img src={book.book_image} alt={book.title} />
              </div>
            ))}

          </div>

        </div>
      ))}

    </Container>
    </>

  )
}

export default Home;
