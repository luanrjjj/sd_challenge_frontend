import styled from "styled-components";
import {shade} from 'polished';
import colors from '../../styles/colors';
import { Menu as MenuInner } from '@szhsin/react-menu';

export const FiltersSection = styled.div`
  padding-left: .5rem;

  .szh-menu-button {
    border: 1px solid gray !important;
    height: 40px;
    width: 80px;
    background-color: black;
    cursor: pointer;

    a {
      color: ${colors.purple};
      opacity: 0.9;
      font-weight: 700;
    }

    &:hover {
      background-color: ${shade(0.8, `${colors.black}`)};
    }

    }

    a {
      & + a {
        margin-left: 30px;
      }
  }

  .filter-items-list {
    display: flex;
    list-style-type: none;
    padding: 0;
  }
`;


export const Menu = styled(MenuInner)`
  .szh-menu {
    font-family: sans-serif;
    font-size: 1.25rem;
    user-select: none;
    box-shadow: 0 2px 9px 3px rgba(0, 0, 0, 0.25);
    background-color: #22262c;
    border: 1px solid #333;
    border-radius: 6px;
    padding: 6px;
    min-width: 10rem;
    color: #fff;
    z-index: 999;

    .dropdown-filter {
        font-size: 14px;
        font-weight: 700;
        width: 100%;

        &.selected {
          a {
            color:${colors.purple}
          }
        }
    }

    &__item {
      border-radius: 6px;
      padding: 0.5rem 0.625rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      a {
        color: white;
      }
    }

    &__item--hover {
      background-color: #31363b;
    }

    &__divider {
      margin: 0.5rem 0.625rem;
    }
  }
`;

