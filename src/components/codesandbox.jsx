import React, { useState, useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import { DragDropContext } from 'react-beautiful-dnd';
import { Shop, ShoppingBag, reorder, copy } from './shop/index';

import '../index.css';

const COLLECTION = [
  { id: uuid(), label: 'Apple' },
  { id: uuid(), label: 'Banana' },
  { id: uuid(), label: 'orange' },
];

export function App() {
  const [shoppingBagItems, setShoppingBagItems] = useState([]);
  const onDragEnd = useCallback(
    (result) => {
      const { source, destination } = result;

      if (!destination) {
        return;
      }

      switch (source.droppableId) {
        case destination.droppableId:
          setShoppingBagItems((state) =>
            reorder(state, source.index, destination.index)
          );
          break;
        case 'SHOP':
          setShoppingBagItems((state) =>
            copy(COLLECTION, state, source, destination)
          );
          break;
        default:
          break;
      }
    },
    [setShoppingBagItems]
  );
  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
        <h2>Shop</h2>
        <Shop items={COLLECTION} />
        <h2>Shopping bag</h2>
        <ShoppingBag items={shoppingBagItems} />
      </DragDropContext>
    </div>
  );
}
