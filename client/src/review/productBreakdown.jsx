import React from 'react';

const ProductBreakdown = (props) => (
  <div>
    <div className='form-range'>
      <label for="customRange1" class="form-label">Comfort</label>
      <input type="range" class="form-range" step="25" min="0" max="100" id="customRange1" disabled />
    </div><br /><br />
    <div className='form-range'>
      <label for="customRange1" class="form-label">size</label>
      <input type="range" class="form-range" id="customRange1" disabled />
    </div>
  </div>
);

export default ProductBreakdown;