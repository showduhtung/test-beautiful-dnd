import React from 'react';
import { Copyable } from './Copyable';

export function Shop(props) {
  return <Copyable droppableId="SHOP" className="shop" items={props.items} />;
}
