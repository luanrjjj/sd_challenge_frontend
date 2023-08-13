import api from '../../services/api';
import React, { useCallback, useEffect, useState } from 'react';
import {Container, Content} from './styles';
import Head from 'next/head';
import {Table, Filter, TooltipText, ButtonAdmin, EditTransactionModal} from '../../components/index';
import { formatDateGeneral } from '../../utils/formatDateGeneral';
import ContainerCard from '../../components/ContainerCard';
import { BsPencil } from 'react-icons/bs';
import ScoreCard from '../../components/ScoreCard';

interface BuyLink {
  name: string;
  url: string;
}

interface TransactionProps {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

type category = 'Rent' | 'Food' | 'Gym' | 'Subscription' | 'Other';
type type = 'income' | 'withdraw';

const Home: React.FC = () => {
  const [filter, setFilter] = useState('')
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);
  const [transactionsFiltered, setTransactionsFiltered] = useState<TransactionProps[]>([]);
  const [transaction, setTransaction] = useState<TransactionProps>({} as TransactionProps);
  console.log("transaction: ", transaction);
  const [editTransactionModal, setEditTransactionModal] = useState(false);
  console.log("editTransactionModal: ", editTransactionModal);

  const categories = ['All', 'Rent', 'Food', 'Gym', 'Subscription', 'Other']
  const types = ['All', 'DEPOSIT', 'WITHDRAW']
  const childrensBooks = ['Childrens Middle Grade Hardcover', 'Picture Books', 'Series Books', 'Young Adult Hardcover']

  const getListFiltered = useCallback(async () => {
    if (filter.length == 0) {
      return;
    }

  const listByFilter = transactions.find((list: any) =>
    list.list_name === filter
  )
    // setListFiltered(listByFilter.books)
  }, [filter])

  const getTransactions = useCallback(async () => {
    const {data} = await api.get("/transactions");
    setTransactions(data);
    console.log("data: ", data);
    const listsArray = [];

  }, []);

  const clearFilter = () => {
    // setFilter('')
    // setListFiltered([])
  }

  useEffect(() => {
    getListFiltered()
  },[getListFiltered])

  useEffect(() => {
    getTransactions()
  },[getTransactions])

  const transactionsColumns = [
    {
      title: 'CREATED_AT',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (value: string) => (value ? formatDateGeneral(new Date(value)) : '-'),
    },
    {
      title: 'CATEGORY',
      dataIndex: 'category',
      key: 'category',
      render: (value: string) => value || '-',
    },
    {
      title: 'TYPE',
      dataIndex: 'type',
      key: 'type',
      render: (value: string) => value || '-',
    },
    {
      title: 'DESCRIPTION',
      dataIndex: 'description',
      key: 'description',
      render: (value: string) => (
        <div>
        {value?.length > 16 ? (
          <TooltipText
            text={value}
            maxLength={16}
          />

        ) : (
          <span>
            {value || '-'}
          </span>
        )}
        </div>
      )
    },
    {
      title: 'AMOUNT',
      dataIndex: 'amount',
      key: 'visible',
      render: (value: boolean) => value,
    },
    {
      title: '',
      dataIndex: '',
      key: '',
      render: (transaction: TransactionProps) => (
        <div>
          <ButtonAdmin
              action
              onClick={() =>  {
                setTransaction(transaction)
                setEditTransactionModal(true)
              }}
              buttonProps={{ id: 'analysis-visualization' }}
              icon={<BsPencil />}
            />
        </div>
      ),
    }
  ];

  return (
    <>
      <Head>
        <title>Financial Control</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <div className="title-page">
          <h1>Financial Control</h1>
        </div>

        <div className="filters-section">
          <Filter
            items={categories}
            defaultValue={'All'}
            filter={filter}
            setFilter={setFilter}
          />

          <Filter
            items={types}
            defaultValue={'All'}
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
        <div className="score-cards-section">
          <ScoreCard
            value={transactions.length}
            title="Total Transactions"
          />
          <ScoreCard
            value={transactions.length}
            title="Total Transactions"
          />
          <ScoreCard
            value={transactions.length}
            title="Total Transactions"
          />
        </div >
          {transactionsFiltered.length > 0 ? (
            <div className="books-list-container">
              {transactionsFiltered.map((book: TransactionProps) => (
                <div key={book.title}>

                </div>
              ))}
            </div>
          ) : (
              <ContainerCard>
              <Table
                columns={transactionsColumns}
                dataSource={transactions}
                loading={false}
              />
              </ContainerCard>
          )}
        <EditTransactionModal
          transaction={transaction}
          visible={editTransactionModal}
          onClose={() => {
            setEditTransactionModal(false);
            setTransaction({} as any)
          }}
          setVisible={setEditTransactionModal}
          refetch={() => getTransactions}
          />

      </Container>


    </>
  )
}

export default Home;
