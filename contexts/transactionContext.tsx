import React, { createContext, useContext, useState } from 'react';
import mockTransactions from '../pages/Home/transactions';

interface TransactionProps {
  id: number;
  // title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: TransactionProps[];
  setTransactions: React.Dispatch<React.SetStateAction<TransactionProps[]>>;
}

// Create the context
const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

// Create a provider component
export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState(mockTransactions); // Default value is an empty array

  return (
    <TransactionContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
}

// Custom hook to access the context
export function useTransaction() {
  return useContext(TransactionContext);
}
