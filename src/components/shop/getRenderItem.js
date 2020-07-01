import React from 'react';

// This method is needed for rendering clones of draggables
export const getRenderItem = (items, className) => (
  provided,
  snapshot,
  rubric
) => {
  // console.log(provided, snapshot, rubric);
  // console.log(items)
  // console.log('\n\n')
  const item = items[rubric.source.index];
  return (
    <React.Fragment>
      <li
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        style={provided.draggableProps.style}
        className={snapshot.isDragging ? 'dragging' : ''}
      >
        {item.label}
      </li>
    </React.Fragment>
  );
};
