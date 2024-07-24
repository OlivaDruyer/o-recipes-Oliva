import React, { useState } from 'react';
import { Menu, Grid } from 'semantic-ui-react';

interface MenuProps {
    items: { name: string; label: string } [];
    activeItem: string;
    onItemClick: (name: string) => void;
  }
  
  // Définir le composant fonctionnel avec les props
  function CustomMenu ({ items, activeItem, onItemClick }: MenuProps) {
    
    return (
    <Grid>
      <Grid.Column width={4}>
        <Menu fluid vertical tabular>
          <Menu.Item
            name='Accueil'
            active={activeItem === 'Accueil'}
            onClick={handleItemClick}
          >
            Accueil
          </Menu.Item>
          <Menu.Item
            name='pics'
            active={activeItem === 'pics'}
            onClick={handleItemClick}
          >
            Pics
          </Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid>
  );
}

export default CustomMenu;
