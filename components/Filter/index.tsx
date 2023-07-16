import React from 'react';
import { FiltersSection, Menu } from './styles';
import { MenuButton, MenuItem } from '@szhsin/react-menu';

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

  return (
    <>
      <FiltersSection>
        <div>
          <Menu
            menuButton={() => (
              <MenuButton className="filter-value-selected-button" >
                <a>
                  {defaultValue}
                </a>
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