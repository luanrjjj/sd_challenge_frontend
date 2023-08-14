import React, { createContext, useContext, useState } from 'react';
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

  return (
    <TransactionContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransaction() {
  return useContext(TransactionContext);
}
