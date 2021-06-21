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
          feature: feature.feature,
          current: feature.value
        };
      });

      comparison.features.forEach((feature) => {
        if (allFeatures[feature.feature]) {
          allFeatures[feature.feature].comparison = feature.value;
        } else {
          allFeatures[feature.feature] =
          {
            feature: feature.feature,
            comparison: feature.value
          };
        }
      });

      console.log('/////features to display,');
      console.log(allFeatures);

      var featureRows = [];

      for (var key in allFeatures) {
        featureRows.push(
          <tr>
            <td className='related_comparisonCurrent'>{allFeatures[key].current || null}</td>
            <td className='related_comparisonFeature'>{allFeatures[key].feature}</td>
            <td className='related_comparisonCompare'>{allFeatures[key].comparison || null}</td>
          </tr>
        );
      }

      // console.log('//// FEATURE ROWS OBJECT');
      // console.log(featureRows);

      return (<div className='related_modal'>
        <div className='related_closeModal' onClick={(event) => {
          event.preventDefault();
          this.props.closeModal();
        }}>X</div>
        <p>COMPARING</p>
        <table className='related_comparisonTable'>
          <thead>
            <tr>
              <th>{current.name}</th>
              <th></th>
              <th className='related_comparisonCompare'>{comparison.name}</th>
            </tr>
          </thead>
          <tbody>
            {featureRows}
          </tbody>
        </table>

      </div>);

    }



  }
}

export default ComparisonModal;