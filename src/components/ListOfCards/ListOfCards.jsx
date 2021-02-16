import React, { useState } from 'react';
import Card from '../Card/Card';
import './ListOfCards.css';

const ListOfCards = () => {
  const LIST_OF_CARDS = [
    {id: 1, order: 1, title: 'Card'},
    {id: 2, order: 2, title: 'Card'},
    {id: 3, order: 3, title: 'Card'},
    {id: 4, order: 4, title: 'Card'},
  ];
  
  const [list, setList] = useState(LIST_OF_CARDS);
  const [currentCard, setCurrentCard] = useState(null);

  
  const dragStart = (e, card) => {
    setCurrentCard(card);
    e.target.style.background = 'lightblue';
  };

  const dragEnd = (e) => {
    e.target.style.border = '2px solid black';
    e.target.style.opacity = '1';
  };
  
  const dragOver = (e) => {
    e.preventDefault();
    e.target.style.opacity = '0.3';
    e.target.style.border = '2px dashed black';
    e.target.style.background = 'initial';
  };

  const dragDrop = (e, card) => {
    e.preventDefault();

    setList(list.map(originalCard => {
      if(originalCard.id === card.id) {
        return {...originalCard, order: currentCard.order};
      }

      if(originalCard.id === currentCard.id) {
        return {...originalCard, order: card.order};
      }

      return originalCard;
    }));
    
    e.target.style.opacity = '1';
    e.target.style.border = '2px solid black';
  };

  const sortCard = (a, b) => {
    if(a.order > b.order) {
      return 1;
    }else {
      return -1;
    }
  };

  return(
    <div className="list">
      {list.sort(sortCard).map(card => {
        return(
          <Card 
            id={card.id} 
            title={card.title} 
            key={card.id}
            draggable={true}
            onDragStart={(e) => dragStart(e, card)}
            onDragLeave={(e) => dragEnd(e)}
            onDragEnd={(e) => dragEnd(e)}
            onDragOver={(e) => dragOver(e)}
            onDrop={(e) => dragDrop(e, card)}
          >
            {card.title}#{card.id}
          </Card>
        );
      })}
    </div>
  );
}

export default ListOfCards;
