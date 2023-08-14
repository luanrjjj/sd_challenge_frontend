import { shade } from 'polished';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { Modal as AntModal } from 'antd';
import { ModalProps } from 'antd/lib/modal';


export const Modal: React.FunctionComponent<ModalProps> = styled(AntModal)`
  position: relative;
  z-index:999;


  .ant-input {
    width: 100%;
  }

  .ant-tabs-tab-active,
  .ant-tabs-nav-list,
  .ant-tabs-tab {
    color: ${colors.purple} !important;
  }

  .ant-select {
    display: flex;

    .anticon {
      font-size: 16px;
      margin-left: 20px;
    }
  }

  .ant-select {
     border-radius: 8px !important;
     span {
        font-size: 14px !important;
     }

    }

    .ant-form-item-control {
      border-radius: 8px;
      padding: 5px;
    }

  .ant-modal-content {
    background: ${colors.grayThreadShade2};
    border-radius: 12px;
    color: ${colors.white};
    font-weight: 700;
    padding: 20px;

    .modal-footer {
      padding: 0 50px;
    }

    .ant-modal-close-x {
      color: ${colors.purple};
      font-size: 12px;
    }
    span {
      font-size: 20px;
    }

    .question-text {
      color: ${colors.purple};
    }

    p {
      font-size: 14px;
      font-weight: 500;
      opacity: 0.8;
      margin-top: 20px;
    }
  }

  .modal-buttons-line {
    border: none;
    display: grid;
    grid-gap: 5px;
    align-content: center;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-flow: revert;
    margin-top: 20px;

    .cancel-button {
      background-color: ${colors.white};
      color: ${colors.black};

      &:hover {
        background-color: ${shade(0.2, colors.white)};
      }
    }

    .confirm-button {
      background-color: ${colors.purple};
      color: ${colors.black};

      &:hover {
        background-color: ${shade(0.2, colors.purple)};
      }
    }

    button {
      width: 120px;
      height: 40px;
      span {
        font-size: 14px !important;
        font-weight: 500;
      }
    }
  }

  .ant-select-selector {
    width: 100%;
    text-align: center;
  }

  .ant-select {
    border-radius: 12px !important;
    height: 38px !important;
    color: white;
  }

  .ant-form-item-label  {
    label {
      color: white !important;
    }

  }

  .ant-input-number {
    width: 100% !important;
  }

  .ant-tabs-tab-btn{
    color: ${colors.purple} !important;
  }

  .ant-tabs-ink-bar {
    background: ${colors.purple};
  }

`;
