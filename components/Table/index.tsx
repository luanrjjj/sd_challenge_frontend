import React from 'react';
import {
  Table,
} from 'antd';

import {
  TableContainer
} from './styles'

interface TableProps {
  columns: any;
  dataSource: any;
  emptyText?: string;
  loading: boolean;
  total?: number;
  smartLoad?: boolean;
  page?: number;
  setPage?: (page: number) => void,
  onChange?: () => void,
  paginationProps?: {};
}


const TableComponent = ({
  columns = [],
  dataSource,
  emptyText,
  loading,
  total,
  setPage,
  smartLoad = false,
  onChange,
}: TableProps) => {

  const paginationProps = smartLoad ?
   { defaultPageSize: 10, pageSizeOptions: ["5", "10"], total, onChange: (page: number) => setPage(page)} :
    { defaultPageSize: 5, pageSizeOptions: ["5", "10"]};

  return (
  <TableContainer>
  <Table
    loading={loading}
    rowKey="id"
    className="component-table"
    pagination={paginationProps}
    columns={columns}
    scroll={{ x: 'max-content' }}
    dataSource={dataSource || []}
    locale={{ emptyText }}
  />
</TableContainer>
  )
}


export default TableComponent;
