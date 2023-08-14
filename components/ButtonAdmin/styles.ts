import styled from 'styled-components';
import colors from '../../styles/colors';


export const ButtonContainer = styled.div `
.component-btn {
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

  &.component-btn-loading{
    cursor: wait;
  }
  &.component-btn-primary{
    background-color: var(--primary-color);
    color: #ffffff;
  }
  &.component-btn-secondary{
    background-color: var(--secondary-color);
    color: #ffffff;
  }
  &.component-btn-blue {
    background-color: #1256FF;
    color: #ffffff;

    span {
      color: #ffffff;
      font-weight: 500 !important;
    }
  }
  &.component-btn-secondary-second {
    background-color:#B0C2ED;
    color: black;
  }
  &.component-btn-success{
    background-color: var(--success-color);
    color: #ffffff;
  }
  &.component-btn-warning{
    background-color: var(--warning-color);
    color: #ffffff;
  }
  &.component-btn-danger{
    background-color: var(--danger-color);
    color: #ffffff;
  }
  &.component-btn-link {
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
  &.component-action-button {
    height: 0;
    min-height:2.2rem;
    min-width: 2.2rem;
    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: .6rem .6rem !important;
  }
  &:disabled{
    cursor:not-allowed;
    opacity: 0.8;
    background-color: #f0f0f0;

    span {
      color: #000000 !important;
    }
    &.component-btn-link{
      background: none;
    }

    &:not(.component-action-button) {
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
.component-btn-large{
  height: 3.75rem;
  span{
    font-size: 1.25rem;
  }
}

.component-btn-block{
  width:100%;
  max-width: 100%;
}

.new-component-styles {
  .component-btn {
    font-size: .9rem;

    padding-top: 1.5rem;
    padding-bottom: 1.5rem;

    border-radius: 1rem;

    span {
      font-weight: 500 !important;
    }

    &.component-btn-icon {
      background-color: green;

      &.only-icon {
        transition: 0s !important;
        padding-top: 0;
        padding-bottom: 0;

        &.component-btn-loading {
          padding: .4rem !important;
        }
      }

      .anticon {
        font-size: 1.1rem;
      }
    }

    &.component-action-button {
      border: 1px solid #C9D3CC;
      border-radius: .65rem;
    }
  }
}
`
