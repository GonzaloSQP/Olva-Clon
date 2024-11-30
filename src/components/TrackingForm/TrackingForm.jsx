import React, { useState } from 'react';
import './TrackingForm.css';

const TrackingForm = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [year, setYear] = useState('24');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="tracking-section">
      <h1>SEGUIMIENTO DE ENVÍOS</h1>
      
      <form onSubmit={handleSubmit} className="tracking-form">
        <div className="form-group">
          <label>NÚMERO DE TRACKING</label>
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Escriba el número de tracking"
          />
          <small>Corresponde al número de seguimiento que desea consultar.</small>
        </div>

        <div className="form-group">
          <label>AÑO DE EMISIÓN</label>
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="24">24</option>
            <option value="23">23</option>
            <option value="22">22</option>
          </select>
          <small>Corresponde al año de creación del tracking que desea consultar.</small>
        </div>

        <button type="submit" className="submit-btn">Enviar</button>
      </form>
    </div>
  );
};

export default TrackingForm;