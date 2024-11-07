// src/components/PaintingForm.js
import React, { useState, useEffect } from 'react';

const PaintingForm = ({ selectedPainting, onUpdatePainting }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(selectedPainting);
  }, [selectedPainting]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdatePainting(formData);
  };

  if (!selectedPainting) return <p>Select a painting to edit its details</p>;

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', width: '300px' }}>
      <h3>Edit Painting</h3>
      <div>
        <label>Title:</label>
        <input name="Title" value={formData.Title || ''} onChange={handleChange} />
      </div>
      <div>
        <label>Artist Last Name:</label>
        <input name="LastName" value={formData.LastName || ''} onChange={handleChange} />
      </div>
      <div>
        <label>Gallery Name:</label>
        <input name="GalleryName" value={formData.GalleryName || ''} onChange={handleChange} />
      </div>
      <div>
        <label>Year of Work:</label>
        <input name="YearOfWork" type="number" value={formData.YearOfWork || ''} onChange={handleChange} />
      </div>
      <div>
        <label>Description:</label>
        <textarea name="Description" value={formData.Description || ''} onChange={handleChange}></textarea>
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default PaintingForm;
