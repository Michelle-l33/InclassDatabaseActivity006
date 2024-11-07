// src/components/PaintingList.js
import React from 'react';

const PaintingList = ({ paintings, onSelectPainting }) => {
  return (
    <div style={{ overflowY: 'scroll', maxHeight: '600px', width: '200px', borderRight: '1px solid #ccc' }}>
      {paintings.map((painting) => (
        <div key={painting.PaintingID} onClick={() => onSelectPainting(painting)} style={{ cursor: 'pointer', padding: '10px' }}>
          <img src={`https://your-image-source/${painting.ImageFileName}`} alt={painting.Title} style={{ width: '100%' }} />
          <p>{painting.Title}</p>
        </div>
      ))}
    </div>
  );
};

export default PaintingList;
