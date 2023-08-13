import styled from 'styled-components';
import colors from '../../styles/colors';


export const ButtonContainer = styled.div `
.gyramais-btn {
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
  border: 1px solid ${colors.purple};
  color: ${colors.purple};
  height:1.5rem;
  border-radius: .75rem;
  margin:0;
  padding: 0 0.9rem;
  transition: .6s;
  font-weight: 300;
  cursor: pointer;
  outline: none;
  line-height:1.2rem;

  span {
    font-weight: 600 !important;
  }

  &.gyramais-btn-loading{
    cursor: wait;
  }
  &.gyramais-btn-primary{
    background-color: var(--primary-color);
    color: #ffffff;
  }
  &.gyramais-btn-secondary{
    background-color: var(--secondary-color);
    color: #ffffff;
  }
  &.gyramais-btn-blue {
    background-color: #1256FF;
    color: #ffffff;

    span {
      color: #ffffff;
      font-weight: 500 !important;
    }
  }
  &.gyramais-btn-secondary-second {
    background-color:#B0C2ED;
    color: black;
  }
  &.gyramais-btn-success{
    background-color: var(--success-color);
    color: #ffffff;
  }
  &.gyramais-btn-warning{
    background-color: var(--warning-color);
    color: #ffffff;
  }
  &.gyramais-btn-danger{
    background-color: var(--danger-color);
    color: #ffffff;
  }
  &.gyramais-btn-link {
    background: none;
    border: none;
    color: var(--link-button-color);
    padding: 0;
    &:hover {
      filter: brightness(1.4);
    }
    .link-button-icon {
      margin-right: .5rem;
    }
  }
  &.gyramais-action-button {
    height: 0;
    min-height:2.2rem;
    min-width: 2.2rem;
    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: .6rem .6rem !important;

    /* background-color: green !important; */
  }
  &:disabled{
    cursor:not-allowed;
    opacity: 0.8;
    background-color: #f0f0f0;

    span {
      color: #000000 !important;
    }
    &.gyramais-btn-link{
      background: none;
    }

    &:not(.gyramais-action-button) {
      .anticon{
        margin-right: 1rem;
      }
    }
    svg{
      fill: gray;
    }
  }
  &:hover {
    filter: brightness(1.05);
    &:disabled {
      filter: brightness(1);
    }
  }
}
.gyramais-btn-large{
  height: 3.75rem;
  span{
    font-size: 1.25rem;
  }
}

.gyramais-btn-block{
  width:100%;
  max-width: 100%;
}

.new-gyramais-styles {
  .gyramais-btn {
    font-size: .9rem;

    padding-top: 1.5rem;
    padding-bottom: 1.5rem;

    border-radius: 1rem;

    span {
      font-weight: 500 !important;
    }

    &.gyramais-btn-icon {
      background-color: green;

      &.only-icon {
        transition: 0s !important;
        padding-top: 0;
        padding-bottom: 0;

        &.gyramais-btn-loading {
          padding: .4rem !important;
        }
      }

      .anticon {
        font-size: 1.1rem;
      }
    }

    &.gyramais-action-button {
      border: 1px solid #C9D3CC;
      border-radius: .65rem;
    }
  }
}


`
