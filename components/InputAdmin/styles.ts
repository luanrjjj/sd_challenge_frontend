import styled from "styled-components";
import colors from "../../styles/colors";


export const InputContainer = styled.div `
/* .bewiz-input-container { */

  .bewiz-input {
    width: 100%;
    display: flex ;
    align-items: center;
    border-radius: 8px;
    min-height: 2.375rem;
    border: 1px solid ${colors.purple} !important;
    /* min-width: 150px; */


    .ant-input-number-input-wrap {
      width: 100%;
      padding: 0 10px;
    }

    .ant-select-selector,
    .ant-select,
    .ant-select-selection-search-input {
      height: 100% !important;
      border-radius: 12px !important;
    }

    .ant-select-selection-placeholder,
    .ant-select-selection-item {
      display: flex !important;
      align-items: center !important;
    }
    .ant-input-number-input {
      padding: 0;
    }

    .ant-input-prefix {
      span {
        color: #A8A8A8;
        font-size: 1.1rem;
        margin: 0 .6rem;
      }
    }

    .ant-input {
      &:hover {
        border: 2px solid ${colors.purple} !important;
      }
      &.ant-input-affix-wrapper-focused,
      &.ant-input-number-focused,
      &:focus {
        border: 2px solid ${colors.purple} !important;
        box-shadow: 0 0 2px ${colors.purple} !important;
      }
    }

    &:hover {
      border: 2px solid ${colors.purple} !important;
    }
    &.ant-input-affix-wrapper-focused,
    &.ant-input-number-focused,
    &:focus {
      border: 2px solid ${colors.purple} !important;
      box-shadow: 0 0 2px ${colors.purple} !important;
    }
  }

  .bewiz-input.ant-select-multiple {
    .ant-select-selection-item {
      height: 90% !important;
      /* border-radius: .25rem; */
    }

  }

  .custom-input-tooltip {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    top: 24%;
    right: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }


.new-bewiz-styles {
  .bewiz-input {
    border-radius: .75rem;
    height: 3rem;

    .ant-input-number-group {
      .ant-input-number-input-wrap {
        height: 100%;

        display: flex;
        align-items: center;
      }
    }

    .ant-input-number-group-addon:first-child {
      border-top-left-radius: .75rem !important;
      border-bottom-left-radius: .75rem !important;
    }

    .ant-input-number-group-addon:first-child ~ .bewiz-input {
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
    }

    .ant-input-number-group-addon:last-child {
      border-top-right-radius: .75rem !important;
      border-bottom-right-radius: .75rem !important;
    }

    .ant-input-number-group-addon:last-child ~ .bewiz-input {
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }
  }
}

`
