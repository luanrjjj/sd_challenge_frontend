import React from 'react';
import { FiltersSection, Menu } from './styles';
import { MenuButton, MenuItem } from '@szhsin/react-menu';
import {Tooltip} from 'react-tooltip';


interface Filter {
  key: string;
  value: string;
}

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

  const filterText = filter?.length > 8 ? filter.substring(0, 8) + "..." : filter;

  return (
    <FiltersSection key={filter}>
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
          {items.map((type: string)=> (
            <MenuItem key={type}>
              <div className={`dropdown-filter ${type === filter ? "selected" : "" }`} onClick={() => {
                setFilter(type)
                }}>
                <a>
                  {type}
                </a>
              </div>
            </MenuItem>
          ))}
        </Menu>
    </FiltersSection>
  )
}

export default Filter;
