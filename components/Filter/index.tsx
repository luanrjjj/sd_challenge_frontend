import React from 'react';
import { FiltersSection, Menu } from './styles';
import { MenuButton, MenuItem } from '@szhsin/react-menu';
import {Tooltip} from 'react-tooltip';

type FilterProps = {
  items: string [];
  defaultValue: string;
  filter: string;
  setFilter: (filter: string) => void;
};

const Filter: React.FC<FilterProps> = ({
  items,
  defaultValue,
  filter,
  setFilter,
}) => {

  const filterText = filter?.length > 16 ? filter.substring(0, 16) + "..." : filter;

  return (
    <>
      <FiltersSection>
        <div>
          <Menu
            menuButton={() => (
              <MenuButton className="filter-value-selected-button" >
                <a data-tooltip-id="tooltip-field-select" data-tooltip-content={filter}>
                  {items.includes(filter) && filterText || defaultValue}
                </a>
                <Tooltip id="tooltip-field-select" />
              </MenuButton>
            )}
            viewScroll={"auto"}
            position={"auto"}
          >
            {items.map((type:string)=> (
              <MenuItem>
                <div className={`dropdown-filter ${type === filter ? "selected" : "" }`} key ={type} onClick={ () => setFilter(type)}>
                  <a key={type} >{type}</a>
                </div>
              </MenuItem>
            ))}
          </Menu>
        </div>
      </FiltersSection>
    </>
  )
}

export default Filter;
