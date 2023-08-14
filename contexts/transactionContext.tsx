import React, { createContext, useContext, useState, useEffect } from 'react';
import mockTransactions from '../components/mock/transactions';

interface TransactionProps {
  id: number;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
  description: string;
}

interface TransactionContextType {
  transactions: TransactionProps[];
  setTransactions: React.Dispatch<React.SetStateAction<TransactionProps[]>>;
}

const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState(mockTransactions);

  useEffect(() => {
    const transactionsStore = JSON.parse(localStorage.getItem('transactionsStore'))

    if (transactionsStore) {
        setTransactions(transactionsStore)
    }
  }, [])

useEffect(() => {
    localStorage.setItem('transactionsStore', JSON.stringify(transactions))
}, [transactions])

  return (
    <TransactionContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransaction() {
  return useContext(TransactionContext);
}
