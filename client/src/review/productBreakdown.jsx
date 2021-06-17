import React from 'react';

const ProductBreakdown = (props) => (
  <div style={{ width: '250px', marginLeft: '50px' }}>
    <div className='form-range'>
      <label htmlFor="customRange1" className="form-label">Comfort</label>
      <input type="range" className="form-range" step="25" min="0" max="100" id="customRange1" disabled />
    </div><br /><br />
    <div className='form-range'>
      <label htmlFor="customRange1" className="form-label">Size</label>
      <input type="range" className="form-range" id="customRange1" disabled />
    </div>
  </div>
);

export default ProductBreakdown;