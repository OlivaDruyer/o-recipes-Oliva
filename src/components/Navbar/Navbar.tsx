import { MenuItem, GridColumn, Grid, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import React from 'react';

interface MenuProps {
  items: { slug: string; name: string; label: string }[];
  activeItem: string | null;
  onItemClick: (name: string) => void;
}

function CustomMenu ({ items, activeItem, onItemClick }: MenuProps) {
  return (
    <Grid>
      <GridColumn width={5}>
        <Menu vertical tabular >
            {/*menu statique du menu Accueil*/}
            <MenuItem
            name='Accueil'
            active={activeItem === 'Accueil'}
            onClick={() => onItemClick('Accueil')}
            as={Link} // Assure que le menu Accueil est un lien
            to='/'
          >
             Accueil
            </MenuItem>
            {/*Menu dynamique avec les recettes*/}
           {items.map(item => (
            <MenuItem
              key={item.name}
              name={item.name}
              active={activeItem === item.name}
              onClick={() => onItemClick(item.name)}
              as={Link} // Assure que chaque item est un lien
              to={`/recipe/${item.slug}`}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </GridColumn>
    </Grid>
  );
}

export default CustomMenu;