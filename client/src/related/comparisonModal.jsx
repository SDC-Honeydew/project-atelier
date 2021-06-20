import React from 'react';
class ComparisonModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.showModal) {
      return null;
    } else {
      var current = this.props.currentProd;
      var comparison = this.props.comparisonProd;
      //create an object containing all features present in either product
      var allFeatures = {};
      current.features.forEach((feature) => {
        allFeatures[feature.feature] =
        {
          current: feature.value
        };
      });

      comparison.features.forEach((feature) => {
        if (allFeatures[feature.feature]) {
          allFeatures[feature.feature].comparison = feature.value;
        } else {
          allFeatures[feature.feature] =
          {
            comparison: feature.value
          };
        }
      });

      console.log('/////features to display,');
      console.log(allFeatures);

      return (<div className='related_modal'>
        <div onClick={(event) => {
          event.preventDefault();
          this.props.closeModal();
        }}>X</div>
        <h6>COMPARING</h6>
        <table className='comparison_table'>
          <thead>
            <tr>
              <th>{current.name}</th>
              <th></th>
              <th>{comparison.name}</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>

      </div>);

    }



  }
}

export default ComparisonModal;