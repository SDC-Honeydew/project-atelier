import React from 'react';
class ComparisonModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('current product features:', this.props.currentProd);
    console.log('comparison product features:', this.props.comparisonProd);
    if (!this.props.showModal) {
      return null;
    }
    return <div className='related_modal'>
      <div onClick={(event) => {
        event.preventDefault();
        this.props.closeModal();
      }}>X</div>
      <h6>COMPARING</h6>
      <table className='comparison_table'>
        <thead>
          <tr>
            <th>Product 1</th>
            <th></th>
            <th>Product 2</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>

    </div>;


  }
}

export default ComparisonModal;