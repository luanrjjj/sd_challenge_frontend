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
  description: string;
}

interface FilterProps {
  key: string;
  value: string;
}

const Home: React.FC = () => {
  const [typeFilter, setTypeFilter] = useState('Tipo')
  const [categoryFilter, setCategoryFilter] = useState('Categoria')
  const [ filters, setFilters ] = useState([])
  const [transactionsFiltered, setTransactionsFiltered] = useState<TransactionProps[]>([]);
  const [transaction, setTransaction] = useState<TransactionProps>({} as TransactionProps);
  const [editTransactionModal, setEditTransactionModal] = useState(false);
  const { transactions, setTransactions } = useTransaction();

  const categories = [ 'rent', 'food', 'gym', 'subscription', 'other']
  const types = ['deposit', 'withdraw']

  const totalValue = (filters.length > 0 ? transactionsFiltered:  transactions).reduce((acc, transaction) => {
    const valueByType = transaction.type === 'deposit' ? transaction.amount : -transaction.amount
    return acc + valueByType;
  }, 0)

  const totalValueDeposited = (filters.length > 0 ? transactionsFiltered:  transactions).reduce((acc, transaction) => {
    const valueByType = transaction.type === 'deposit' ? acc + transaction.amount : acc;
    return valueByType;
  }, 0)

  const totalValueWithdrawed =(filters.length > 0 ? transactionsFiltered:  transactions).reduce((acc, transaction) => {
    const valueByType = transaction.type === 'withdraw' ? acc - transaction.amount : acc;
    return  valueByType;
  }, 0)

  const removeTransaction = ((transaction: TransactionProps, transactions: TransactionProps[]) => {
    const index = transactions.findIndex((t: TransactionProps) => t.id === transaction.id);
    transactions.splice(index, 1);
    setTransactions([...transactions]);
  })

  const clearFilter = () => {
    setFilters([]);
    setCategoryFilter('');
    setTypeFilter('');
  }

  const addFilters = useCallback(() => {
    let newFilters = [];
    if (types.includes(typeFilter)) {
      const existTypeFilter = filters.find((filter: FilterProps) => filter.key === 'type')
      if (existTypeFilter) {
        const index = filters.indexOf(existTypeFilter);
        filters[index] = {key: 'type', value: typeFilter};
        newFilters = filters
      } else {
        newFilters = [...filters, {key: 'type', value: typeFilter}]
        setFilters(newFilters)
      }
    }

    if (categories.includes(categoryFilter)) {
      const existCategoryFilter = filters.find((filter: FilterProps) => filter.key === 'category')
      if (existCategoryFilter) {
        const index = filters.indexOf(existCategoryFilter);
        filters[index] = {key: 'category', value: categoryFilter};
        newFilters = filters
      } else {
        newFilters = [...filters, {key: 'category', value: categoryFilter}]
        setFilters(newFilters)
      }
    }

   const transactionsResult = transactions.filter((transaction: TransactionProps) => {
      return newFilters.every((filter: any) => {
        return transaction[filter.key] === filter.value
      })
    })

    setTransactionsFiltered(transactionsResult)
  }, [categoryFilter, typeFilter])


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

          {filters.length > 0 && (
            <div className="clear-filter">
              <button onClick={clearFilter}>Limpar filtros</button>
            </div>
          )}
        </div>
        <div className="section-create-transaction">
          <Button onClick={() => setEditTransactionModal(true)}>Criar Transação</Button>
        </div>

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
            onClose={() => {
              setEditTransactionModal(false);
              setTransaction({} as TransactionProps)
              setFilters([])
              setCategoryFilter('')
              setTypeFilter('')
            }}
          />
      </Container>
    </>
  )
}

export default Home;
