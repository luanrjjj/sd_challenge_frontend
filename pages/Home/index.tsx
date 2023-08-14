import React, { useCallback, useEffect, useState, createContext, useMemo } from 'react';
import Container from './styles';
import Head from 'next/head';
import {Table, Filter, TooltipText, ButtonAdmin, EditTransactionModal} from '../../components/index';
import { formatDateGeneral } from '../../utils/formatDateGeneral';
import ContainerCard from '../../components/ContainerCard';
import { BsPencil } from 'react-icons/bs';
import ScoreCard from '../../components/ScoreCard';
import {GrWorkshop} from 'react-icons/gr';
import {AiOutlineDelete} from 'react-icons/ai';
import { useTransaction } from '../../contexts/transactionContext';
import Button from '../../components/Button';

interface TransactionProps {
  id: number;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

const Home: React.FC = () => {
  const [filter, setFilter] = useState('')

  const [typeFilter, setTypeFilter] = useState('Tipo')
  const [categoryFilter, setCategoryFilter] = useState('Categoria')
  const [ filters, setFilters ] = useState([])
  console.log("filters: ", filters);

  const [transactionsFiltered, setTransactionsFiltered] = useState<TransactionProps[]>([]);
  console.log("transactionsFiltered: ", transactionsFiltered);

  const [transaction, setTransaction] = useState<TransactionProps>({} as TransactionProps);
  const [editTransactionModal, setEditTransactionModal] = useState(false);
  const { transactions, setTransactions } = useTransaction();
  const [lastUpdate, setLastUpdate] = useState(0)
  console.log("lastUpdate: ", lastUpdate);
  console.log("transactions: ", transactions);
  const categories = [ 'rent', 'food', 'gym', 'subscription', 'other']
  const types = ['deposit', 'withdraw']

  const totalValue = transactions.reduce((acc, transaction) => {
    const valueByType = transaction.type === 'deposit' ? transaction.amount : -transaction.amount
    return acc + valueByType;
  }, 0)

  const totalValueDeposited = transactions.reduce((acc, transaction) => {
    const valueByType = transaction.type === 'deposit' ? acc + transaction.amount : acc;
    return valueByType;
  }, 0)

  const totalValueWithdrawed = transactions.reduce((acc, transaction) => {
    const valueByType = transaction.type === 'withdraw' ? acc - transaction.amount : acc;
    return  valueByType;
  }, 0)


  const removeTransaction = ((transaction: TransactionProps, transactions: TransactionProps[]) => {
    const index = transactions.findIndex((t: TransactionProps) => t.id === transaction.id);
    transactions.splice(index, 1);
    setTransactions([...transactions]);
  })

  const getListFiltered = useCallback(async () => {
    if (filter.length == 0) {
      return;
    }

  const listByFilter = transactions.find((list: any) =>
    list.list_name === filter
  )
    // setListFiltered(listByFilter.books)
  }, [typeFilter, categoryFilter])

  const clearFilter = () => {
    // setFilter('')
    // setListFiltered([])
  }

  const addFilters = useCallback(() => {
    console.log("entrou aqui")
    if (types.includes(typeFilter)) {
      const existTypeFilter = filters.find((filter: any) => filter.key === 'type')
      if (existTypeFilter) {
        console.log("existTypeFilter: ", existTypeFilter);
        const index = filters.indexOf(existTypeFilter);
        filters[index] = {key: 'type', value: typeFilter};
      } else {
        setFilters([...filters, {key: 'type', value: typeFilter}])
      }
    }

    if (categories.includes(categoryFilter)) {
      const existCategoryFilter = filters.find((filter: any) => filter.key === 'category')
      if (existCategoryFilter) {
        console.log("existCategoryFilter: ", existCategoryFilter);
        const index = filters.indexOf(existCategoryFilter);
        filters[index] = {key: 'category', value: categoryFilter};
      } else {
        setFilters([...filters, {key: 'category', value: categoryFilter}])
      }
    }
   const transactionsResult = transactions.filter((transaction: any) => {
      return filters.every((filter: any) => {
        return transaction[filter.key] === filter.value
      })
    })
    console.log("transactionsResult: ", transactionsResult);

    setTransactionsFiltered(transactionsResult)
  }, [categoryFilter, typeFilter, lastUpdate])

  useEffect(() => {
    getListFiltered()
  },[getListFiltered])

  useEffect(() => {
    addFilters()
  },[typeFilter, categoryFilter])

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
        <div className="icons-column">
          <ButtonAdmin
            action
            onClick={() =>  {
              setTransaction(transaction)
              setEditTransactionModal(true)
            }}
            buttonProps={{ id: 'analysis-transaction' }}
            icon={<BsPencil />}
          />

          <ButtonAdmin
            action
            onClick={() =>  {
              removeTransaction(transaction, transactions)
            }}
            buttonProps={{ id: 'delete-transaction' }}
            icon={<AiOutlineDelete />}
          />

        </div>
      ),
    }
  ];

  return (
    <>
      <Head>
        <title>Controle Financeiro</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <div className="title-page">
          <h1>Controle Financeiro</h1>
        </div>

        <div className="filters-section">
          <Filter
            items={categories}
            defaultValue={'Categoria'}
            filter={categoryFilter}
            setFilter={setCategoryFilter}
          />

          <Filter
            items={types}
            defaultValue={'Tipo'}
            filter={typeFilter}
            setFilter={setTypeFilter}
          />

          {filter && (
            <div className="clear-filter">
              <button onClick={clearFilter}>Clear Filter</button>
            </div>
          )}
        </div>
        <Button onClick={() => setEditTransactionModal(true)}>Criar Transação</Button>
        <div className="separator"/>
        <div className="score-cards-section">
          <ScoreCard
            value={totalValue}
            title="Saldo"
            boxShadow='light'
            bgColor='white'
            subtitle="Saldo da conta"
            icon={<GrWorkshop/>}
          />
          <ScoreCard
            value={totalValueDeposited}
            title="Entrada"
            boxShadow='light'
            bgColor='white'
            subtitle="Valor total de depósitos"
            icon={<GrWorkshop/>}
          />
          <ScoreCard
            value={totalValueWithdrawed}
            title="Saída"
            boxShadow='light'
            bgColor='white'
            subtitle="Valor total de retiradas"
            icon={<GrWorkshop/>}
          />
        </div >
          {filters.length > 0 ? (
            <ContainerCard>
            <Table
              columns={transactionsColumns}
              dataSource={[...transactionsFiltered]}
              loading={false}
            />
            </ContainerCard>
          ) : (
              <ContainerCard>
              <Table
                columns={transactionsColumns}
                dataSource={[...transactions]}
                loading={false}
              />
              </ContainerCard>
          )}
          <EditTransactionModal
            transaction={transaction}
            visible={editTransactionModal}
            categories={categories}
            types={types}
            transactions={transactions}
            setTransactions={setTransactions}
            onClose={() => {
              setEditTransactionModal(false);
              setTransaction({} as any)
              setLastUpdate(lastUpdate + 1)
              setFilters([])
              setCategoryFilter('')
              setTypeFilter('')
            }}
            setVisible={setEditTransactionModal}
          />
      </Container>


    </>
  )
}

export default Home;
