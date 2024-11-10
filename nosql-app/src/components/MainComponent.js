// src/components/MainComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PaintingList from './PaintingList';
import PaintingForm from './PaintingForm';

const MainComponent = () => {
  const [paintings, setPaintings] = useState([]);
  const [selectedPainting, setSelectedPainting] = useState(null);

  // Fetch paintings from MongoDB
  useEffect(() => {
    const fetchPaintings = async () => {
      try {
        // Use the full URL to avoid CORS issues and incorrect port
        const response = await axios.get('http://localhost:3001/api/paintings');
        setPaintings(response.data);
        console.log("Fetched paintings:", response.data);  // Log the fetched data

        console.log("fetched paintings");
      } catch (error) {
        console.error('Error fetching paintings:', error);
      }
    };
    fetchPaintings();
  }, []);
  
  

  // Update painting in MongoDB
  const updatePainting = async (updatedPainting) => {
    try {
      await axios.put(`/api/paintings/${updatedPainting.PaintingID}`, updatedPainting);
      setPaintings((prevPaintings) =>
        prevPaintings.map((p) => (p.PaintingID === updatedPainting.PaintingID ? updatedPainting : p))
      );
      alert('Painting updated successfully!');
    } catch (error) {
      console.error('Error updating painting:', error);
      alert('Failed to update painting.');
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <PaintingList paintings={paintings} onSelectPainting={setSelectedPainting} />
      <PaintingForm selectedPainting={selectedPainting} onUpdatePainting={updatePainting} />
    </div>
  );
};

export default MainComponent;
