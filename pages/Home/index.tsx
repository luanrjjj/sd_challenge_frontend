import api from '../../services/api';
import React, { useCallback, useEffect, useState } from 'react';
import {Container} from './styles';
import BookCard from '../../components/bookCard';
import Filter from '../../components/Filter';
import Book from '../../components/book';

interface BuyLink {
  name: string;
  url: string;
}

interface BookProps {
  image: string;
  title: string;
  description: string;
  book_image: string;
  author: string;
  rank: number;
  weeks_on_list: number;
  buy_links: BuyLink[];
}

interface List {
  list_name: string;
  books: BookProps[];
}

const Home: React.FC = () => {
  const [lists, setLists] = useState<List[]>([])
  const [filter, setFilter] = useState('')
  const [listFiltered, setListFiltered] = useState<BookProps[]>([]);

  const fiction = ['Combined Print and E-Book Fiction', 'Hardcover Fiction', 'Trade Fiction Paperback']
  const nonFiction= ['Combined Print and E-Book Nonfiction', 'Hardcover Nonfiction', 'Paperback Nonfiction', 'Advice How-To and Miscellaneous']
  const childrensBooks = ['Children’s Middle Grade Hardcover', 'Children’s Picture Books', 'Children’s Series', 'Young Adult Hardcover']

  const getBestSellers = useCallback(async () => {
    const { data } = await api.get("/lists/full-overview.json");
    const listsArray = [];
    data.results.lists.map((list: List) => {
      listsArray.push({
        list_name: list.list_name,
        books: list.books
      })
    })
    setLists(listsArray)
  }, []);

  const getListFiltered = useCallback(async () => {
    if (filter.length == 0) {
      return;
    }
    const listByFilter = lists.find((list: List) =>
        list.list_name === filter
    )
    setListFiltered(listByFilter.books)
  }, [filter])

  const clearFilter = () => {
    setFilter('')
    setListFiltered([])
  }

  useEffect(() => {
    getBestSellers();
  }, [getBestSellers]);

  useEffect(() => {
    getListFiltered()
  },[getListFiltered])

  return (
      <Container>
        <div className="title-page">
          <h1>NY Times Best Sellers</h1>
        </div>

        <div className="filters-section">
          <Filter
            items={fiction}
            defaultValue={'Fiction'}
            filter={filter}
            setFilter={setFilter}
          />

          <Filter
            items={nonFiction}
            defaultValue={'Non Fiction'}
            filter={filter}
            setFilter={setFilter}
          />

          <Filter
            items={childrensBooks}
            defaultValue={'Childrens Books'}
            filter={filter}
            setFilter={setFilter}
          />
          {filter && (
            <div className="clear-filter">
              <button onClick={clearFilter}>Clear Filter</button>
            </div>
          )}
        </div>
        <div className="separator"/>
          {listFiltered.length>0 ? (
             <div className="books-list-container">
            {listFiltered.map((book) => (
              <Book
                image={book.book_image}
                title={book.title}
                description={book.description}
                author={book.author}
                rank={book.rank}
                weeks_on_list={book.weeks_on_list}
                buy_links={book.buy_links}
              />

            ))}
            </div>
          ) : (
            <div className="books-card-container">
            {lists.map((list: List) => (
                <div className="content" key={list.list_name}>
                  <h2>{list.list_name}</h2>
                    <div className="row-books">
                      {list.books.slice(0, 3).map((book: BookProps, index) => (
                        <BookCard
                          image={book.book_image}
                          title={book.title}
                          description={book.description}
                          author={book.author}
                          rank={book.rank}
                          weeks_on_list={book.weeks_on_list}
                          buy_links={book.buy_links}
                        />
                      ))}
                    </div>
                  <div className="separator"/>
                </div>
              ))}
           </div>
          )}
      </Container>
  )
}

export default Home;
