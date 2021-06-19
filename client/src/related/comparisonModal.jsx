import React from 'react';
class ComparisonModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.showModal) {
      return null;
    }
    return <div className='related_modal'>
      <p>Hello Modal</p>
      <p onClick={(event) => {
        event.preventDefault();
        this.props.closeModal();
      }}>X</p>
    </div>;
  }
}

export default ComparisonModal;