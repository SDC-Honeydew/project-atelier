import React from 'react';
class ComparisonModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.showModal) {
      return null;
    }
    return <div>Hello Modal</div>;
  }
}

export default ComparisonModal;