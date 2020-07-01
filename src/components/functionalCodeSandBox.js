import React, { useCallback, useState } from 'react';
import uuid from 'uuid/v4';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const COLLECTION = [
  { id: uuid(), label: 'Apple' },
  { id: uuid(), label: 'Banana' },
  { id: uuid(), label: 'orange' },
];

const App = () => {
  const [shoppingBagItems, setShoppingBagItems] = useState([]);

  const onDragEnd = useCallback(
    (result) => {
      const { source, destination } = result;
      if (!destination) return;

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
        <h2>Shopping Bag</h2>
        <ShoppingBag items={shoppingBagItems} />
      </DragDropContext>
    </div>
  );
};

const Shop = ({ items }) => (
  <Copyable droppableId="SHOP" className="shop" items={items} />
);

const getRenderItem = (items, className) => (provided, snapshot, rubric) => {
  const item = items[rubric.source.index];
  return (
    <>
      <li
        {...provided.draggableProps}
        {...provided.dragHandlePropso}
        ref={provided.innerRef}
        style={provided.draggableProps.style}
        className={snapshot.isDragging && 'dragging'}
      >
        {item.label}
      </li>
    </>
  );
};

const Copyable = ({ droppableId, className, items }) => (
  <Droppable
    renderClone={getRenderItem(items, className)}
    droppableId={droppableId}
    isDropDisabled={true}
  >
    {(provided, snapshot) => (
      <ul ref={provided.innerRef} className={className}>
        {items.map((item, index) => {
          const shouldRenderClone = item.id === snapshot.draggingFromThisWith;
        })}
      </ul>
    )}
  </Droppable>
);
