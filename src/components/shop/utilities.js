import { v4 as uuid } from 'uuid';

export const reorder = (list, startIndex, endIndex) => {
  const [removed] = list.splice(startIndex, 1);
  list.splice(endIndex, 0, removed);
  return list;
};

export const copy = (
  source,
  destination,
  droppableSource,
  droppableDestination
) => {
  console.log(
    'copy',
    source,
    destination,
    droppableSource,
    droppableDestination
  );
  const item = source[droppableSource.index];
  destination.splice(droppableDestination.index, 0, { ...item, id: uuid() });
  console.log(
    'copy2',
    source,
    destination,
    droppableSource,
    droppableDestination
  );
  return destination;
};
