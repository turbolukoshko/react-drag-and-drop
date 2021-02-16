import React from 'react';
import './Card.css';

const Card = ({
  id,
  title,
  draggable,
  onDragStart,
  onDragLeave,
  onDragEnd,
  onDragOver,
  onDrop,
}) => {
  return (
    <div 
      className="card"
      draggable={draggable}
      onDragStart={onDragStart}
      onDragLeave={onDragLeave}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDrop={onDrop}
      
    >
      {title} #{id}
    </div>
  );
};

export default Card;
