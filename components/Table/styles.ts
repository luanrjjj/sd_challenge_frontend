import * as React from 'react'

import styled from 'styled-components'
import colors from '../../styles/colors'

export const TableContainer = styled.div `

  .component-table {
  .ant-table-content {
    .ant-table-thead {
      background-color: white !important;
      .ant-table-cell {
        color: #A8A8A8 !important;
        font-weight: 500;
        padding: .812rem 1rem !important;
        background-color: ${colors.grayThread} !important;

        border: none;
        border-bottom: 1px solid black !important;

        &::before {
          display: none;
        }
      }
    }

    .ant-table-row {
      background-color: ${colors.grayThread} !important;
    }

    .ant-table-cell-row-hover {
        background-color: ${colors.grayThreadShade2} !important;
    }

    .ant-table-tbody {
      background-color: ${colors.grayThread} !important;

      .ant-table-cell {
        text-transform: uppercase;
        font-weight: 600;
        color: white;
        font-size: 12px;
        z-index: 0;
      }
    }

    &::-webkit-scrollbar {
      width: .5rem;
      height: .5rem;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: #DCDCDC;
      border-radius: 0.625rem;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #AEAEAE;
    }
  }

  .ant-pagination {
    display: flex;
    justify-content: center;

    li {
      margin-left: 20px;
      list-style-type: none;
    }

    .ant-pagination-prev,
    .ant-pagination-next {
      border-radius: 0.5rem;
      background-color: white;
      border: none;

      .ant-pagination-item-link {
        border: none;
        cursor: pointer;
      }
    }
  }
  .ant-pagination-item {
    border-radius: 0.5rem;
    cursor: pointer;
    color: white;
  }

  .ant-pagination-item-active {
    border-color: ${colors.purple};

    a {
      color: ${colors.purple};
    }
  }

  .ant-pagination-item-link {
    border-radius: 0.5rem;
  }
}

.ant-table-placeholder,
.ant-table-cell {
  background-color: ${colors.grayThread} !important;

  &:hover {
    background-color: ${colors.grayThread} !important;
  }
}

.ant-empty-description {
  color: white;
}
`
