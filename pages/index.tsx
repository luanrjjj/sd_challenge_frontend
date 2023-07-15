import api from '../services/api';
import styles from '../styles/Home.module.css';
import React, { useCallback, useEffect, useState } from 'react';

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
    <div className={styles.container}>
      {lists.map((list: any) => (
        <div key={list.list_name}>
          <h1>{list.list_name}</h1>
          <div>
          Books:
            {list.books.map((book: any) => (
              <div key={book.title}>
                <h2>{book.title}</h2>
                <img src={book.book_image} alt={book.title} />
              </div>
            ))}

          </div>

        </div>
      ))}

    </div>
  )
}

export default Home;
